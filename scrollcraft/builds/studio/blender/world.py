"""Enkd Studio glass world: one continuous camera flight, cut into legs later.

Run headless:
  Blender -b -P world.py -- --test          # key frames at half res -> renders/test/
  Blender -b -P world.py -- --render        # full flight -> renders/frames/
  Blender -b -P world.py -- --render --from 1041   # only frames 1041..end
  Blender -b -P world.py -- --save          # also writes world.blend for inspection
"""
import math, os, random, sys
import bpy, bmesh

ARGS = sys.argv[sys.argv.index("--") + 1:] if "--" in sys.argv else []
HERE = os.path.dirname(os.path.abspath(__file__))
BUILD = os.path.dirname(HERE)
TEX = os.path.join(BUILD, "textures")
FPS = 24
# Leg boundaries in frames (L2 is the peak: longest clip, camera nearly still).
LEGS = [0, 144, 288, 480, 624, 768, 912, 1128]


def lin(h):
    h = h.lstrip("#")
    c = [int(h[i:i + 2], 16) / 255 for i in (0, 2, 4)]
    return tuple(x / 12.92 if x <= 0.04045 else ((x + 0.055) / 1.055) ** 2.4 for x in c) + (1.0,)


INK, MINT, ORANGE, CANVAS, ICE = lin("#0F1B1D"), lin("#7FD1B9"), lin("#E37830"), lin("#EEF4F1"), lin("#E4E9F3")

# ---------------------------------------------------------------- scene reset
bpy.ops.wm.read_factory_settings(use_empty=True)
scene = bpy.context.scene
for eng in ("BLENDER_EEVEE", "BLENDER_EEVEE_NEXT"):
    try:
        scene.render.engine = eng
        break
    except TypeError:
        pass
ee = scene.eevee
ee.taa_render_samples = 48
for attr, val in (("use_raytracing", True), ("use_shadows", True), ("use_gtao", True)):
    if hasattr(ee, attr):
        setattr(ee, attr, val)
if hasattr(ee, "ray_tracing_options"):
    ee.ray_tracing_options.resolution_scale = "2"
scene.render.fps = FPS
scene.frame_start, scene.frame_end = 1, LEGS[-1]
scene.render.resolution_x, scene.render.resolution_y = 1920, 1080
scene.view_settings.view_transform = "Standard"
scene.view_settings.look = "None"
scene.view_settings.exposure = 0.0
scene.render.image_settings.file_format = "PNG"
scene.render.film_transparent = False


# ---------------------------------------------------------------- helpers
def node_mat(name):
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    return m, m.node_tree.nodes, m.node_tree.links, m.node_tree.nodes["Principled BSDF"]


def setin(bsdf, key, val):
    if key in bsdf.inputs:
        bsdf.inputs[key].default_value = val


def glass(name, tint=(1, 1, 1, 1), rough=0.32, trans=1.0, glow=0.0):
    m, _, _, b = node_mat(name)
    setin(b, "Base Color", tint)
    setin(b, "Roughness", rough)
    setin(b, "Transmission Weight", trans)
    setin(b, "IOR", 1.45)
    setin(b, "Coat Weight", 0.4)
    setin(b, "Coat Roughness", 0.08)
    if glow:
        setin(b, "Emission Color", tint)
        setin(b, "Emission Strength", glow)
    return m


def solid(name, col, rough=0.3, emit=0.0, coat=0.6):
    m, _, _, b = node_mat(name)
    setin(b, "Base Color", col)
    setin(b, "Roughness", rough)
    setin(b, "Coat Weight", coat)
    setin(b, "Coat Roughness", 0.05)
    if emit:
        setin(b, "Emission Color", col)
        setin(b, "Emission Strength", emit)
    return m


def ui_mat(name, fname, seq=None):
    """Screen printed onto glass. Emission keeps it legible regardless of light angle."""
    path = os.path.join(TEX, fname)
    m, n, l, b = node_mat(name)
    if not os.path.exists(path):
        setin(b, "Base Color", lin("#F8FBFA"))
        setin(b, "Emission Color", lin("#F8FBFA"))
        setin(b, "Emission Strength", 0.4)
        return m
    t = n.new("ShaderNodeTexImage")
    if seq:  # an image sequence loads from its first frame file
        d = os.path.join(TEX, seq[2])
        path = os.path.join(d, sorted(f for f in os.listdir(d) if f.endswith(".png"))[0])
    t.image = bpy.data.images.load(path)
    t.extension = "CLIP"
    if seq:
        t.image.source = "SEQUENCE"
        t.image_user.frame_duration, t.image_user.frame_start = seq[0], seq[1]
        t.image_user.frame_offset = -1  # files are numbered from 00
        t.image_user.use_auto_refresh = True
    # Emission carries the screen at its true colours; a dim base keeps sunlight from washing it out.
    dim = n.new("ShaderNodeMix")
    dim.data_type = "RGBA"
    dim.inputs["Factor"].default_value = 0.12
    dim.inputs["A"].default_value = (0, 0, 0, 1)
    l.new(t.outputs["Color"], dim.inputs["B"])
    l.new(dim.outputs["Result"], b.inputs["Base Color"])
    l.new(t.outputs["Color"], b.inputs["Emission Color"])
    setin(b, "Emission Strength", 0.9)
    setin(b, "Roughness", 0.35)
    setin(b, "Coat Weight", 0.8)
    setin(b, "Coat Roughness", 0.04)
    l.new(t.outputs["Alpha"], b.inputs["Alpha"])
    return m


def rrect_mesh(name, w, h, r, thick=0.0):
    """Rounded rectangle in XY with UVs fitted to its bounds; optional solidify."""
    bm = bmesh.new()
    vs = [bm.verts.new((x * w / 2, y * h / 2, 0)) for x, y in ((-1, -1), (1, -1), (1, 1), (-1, 1))]
    bm.faces.new(vs)
    bmesh.ops.bevel(bm, geom=vs, offset=min(r, w / 2 - 1e-4, h / 2 - 1e-4), segments=10, profile=0.5, affect="VERTICES", clamp_overlap=True)
    uv = bm.loops.layers.uv.new()
    for f in bm.faces:
        for lp in f.loops:
            lp[uv].uv = (lp.vert.co.x / w + 0.5, lp.vert.co.y / h + 0.5)
    me = bpy.data.meshes.new(name)
    bm.to_mesh(me)
    bm.free()
    ob = bpy.data.objects.new(name, me)
    scene.collection.objects.link(ob)
    if thick:
        s = ob.modifiers.new("thick", "SOLIDIFY")
        s.thickness, s.offset = thick, 0
        bv = ob.modifiers.new("soft", "BEVEL")
        bv.width, bv.segments, bv.limit_method = min(thick * 0.45, 0.03), 4, "ANGLE"
    for p in me.polygons:
        p.use_smooth = True
    return ob


def place(ob, loc, rot=(0, 0, 0), parent=None):
    ob.location = loc
    ob.rotation_euler = [math.radians(a) for a in rot]
    if parent:
        ob.parent = parent
    return ob


def panel(name, w, h, loc, rot, screen=None, seq=None, r=0.22):
    """Frosted glass slab standing upright (faces -Y at rot 0) with a screen printed on its face."""
    root = bpy.data.objects.new(name, None)
    scene.collection.objects.link(root)
    place(root, loc, rot)
    slab = rrect_mesh(name + "_glass", w, h, r, thick=0.07)
    slab.data.materials.append(M_PANEL)
    place(slab, (0, 0, 0), (90, 0, 0), root)
    if screen:
        pad = 0.12
        face = rrect_mesh(name + "_ui", w - pad * 2, h - pad * 2, r * 0.7)
        face.data.materials.append(ui_mat(name + "_ui", screen, seq))
        place(face, (0, -0.045, 0), (90, 0, 0), root)
    return root


def bubble(name, w, h, loc, rot, mat, lines_mat=None, lines=2):
    root = bpy.data.objects.new(name, None)
    scene.collection.objects.link(root)
    place(root, loc, rot)
    b = rrect_mesh(name + "_b", w, h, h / 2, thick=h * 0.28)
    b.data.materials.append(mat)
    place(b, (0, 0, 0), (90, 0, 0), root)
    if lines_mat:
        for i in range(lines):
            lw = (w - h * 0.9) * (1 if i == 0 else 0.62)
            ln = rrect_mesh(f"{name}_l{i}", lw, h * 0.13, h * 0.065)
            ln.data.materials.append(lines_mat)
            y = (h * 0.16) * (1 if lines > 1 else 0) - i * h * 0.3
            place(ln, (-(w - h * 0.9 - lw) / 2, -h * 0.15, y), (90, 0, 0), root)
    return root


def sphere(name, rad, loc, mat):
    bpy.ops.mesh.primitive_uv_sphere_add(radius=rad, location=loc, segments=48, ring_count=24)
    ob = bpy.context.active_object
    ob.name = name
    bpy.ops.object.shade_smooth()
    ob.data.materials.append(mat)
    return ob


def key(ob, frame, loc=None, rot=None):
    if loc is not None:
        ob.location = loc
        ob.keyframe_insert("location", frame=frame)
    if rot is not None:
        ob.rotation_euler = [math.radians(a) for a in rot]
        ob.keyframe_insert("rotation_euler", frame=frame)


# ---------------------------------------------------------------- materials
M_PANEL = glass("panel", lin("#F7FBFA"), rough=0.2, trans=0.85, glow=0.24)
M_BUBBLE = glass("bubble", lin("#EEF4F2"), rough=0.28, trans=0.75, glow=0.08)
M_ORANGE = solid("orange", ORANGE, rough=0.22, emit=0.25)
M_LINE_GREY = solid("line_grey", lin("#B9C7C3"), rough=0.5, coat=0)
M_LINE_WHITE = solid("line_white", (1, 1, 1, 1), rough=0.4, emit=0.6, coat=0)
M_ORB = glass("orb", lin("#EAF3F0"), rough=0.12)
M_MINT_ORB = glass("mint_orb", MINT, rough=0.2, trans=0.6)
M_ICE_ORB = glass("ice_orb", ICE, rough=0.35, trans=0.5)
M_RAIL = solid("rail", lin("#FFFFFF"), rough=0.2, emit=1.2, coat=0)

# ---------------------------------------------------------------- world + floor
world = bpy.data.worlds.new("sky")
scene.world = world
world.use_nodes = True
wn, wl = world.node_tree.nodes, world.node_tree.links
bg = wn["Background"]
tc = wn.new("ShaderNodeTexCoord")
sep = wn.new("ShaderNodeSeparateXYZ")
ramp = wn.new("ShaderNodeValToRGB")
wl.new(tc.outputs["Generated"], sep.inputs[0])
wl.new(sep.outputs["Z"], ramp.inputs[0])
ramp.color_ramp.elements[0].position, ramp.color_ramp.elements[0].color = 0.5, CANVAS
ramp.color_ramp.elements[1].position, ramp.color_ramp.elements[1].color = 0.95, ICE
wl.new(ramp.outputs["Color"], bg.inputs["Color"])
# Sky lights the scene at 0.8 but reads to the camera at 1.0, i.e. exactly the page canvas.
lp = wn.new("ShaderNodeLightPath")
st = wn.new("ShaderNodeMapRange")
st.inputs["To Min"].default_value, st.inputs["To Max"].default_value = 0.8, 1.0
wl.new(lp.outputs["Is Camera Ray"], st.inputs["Value"])
wl.new(st.outputs["Result"], bg.inputs["Strength"])

floor = rrect_mesh("floor", 600, 600, 0)
floor.location = (0, 60, 0)
fm, fn, fl, fb = node_mat("floor")
setin(fb, "Base Color", lin("#E3ECE8"))
setin(fb, "Roughness", 0.16)
setin(fb, "Specular IOR Level", 0.6)
# Floor dissolves into the sky with distance: no horizon line, an endless studio.
cam_data = fn.new("ShaderNodeCameraData")
mr = fn.new("ShaderNodeMapRange")
mr.inputs["From Min"].default_value, mr.inputs["From Max"].default_value = 18, 120
emit = fn.new("ShaderNodeEmission")
emit.inputs["Color"].default_value = CANVAS
mix = fn.new("ShaderNodeMixShader")
out = fn["Material Output"]
fl.new(cam_data.outputs["View Distance"], mr.inputs["Value"])
fl.new(mr.outputs["Result"], mix.inputs["Fac"])
fl.new(fb.outputs["BSDF"], mix.inputs[1])
fl.new(emit.outputs["Emission"], mix.inputs[2])
fl.new(mix.outputs["Shader"], out.inputs["Surface"])
floor.data.materials.append(fm)

sun_d = bpy.data.lights.new("sun", "SUN")
sun_d.energy, sun_d.angle = 3.4, math.radians(8)
sun_d.color = (1.0, 0.98, 0.95)
sun = bpy.data.objects.new("sun", sun_d)
scene.collection.objects.link(sun)
sun.rotation_euler = (math.radians(52), math.radians(-18), math.radians(-35))

# ---------------------------------------------------------------- stations
rng = random.Random(7)

# Leg 1: the inbox. Dozens of grey unanswered messages hanging in the air.
for i in range(70):
    while True:
        x, y, z = rng.uniform(-7, 7), rng.uniform(3, 21), rng.uniform(0.6, 6.5)
        if abs(x) > 1.4 or abs(z - 3.1) > 1.1:  # keep a corridor for the camera
            break
    w = rng.uniform(0.9, 1.9)
    bubble(f"msg{i}", w, 0.46, (x, y, z), (rng.uniform(-8, 8), 0, rng.uniform(-28, 28)),
           M_BUBBLE, M_LINE_GREY, lines=rng.choice((1, 2)))
panel("inbox", 1.5, 3.0, (-3.4, 12.5, 3.0), (0, 0, 22), "inbox.png", r=0.26)

# The hero message: the one orange bubble the whole page follows.
hero = bubble("hero", 1.5, 0.5, (0, 0, 0), (0, 0, 0), M_ORANGE, M_LINE_WHITE, lines=2)
key(hero, 1, (0.35, 3.0, 3.25), (0, 0, -6))
key(hero, 144, (0.15, 11.0, 3.1), (0, 0, 4))
key(hero, 250, (-0.1, 21.5, 2.95), (0, 0, -3))
key(hero, 318, (0.0, 30.2, 2.7), (0, 0, 0))
key(hero, 352, (0.0, 33.2, 2.7), (0, 0, 0))  # passes through the glass: the agent takes the message

# Leg 2 (peak): the agent pane. Kept blank: the live chat is real HTML laid over it.
panel("agent", 5.6, 3.4, (0, 32, 2.65), (0, 0, 0), None, r=0.3)

# Leg 3: CRM pipeline board, with loose deal cards around it.
panel("crm", 6.6, 4.1, (8.2, 44.5, 2.55), (6, 0, -28), "crm.png")
for i, (dx, dz, rz) in enumerate(((-4.6, 4.6, -20), (-5.2, 0.9, -36), (4.4, 4.5, -18), (4.8, 1.0, -40))):
    bubble(f"card{i}", 1.3, 0.62, (8.2 + dx, 45.6 + abs(dx) * 0.3, dz), (4, 0, rz),
           M_ORANGE if i == 0 else M_BUBBLE, M_LINE_WHITE if i == 0 else M_LINE_GREY, lines=2)

# Leg 4: automation. Flow screen tilted up, a lit rail over it, orange orbs riding the rail.
panel("flow", 7.0, 3.5, (14.5, 59.5, 1.35), (-38, 0, -8), "flow.png")
curve = bpy.data.curves.new("rail", "CURVE")
curve.dimensions, curve.bevel_depth, curve.bevel_resolution = "3D", 0.035, 6
sp = curve.splines.new("BEZIER")
pts = [(10.0, 61.6, 3.3), (12.4, 62.4, 4.7), (14.8, 62.6, 3.7), (17.2, 63.0, 4.9), (19.6, 63.8, 3.5)]
sp.bezier_points.add(len(pts) - 1)
for bp, p in zip(sp.bezier_points, pts):
    bp.co, bp.handle_left_type, bp.handle_right_type = p, "AUTO", "AUTO"
rail = bpy.data.objects.new("rail", curve)
scene.collection.objects.link(rail)
rail.data.materials.append(M_RAIL)
curve.use_path, curve.path_duration = True, 100
for i in range(4):
    orb = sphere(f"flow_orb{i}", 0.13, (0, 0, 0), M_ORANGE)
    fp = orb.constraints.new("FOLLOW_PATH")
    fp.target, fp.use_fixed_location = rail, True
    fp.offset_factor = 0.0
    fp.keyframe_insert("offset_factor", frame=LEGS[3] + i * 14)
    fp.offset_factor = 1.0
    fp.keyframe_insert("offset_factor", frame=LEGS[5] + i * 14)
for i, p in enumerate(pts):
    sphere(f"node{i}", 0.14, p, M_ORB)

# Leg 5: the dashboard, lying back like a table you fly over. Charts grow as you arrive.
panel("dash", 8.4, 5.25, (9.5, 78.0, 0.9), (-68, 0, 6), "dashboard.png",
      seq=(48, LEGS[5] - 30, "dashboard-seq") if os.path.isdir(os.path.join(TEX, "dashboard-seq")) else None)

# Leg 6: the promo screen, then the camera cranes up into open sky.
panel("promo", 5.6, 3.15, (0, 93.0, 3.0), (0, 0, 0), "promo-poster.png", r=0.24)

# Orders in transit between stations: small chips drifting toward the dashboard and the promo screen.
for i, (x0, x1, y0, y1) in enumerate([(9, 16, 63, 74)] * 16 + [(-8, -3, 86, 92), (4, 8, 86, 92)] * 5):
    bubble(f"chip{i}", rng.uniform(0.7, 1.1), 0.32,
           (rng.uniform(x0, x1), rng.uniform(y0, y1), rng.uniform(0.7, 4.2)),
           (rng.uniform(-10, 10), 0, rng.uniform(-40, 40)),
           M_ORANGE if i % 7 == 0 else M_BUBBLE, M_LINE_WHITE if i % 7 == 0 else M_LINE_GREY, lines=1)

# Atmosphere: soft far orbs (background plane) and near orbs the camera passes (foreground plane).
for i in range(9):
    sphere(f"far{i}", rng.uniform(2.2, 4.5),
           (rng.choice((-1, 1)) * rng.uniform(16, 30), rng.uniform(10, 110), rng.uniform(1.5, 7)),
           rng.choice((M_MINT_ORB, M_ICE_ORB)))
for i in range(26):
    side = rng.choice((-1, 1))
    sphere(f"near{i}", rng.uniform(0.12, 0.34),
           (side * rng.uniform(1.6, 4.5), rng.uniform(-18, 100), rng.uniform(0.9, 5.5)),
           rng.choice((M_ORB, M_ORB, M_MINT_ORB)))

# ---------------------------------------------------------------- camera flight
cam_d = bpy.data.cameras.new("cam")
cam_d.lens = 35
cam_d.clip_end = 400
cam = bpy.data.objects.new("cam", cam_d)
scene.collection.objects.link(cam)
scene.camera = cam
tgt = bpy.data.objects.new("target", None)
scene.collection.objects.link(tgt)
tr = cam.constraints.new("TRACK_TO")
tr.target, tr.track_axis, tr.up_axis = tgt, "TRACK_NEGATIVE_Z", "UP_Y"
cam_d.dof.use_dof, cam_d.dof.focus_object, cam_d.dof.aperture_fstop = True, tgt, 6.0

FLIGHT = [  # frame, camera, target
    (1,    (-1.2, -9.5, 3.9),  (0.6, 8.0, 3.3)),
    (144,  (0.6, -3.0, 3.6),   (0.1, 12.0, 3.1)),
    (216,  (-0.5, 7.0, 3.2),   (0.0, 20.0, 3.0)),
    (288,  (0.0, 17.5, 2.9),   (0.0, 32.0, 2.75)),
    (360,  (0.0, 24.4, 2.68),  (0.0, 32.0, 2.66)),
    (456,  (0.12, 25.0, 2.66), (0.05, 32.0, 2.65)),
    (480,  (0.5, 25.9, 2.75),  (1.4, 34.0, 2.64)),
    (552,  (3.4, 37.0, 2.9),   (6.6, 44.5, 2.55)),
    (624,  (9.9, 38.4, 3.2),   (9.8, 45.0, 2.4)),
    (696,  (12.4, 50.2, 4.6),  (14.2, 59.0, 1.6)),
    (768,  (15.4, 52.6, 7.4),  (14.8, 60.5, 0.9)),
    (840,  (12.2, 68.5, 8.6),  (9.8, 77.5, 0.7)),
    (912,  (8.4, 74.8, 6.4),   (9.2, 80.5, 0.6)),
    (984,  (1.4, 85.2, 3.3),   (0.0, 93.0, 3.0)),
    (1040, (0.9, 86.0, 3.25),  (0.0, 93.0, 3.0)),
    (1128, (-4.0, 79.5, 13.5), (-4.4, 95.0, 1.2)),
]
for f, c, t in FLIGHT:
    key(cam, f, c)
    key(tgt, f, t)

for ob in bpy.data.objects:
    ad = ob.animation_data
    if not ad or not ad.action:
        continue
    fcurves = getattr(ad.action, "fcurves", None)
    if fcurves is None:  # Blender 5 slotted actions
        fcurves = [fc for layer in ad.action.layers for strip in layer.strips
                   for bag in strip.channelbags for fc in bag.fcurves]
    for fc in fcurves:
        for kp in fc.keyframe_points:
            kp.interpolation = "BEZIER"
            kp.handle_left_type = kp.handle_right_type = "AUTO_CLAMPED"

# ---------------------------------------------------------------- output
if "--save" in ARGS:
    bpy.ops.wm.save_as_mainfile(filepath=os.path.join(HERE, "world.blend"))

if "--test" in ARGS:
    scene.render.resolution_percentage = 50
    ee.taa_render_samples = 16
    frames = [int(a) for a in ARGS[ARGS.index("--test") + 1:] if a.isdigit()] or \
             [1, 72, 144, 216, 288, 360, 456, 552, 624, 696, 768, 840, 912, 984, 1040, 1128]
    out_dir = os.path.join(BUILD, "renders", "test")
    os.makedirs(out_dir, exist_ok=True)
    for f in frames:
        scene.frame_set(f)
        scene.render.filepath = os.path.join(out_dir, f"f{f:04d}.png")
        bpy.ops.render.render(write_still=True)

if "--render" in ARGS:
    if "--from" in ARGS:  # re-render only a changed tail of the flight
        scene.frame_start = int(ARGS[ARGS.index("--from") + 1])
    scene.render.filepath = os.path.join(BUILD, "renders", "frames", "")
    bpy.ops.render.render(animation=True)
