# V3 — "Get S#!? Done" 3D motion-design reel

- **Source:** `e434244d16bab44597bf8f677cf43680_t4.mp4` (Telegram tmp)
- **Duration / size / fps:** 63.9 s, 736x414 (16:9), 24 fps, AAC stereo 44.1 kHz
- **Overall style:** Stylised 3D "UI-as-toys" reel. Everything is glossy, inflated or glass, rendered in a pink -> magenta -> violet -> electric-blue gradient on near-black, with hand-drawn white chalk/brush annotations (underlines, circles, arrows, sparkles) layered on top. Story: a designer at a night desk is buried in notification bubbles ("You're working today, right?"), the bubbles swarm and crash the monitor ("Attention failure!"), a friend texts "Is your project coming together?", a pep-talk key "COME ON" and a music player "You got this!" reset the mood, a series of tiny 3D vignettes (cube + sphere, bezier curve, NOPE / YEAH) shows the work coming together, then "render" -> "loading" -> a finished poster post appears on the desk monitor.
- **Pace:** ~28 shots, cuts every 1-3 s, a few hard smash-cuts. Only three real "sets": (A) the night/day desk, (B) the 3D editor stage (dark grid stage in a gradient frame), (C) abstract gradient/black void.
- **Note for Google Flow (Veo):** clips are max ~8 s and the model cannot spell reliably. Generate each shot, then overlay the exact on-screen strings in post (Blender / After Effects / Three.js) if Flow garbles them. Prompts below still contain the text so the layout is right.

## Consistency bible (paste the "Global style" line at the start of every prompt)

**Global style line (copy):**
`Stylised 3D motion-design render, glossy inflated plastic and frosted glass, pink-to-violet-to-electric-blue gradients (#F996D1, #EE7AD9, #9F2BD8, #5B15F0) with peach-coral accents (#FFC096, #F77658) on near-black (#010101), soft studio lighting with magenta and blue rim light, shallow depth of field, hand-drawn white chalk brush annotations, clean sans-serif UI text, smooth eased motion, 24 fps, 16:9.`

**Recurring objects (keep identical everywhere)**
- **The cursor:** a chunky white/pale 3D arrow (paper-plane / low-poly arrowhead), matte-white plastic; sometimes gradient pink-to-violet with a lit edge. It is the "hero character": it clicks, pushes, pokes, points.
- **Cube:** rounded-edge cube, blue-violet gradient (top #4B34FC to bottom #723FF8, pinker on lit face), thin white grid lines wrapping every face like a wireframe texture, slight glass sheen.
- **Sphere:** glossy bubblegum pink -> peach sphere (#F996D1 to #FFC096), specular window highlight, sometimes with white wireframe-cube selection box.
- **Inflated message bubbles:** pillow-shaped, puffy, wrinkled at ends like inflated foil balloons; horizontal gradient pink/coral (#FF8FA3 / #F996D1) on the left to violet/blue (#9F2BD8 / #4011FF) on the right; white rounded sans text; tiny "Work" chip with white square icon at top-left and a small boxed "x" icon at right end.
- **Toolbar ribbon:** vertical twisted purple ribbon strip with white line icons (cursor, rotate arrows, frame, eye, squiggle).
- **Ring gauge:** glass torus with blue-violet segments, star-speckle inner, white hexagon centre, top right of the stage.
- **Glass keys / buttons:** thick clear-acrylic slabs with gradient fill inside and bold white lowercase or uppercase text.
- **Chalk annotations:** white dry-brush / marker strokes, slightly jittery, drawn on (stroke-reveal) then held.
- **Desk set:** matte off-white desk with pink edge, wide dark-grey monitor, coral/orange gooseneck lamp with globe head, white mug on purple coaster, cactus-like plant in grey pot, coral pencils, pastel mechanical keyboard with lilac bar, stacked books ("MAT & FAR", "TYPE MATTERS!" on shelf), pinboard/grid wall with sketch notes, framed poster "GET S#!? DONE.", dark-purple smiley stress ball, phone (coral case), speckled grey chair.

**Palette (sampled from frames)**
| Role | Hex |
|---|---|
| Pink | #F996D1 |
| Magenta | #EE7AD9 / #DF4FBF |
| Purple | #9F2BD8 |
| Violet | #8232FA |
| Electric blue-violet | #5B15F0 / #4011FF |
| Cube blue | #4B34FC / #723FF8 |
| Peach | #FFC096 / #F9A78F |
| Coral | #F77658 |
| Stage charcoal | #242426 |
| Void black | #010101 |
| Desk pink | #F6A2A3 |
| Wall grey-white | #D3D3D3 |
| Loading haze | #282B6F to #6C3876 |

**Lighting:** day version = bright soft key from left window, white walls, warm-pink bounce from desk. Night version = only the monitor (purple/red/blue) and lamp globe (cool cyan-white) light the room, magenta and blue rim on objects. Void scenes = single soft top light plus magenta rim, heavy bloom on the cursor.
**Lens:** 35-50 mm equivalent on desk shots, macro 85-100 mm f/2 with strong bokeh on bubble close-ups, slight wide 24 mm in the swarm.
**Font guess:** UI text = Poppins / Inter-like geometric sans. Big keys = ultra-heavy italic-tilted grotesk (Druk / "Bold Gothic" feel) for "COME ON", "YOU GOT THIS!". Chalk words "NOPE" / "YEAH" = dry-brush hand lettering. "render" / "loading" = wide heavy lowercase (Syne / Clash Display style).

## Shot list

### Shot 1 — 00:00.0–00:02.6 (night-to-day desk reveal)
```text
Stylised 3D motion-design render, 16:9, 24 fps. A tidy creative desk seen from slightly left of center, camera at desk height, slow dolly-in toward a wide dark-grey monitor. The room starts nearly dark with a red-brown tint, then lights snap on to bright soft daylight (white wall, pink-edged desk). On the monitor a small white "Login" dialog with one input field showing typed password dots and a purple gradient button; the mouse cursor clicks it, the dialog vanishes and a pink-to-violet gradient desktop is revealed with three tiny folder icons, a dark browser window titled "Motion design" showing three thumbnail cards, and a dark music player "FRESH START" bottom-left. Framed poster reading "GET S#!? DONE." in bold white grotesk on a purple-to-orange gradient, coral gooseneck lamp with globe head, white mug on a purple coaster, plant in grey pot, stack of books, pastel keyboard, speckled grey chair edge in foreground. Clean, glossy, product-render look.
```
- **On-screen text:** poster `GET S#!? DONE.` (3 lines, heavy white grotesk, static). Screen: `Login`, dot-masked password field, `Motion design` (browser header), `A title or something goes here.`, card captions `Make time for motion design.` / `Hey everybody, watch this!` / `Good things take time.`, player `FRESH START`. Shelf book `TYPE MATTERS!`. Static; UI is tiny.
- **SFX/beat:** room tone only (~-24 dB), soft click at ~0.3 s (login), light "power-on" swell to 1.2 s.
- **Transition out:** push-in continues into the screen, hard cut at 2.6 s.

### Shot 2 — 00:02.6–00:05.6 (folders on the desktop)
```text
Stylised 3D motion-design render, 16:9. Full-frame smooth gradient desktop, hot pink (#F996D1) top-left to peach (#F9A78F) bottom-left to violet (#5B15F0) top-right, no room visible. Center-left: a semi-transparent frosted-glass folder icon with orange-pink gradient and an open front flap, labelled "Work" in thin white sans with a hand-drawn white double underline. A chunky white 3D arrow cursor sits inside the folder, then glides right. Center: a coral-to-magenta document icon with folded top-right corner (blue-violet triangle) and a small blue gridded cube icon in its middle, labelled "Personal project_V1". A third frosted purple folder peeks in at the right edge. The cursor lands on the document icon, the camera drifts and pushes in, and a loose white chalk ellipse is drawn around the label "Personal project_V1". Soft depth of field, clean, glossy.
```
- **On-screen text:** `Work` (white thin sans, double chalk underline draws on), `Personal project_V1` (white, chalk ellipse draws around it, ~0.4 s stroke reveal, slightly overshoots).
- **SFX/beat:** small whoosh on cursor glide, marker "scratch" on the circle.
- **Transition out:** hard cut to black stage (5.6 s).

### Shot 3 — 00:05.6–00:11.9 (the 3D editor stage, cube idle)
```text
Stylised 3D motion-design render, 16:9. Inside a 3D editor: a black canvas with white wireframe grid squares in the corners, and a dark charcoal stage box (#242426) with faint grid lines and a glossy dark floor. Frame the stage with two flat gradient panels: peach-to-pink panel at left and blue-to-violet panel at right. A blue-violet cube with white grid lines wobbles and slowly rotates in the center. A twisted purple ribbon toolbar with white icons hangs at upper left, a glass ring gauge with a white hexagon at upper right, a small vertical tool palette with tiny 3D shapes at right, and a play/pause progress bar (orange to purple gradient) at lower left. A white 3D arrow cursor floats in, a glossy pink sphere appears above the cube and balances on it, the cursor pokes it. Late in the shot a puffy inflated pink-to-violet message bubble reading "You're working today, right?" slides into the lower-right corner. Slow camera drift, soft studio lighting.
```
- **On-screen text:** bubble `You're working today, right?` (white rounded sans, centered on bubble, small `Work` chip top-left). Arrives ~10.0 s with a squash-and-settle (overshoot ~8%, 0.35 s ease-out-back).
- **SFX/beat:** silence into first music pulse ~4.6 s; beat ~100 BPM (0.6 s) starts audibly ~6.0 s (transients at 6.06, 6.38, 6.66, 6.88, 7.46, 7.66, 8.06, 8.26...).
- **Transition out:** hard cut at 11.9 s to macro of bubble.

### Shot 4 — 00:11.9–00:13.5 (bubble macro, deflates)
```text
Stylised 3D macro render, 16:9, shallow depth of field. Extreme close-up of an inflated pillow-shaped chat bubble, glossy foil-balloon material, horizontal gradient from coral-pink on the left to violet-blue on the right, white rounded text "You're working today, right?" and a tiny "Work" chip with a white square icon at top-left, a small boxed x icon at right. Behind it, out-of-focus pink and violet panels and a glass ring. A pale white 3D cursor block presses against the bubble's top-right end; the bubble wrinkles, then deflates and crumples like a punctured balloon, letters stretching and sliding along the folds, text tilting to a steep diagonal. Camera holds close with a slight handheld drift; highlights ripple across the plastic as it collapses.
```
- **On-screen text:** `You're working today, right?` — text is texture-mapped on the bubble; during deflation it warps with the mesh ("You're working toda...nt?").
- **SFX/beat:** balloon squeak/air-release ~13.0 s.
- **Transition out:** hard cut at 13.5 s.

### Shot 5 — 00:13.5–00:16.6 (stage again, bubbles pile in)
```text
Stylised 3D motion-design render, 16:9. Return to the dark 3D editor stage with gradient side panels, twisted ribbon toolbar upper-left, glass ring gauge upper-right. A blue-violet gridded cube and a glossy pink sphere with a white wireframe selection cube; the white 3D cursor grabs the sphere and lifts it. New puffy inflated message bubbles drop in and stack diagonally across the stage, wobbling like water balloons: "Client needs V4 ASAP." on a steep diagonal, "Look here!" above, "Client showed her husband..." crossing the cube, with a white chalk crosshair sparkle drawn on the last one. The camera pushes in gently, bubbles squash and bounce into place with overshoot. Bright key light from front, dark background, gradient panels glowing behind.
```
- **On-screen text:** `Client needs V4 ASAP.` / `Look here!` / `Client showed her husband...` (white sans on bubbles, follow bubble perspective; each bubble pops in with squash-stretch, 0.3 s, staggered 0.25 s). Chalk crosshair sparkle.
- **SFX/beat:** rubbery "boing" per bubble on the beat.
- **Transition out:** accelerating cut into flurry.

### Shot 6 — 00:16.6–00:17.8 (flurry, macro chaos)
```text
Stylised 3D motion-design render, 16:9, fast whip-pan feel with rapid cuts between close-ups. Oversized inflated message bubbles crowd the frame, colliding and rotating: "Meeting in 10" across the top, "Client needs V4 ASAP." diagonal at left, "Did you get my email?" tilted at bottom, "Got 5 min?" on a violet-to-pink bubble at right, all with tiny "Work" chips. A white cursor arrow wedged in the middle. Then a macro rack-focus on a single bubble reading "Motivation: Get shit done." with a huge out-of-focus white cursor block in front, heavy bokeh, purple/pink lens glow, black background with a thin white grid at lower right. Very shallow depth of field, glossy specular streaks sliding across the plastic.
```
- **On-screen text:** `Meeting in 10`, `Did you get my email?`, `Got 5 min?`, `Motivation: Get shit done.` (white sans; in the macro, text is partly blurred).
- **SFX/beat:** stacked rubber hits, transient at 17.5 s.
- **Transition out:** continuous into swarm at 17.75 s.

### Shot 7 — 00:17.8–00:22.0 (bubble swarm, camera fly-through)
```text
Stylised 3D render, 16:9, dark moody. Black void filled with dozens of small glossy inflated message bubbles floating and slowly tumbling, dim except where a glowing white 3D cursor arrow at the center throws bright bloom. Bubbles are magenta-coral to violet gradients with soft magenta and blue rim light, some in deep shadow. Readable strings: "Motivation: Get shit done.", "NEWS: Blah blah blah.", "Reminder: Don't forget!", "Time to stand!", "Calendar invite: Internal 4", "Motivation: If you work, it will work", "Got 5 min?". The camera dollies and slowly orbits through the cloud, rack-focusing between bubbles, big out-of-focus bubbles sliding across the foreground. A few small pink spheres and tiny cubes drift among them. Cinematic, volumetric glow, shallow depth of field.
```
- **On-screen text:** as listed, white small sans on bubbles, barely legible, no animation besides drift.
- **SFX/beat:** music pulse continuing (~-11 dB), onset at 22.6 s.
- **Transition out:** dissolve/whip into grid space.

### Shot 8 — 00:22.0–00:24.8 (grid space, cursor, bubbles implode)
```text
Stylised 3D motion-design render, 16:9. Black void with a perspective wireframe grid plane and a flat violet panel, a wireframe cube icon, a floating glossy violet cube at the upper right, a tiny purple ribbon toolbar, a pink sphere, and a white chalk-style curved arrow being drawn as the white 3D cursor swoops along it. Bubbles then rush in from all sides and squeeze into a tight glowing cluster at the center: an implosion of puffy violet/coral message bubbles ("Motivation: Get shit done.", "Calendar invite: Internal 4") packed together, a hot magenta-white bloom bursting from inside, rays of light through the gaps, grid panels and cube tilting around it. Camera slowly pushes in as the cluster grows denser and brighter.
```
- **On-screen text:** bubble strings on the pile, sideways; chalk curved arrow (draw-on 0.5 s).
- **SFX/beat:** rising riser/bass swell, transients 22.6, 23.4, 24.4.
- **Transition out:** hard cut at 24.75 s into the glowing blobs.

### Shot 9 — 00:24.8–00:27.0 (lava-blob macro, "Attention failure!")
```text
Stylised 3D macro render, 16:9. Extreme close-up of glossy liquid-like blobs, cells of deep red and navy glass separated by glowing neon magenta and electric-blue seams, like a lava lamp or cracked glass mosaic, wet specular highlights and bright rim light along every edge. Faint embossed word "Meeti..." (from "Meeting in 10") sliding on one blob. Slow push-in and slight roll. A small frosted-glass dialog card fades in center: red circle-x icon, the words "Attention failure!" in white, and a tiny pill button "Try again". Moody, saturated, high contrast, black-navy shadows.
```
- **On-screen text:** `Attention failure!` (white sans ~13 px equiv, next to magenta circled x), `Try again` (tiny white on translucent pill). Dialog fades + scales up from 92% in 0.3 s.
- **SFX/beat:** error chime around 26 s; music drops in level by ~27 s.
- **Transition out:** camera pulls back out of the screen (continuous) into shot 10.

### Shot 10 — 00:27.0–00:29.9 (pull back to night desk, crashed monitor)
```text
Stylised 3D render, 16:9, night scene. The wide desk shot from before but now dark: only the monitor glows, filled with the red/navy/neon-magenta lava-blob pattern and the small dialog "Attention failure!". The coral gooseneck lamp globe glows cold cyan-white, framed poster "GET S#!? DONE." dim purple-red at right, pinboard with sketch notes, mug on purple coaster, plant, books, keyboard, a dark purple smiley stress ball and a coral phone on the desk. Room lit magenta, blue and red from the screen. Camera static with a tiny push-in. At about 2 s the phone lights up and buzzes: little white radiating motion lines pop around it and it shakes on the desk.
```
- **On-screen text:** `GET S#!? DONE.` poster (dim), monitor `Attention failure!`.
- **SFX/beat:** music almost silent (-28 to -30 dB) 27.5-29 s; phone buzz at 29.2 s (transient), 29.75 s.
- **Transition out:** cut in to phone/keyboard close-up at ~30 s.

### Shot 11 — 00:29.9–00:31.6 (Kay's notification)
```text
Stylised 3D render, 16:9, night macro of the desk surface. Shallow depth of field. Foreground: pastel lilac-and-pink keyboard keys in perspective, a slim stylus/pencil lying across them, a coral phone lit showing "21:16", a dark purple glossy smiley-face stress ball at right, black book behind, monitor base blurred with magenta-blue glow. A frosted-glass notification banner floats above the keyboard: small pink-violet avatar dot and the name "Kay" in white bold, and below it "Is your project coming together?" in white rounded sans. Slight camera drift right and a tiny vibrate wobble on the banner; three small white tick marks flash along its top edge.
```
- **On-screen text:** `Kay` (white semibold small), `Is your project coming together?` (white regular, glass card, gradient from translucent white to lilac). Banner slides down + 3 white tick marks flash at 31.0 s.
- **SFX/beat:** notification ping ~30 s; quiet bed.
- **Transition out:** hard cut at 31.6 s to black.

### Shot 12 — 00:31.6–00:33.7 (emoji key)
```text
Stylised 3D render, 16:9. Pure black background with a faint darker rounded rectangle backdrop. A thick violet-to-pink glass key (rounded rectangle, gradient #8232FA left to #EE7AD9 right, glossy edge highlight) floats in center; on its left a white outline emoji, a grimacing face with squint eyes ">" "<" and a wavy zig-zag mouth. A hand-drawn white chalk arrow points at it from upper left. The key gives a small press bounce and radiating white tick marks flash around it. Slow camera push-in, clean studio light, rim glow.
```
- **On-screen text:** none (emoji icon only, white line art). Chalk arrow draws on in ~0.3 s.
- **SFX/beat:** key click, hit at 31.84 s.
- **Transition out:** hard cut at 33.7 s.

### Shot 13 — 00:33.7–00:35.1 (three emoji, then typing dots)
```text
Stylised 3D render, 16:9. Black background. A wide violet-to-magenta glass key now holds three white outline icons in a row: the grimacing squint face, a thumbs-down hand, and a skull and crossbones. The key bounces in with a squash. The frame then wipes upward to a solid soft pink gradient background with a clear frosted-glass rounded bubble containing three white dots (typing indicator "..."), the dots pulsing one after another, slightly wobbling, soft shadow beneath. Camera locked, gentle push.
```
- **On-screen text:** none; icons only. Dots pulse in sequence (each scale 1 -> 1.3 -> 1, 0.2 s offset).
- **SFX/beat:** pop per icon, hits at 32.56 and 32.92 s (icons landing).
- **Transition out:** flash-cut to COME ON key at 35.1 s.

### Shot 14 — 00:35.1–00:36.7 ("COME ON" key)
```text
Stylised 3D render, 16:9. Black void, a square thick glass key floats and tilts slightly, pink-violet gradient inside (violet-blue at top, hot pink to coral at bottom). Tiny header row at top-left: pink dot icon and the word "Kay" in white. In huge ultra-heavy white italic grotesk, stacked on two lines, the words "COME" and "ON", letters bleeding off the key edges with soft glow. Four hand-drawn white chalk arrows sweep in from each corner of the frame pointing at the key, small white sparkle marks flicker at the top-left corner. The key spins slightly (a few degrees) and settles, small white dots burst around it. Bold, punchy, glossy.
```
- **On-screen text:** `Kay` (small), `COME` / `ON` (white, ultra-heavy, tight leading, the letters slightly cropped by the key; scale-in with overshoot in 0.25 s; key tilts ~12 deg then settles). Chalk arrows draw on in sequence, 0.2 s apart.
- **SFX/beat:** big impact at 36.46 s and 37.46 s (music re-enters at -13 dB).
- **Transition out:** blur-dissolve to player.

### Shot 15 — 00:36.7–00:38.7 (music player "You got this!")
```text
Stylised 3D render, 16:9. A dark translucent music-player card fills the center, background blurred pink and violet inflated bubbles (readable fragments "BeGreat", "Mom", "10"). Left: a square album cover, blue-violet with pink-lit bottom edge, tiny pink dot with "Kay" top-left, and in heavy white italic caps "YOU GOT / THIS!". Right: title "You got this!" in white bold, subtitle "DOM WB & JOE SIMS" in small tracked caps. A small pink-peach 3D cursor triangle rests near the artwork. Bottom row: skip-back icon, large peach circle play button with white triangle, skip-forward icon, elapsed "0:00", progress line with white knob, total "3:12". Camera slowly pushes in, background bubbles drift.
```
- **On-screen text:** `You got this!`, `DOM WB & JOE SIMS`, `YOU GOT THIS!` (album art), `Kay`, `0:00`, `3:12`, and blurred bubble fragments `BeGreat`, `Mom`, `10`. Static text; cursor floats.
- **SFX/beat:** music sits -15 to -18 dB, subdued.
- **Transition out:** hard cut at 38.7 s.

### Shot 16 — 00:38.7–00:40.1 (pause button press, chalk burst)
```text
Stylised 3D render, 16:9. Black background. A flat pink-to-peach oval pause button lies on the ground, two white parallel slash marks on it, a small raised rim. A pink-violet gradient 3D cursor arrow slams down onto it from upper left; the button dips. Around it, thick white dry-brush chalk strokes: a broken oval ring, radial dash lines and a crossed mark, drawn on in fast strokes with jitter. Camera at a low tilted angle, quick push and settle.
```
- **On-screen text:** none (pause glyph). Chalk strokes reveal in ~0.15 s bursts.
- **SFX/beat:** hit at 39.36 s, another at 40.26 s.
- **Transition out:** hard cut at 40.1 s.

### Shot 17 — 00:40.1–00:42.2 (toggle "Get s#!? done")
```text
Stylised 3D render, 16:9, bright. A frosted-glass card floats center holding a pill-shaped toggle switch: orange-pink track, a round peach knob with the pink-violet 3D cursor arrow riding on it, sliding across, and beneath it the label "Get s#!? done" in white. Behind it, huge glossy pink-to-coral inflated message bubbles fill the background, out of focus, with readable text "need the V2 ASAP.", "Meeting in 10", "Incoming call: Mom", "..be z..", a purple ribbon toolbar at left and a row of small white 3D icons (eye, cube, capsule) at right, a glass ring gauge at top. Camera pushes in slightly, background bubbles breathe.
```
- **On-screen text:** `Get s#!? done` (white medium sans, under toggle), bubble fragments `need the V2 ASAP.`, `Meeting in 10`, `Incoming call: Mom`. Toggle knob slides right in ~0.4 s ease-in-out; a thin white dash line flashes above the label.
- **SFX/beat:** switch "tick" at ~41 s; music -11 dB steady.
- **Transition out:** cut at 42.2 s.

### Shot 18 — 00:42.2–00:43.7 (Timing / Balance stage)
```text
Stylised 3D motion-design render, 16:9. Full-frame warm gradient, coral-peach at left to hot pink to electric violet at right. Center: a small dark charcoal stage box with faint grid, on it a blue-violet gridded cube with a glossy pink sphere balanced on top, the cube tilting and the sphere wobbling. Around the stage float UI cards: a small slanted label pill "Timing" with a tiny circle knob at left, another pill "Balance" with circle knob at right, a dark mini-window with a white sine wave line at upper right, a lower-left purple mini-window with a white ring-and-diamond logo, and a thin wireframe crossed box at lower right. A thin white line marker at top-left. Camera slowly orbits, everything floats on a soft sinus bob.
```
- **On-screen text:** `Timing ○`, `Balance ○` (white thin sans on frosted-glass pills, tilted). Sine-wave window loops (draw-on ~1 s cycle).
- **SFX/beat:** music -11 dB; small tick when sphere hits cube at ~43 s.
- **Transition out:** cut at 43.7 s.

### Shot 19 — 00:43.7–00:45.3 (bezier curve + sphere)
```text
Stylised 3D render, 16:9, top-down macro. A dark charcoal crinkled fabric surface with a fine grid overlay. A glowing white-to-magenta-to-blue bezier curve swoops in a wide sine wave across the frame with white square anchor handles on thin white handle lines at its extremes and low point. In the center, a glossy pink bubblegum sphere with a thin square selection box and corner handles rides along the curve, casting a soft shadow. Camera drifts slowly sideways, shallow depth of field, cool key light with pink specular on the sphere.
```
- **On-screen text:** none. Curve draws on / sphere travels along it, ease-in-out ~1.4 s.
- **SFX/beat:** soft riser.
- **Transition out:** cut at 45.3 s.

### Shot 20 — 00:45.3–00:46.5 (faceted cubes explode around black sphere)
```text
Stylised 3D render, 16:9. Full-frame gradient, hot magenta at left to coral-orange at right, faint white grid lines. In the center a glossy black sphere with thin white wireframe and a small white sparkle mark, surrounded by a swirling explosion of glassy faceted cubes, wedges and arrowheads in blue-violet, pink and peach, some with white grid faces. The debris orbits and scatters outward then contracts back to the sphere; small white streaks fly off. Camera locked, quick spin motion, sharp clean rendering.
```
- **On-screen text:** none.
- **SFX/beat:** hits at 45.66, 46.26, 46.46 s.
- **Transition out:** hard cut at 46.5 s.

### Shot 21 — 00:46.5–00:47.3 ("NOPE")
```text
Stylised 3D render, 16:9. A dark stage wall and grey floor. Giant white dry-brush hand-painted capital letters spelling "NOPE" fill the frame, rough bristle edges. A tilted blue-violet gradient cube and a pink-peach sphere with a white arc mark cross in front of the letters, rolling and tumbling left to right. At the bottom a small progress bar: pause icon, gradient track from violet to orange with a white playhead near the end. Camera locked, quick impact energy.
```
- **On-screen text:** `NOPE` (white dry-brush, ~90% of frame height; letters pop in with a hard scale-up in 0.1 s).
- **SFX/beat:** hit at 46.46 s + 46.66 s.
- **Transition out:** hard cut at 47.3 s.

### Shot 22 — 00:47.3–00:49.1 (chevrons and falling sphere)
```text
Stylised 3D render, 16:9. Black void with a faint grid. A pink-peach sphere drops and bounces on a blue-violet chevron/arrow-shaped block, a small white spark at the point of contact; a pink-magenta bow-tie shape hangs at top, a blue cube at top-left, another coral chevron at right. The sphere bounces between shapes like a pinball, each impact bursts tiny white ticks. Camera locked, punchy snappy timing.
```
- **On-screen text:** none.
- **SFX/beat:** bounces on beat at 47.46, 47.86, 48.28, 48.66 s.
- **Transition out:** cut at 49.1 s.

### Shot 23 — 00:49.1–00:50.4 (sphere on ramp)
```text
Stylised 3D render, 16:9. Pure black background, faint grid. A large glossy blue-violet sphere with a pink upper-left highlight rests on the tip of a grey wedge ramp at lower right; at left a thin vertical bar with a coral-to-pink-to-blue vertical gradient stands, a pink-purple arrowhead poking it from above. The sphere trembles and starts to roll as the arrowhead pushes the bar over. Slight camera push-in, dramatic low top-light.
```
- **On-screen text:** none.
- **SFX/beat:** low thud at 49.86 s.
- **Transition out:** cut at 50.4 s.

### Shot 24 — 00:50.4–00:50.8 ("YEAH")
```text
Stylised 3D render, 16:9. Black background. Huge white dry-brush capital letters "YEAH" fill the frame (the Y partly mirrored and cut by a gradient bar), a glossy pink-peach sphere sits on a grey wedge in front, a small white sparkle mark on its top-left, the gradient bar and pink arrowhead overlapping the Y. Quick punch-in. Flash frame.
```
- **On-screen text:** `YEAH` (white dry-brush, same style as `NOPE`; appears as a hard cut, holds ~0.4 s).
- **SFX/beat:** hit at 50.6 s.
- **Transition out:** hard cut at 50.8 s.

### Shot 25 — 00:50.8–00:52.4 (gradient "rocket/wing" object)
```text
Stylised 3D render, 16:9. Soft pink-to-peach gradient background with a faint white grid. A sleek elongated blue-violet-to-peach gradient shape (like a leaf, rocket body or paper wing) angled diagonally from lower left to upper right, a small blue-violet fin block with pink arrow facets at its tail, glossy smooth surface. It glides diagonally with slight rotation. Camera locked with soft parallax, clean light.
```
- **On-screen text:** none.
- **SFX/beat:** riser continuing, onset ~51.06 s.
- **Transition out:** cut at 52.4 s.

### Shot 26 — 00:52.4–00:54.3 (split panels: glass hemisphere + capsule)
```text
Stylised 3D render, 16:9. Two-panel composition. Left panel: gradient pink to violet to electric-blue frame with a black inset grid; a glass sphere splits into two hemispheres, the upper half translucent pearl-white with pink refraction, the lower half solid violet gradient, a white hand-drawn burst outline of spikes around it and a small white plus mark. Right panel: black grid with a peach-pink square, and inside a diagonal capsule made of glass rings (clear, blue, orange) with a black mesh cap, a small pink cursor arrow sparks against its side. A thin black stick pierces diagonally. Both panels slide, tilt and re-frame with quick eased moves.
```
- **On-screen text:** none.
- **SFX/beat:** hits at 52.4, 53.06, 53.26 s.
- **Transition out:** hard cut at 54.3 s.

### Shot 27 — 00:54.3–00:56.0 ("render" key)
```text
Stylised 3D render, 16:9. Black backdrop, a thick clear-acrylic slab key tilted in perspective, pink-magenta to peach gradient filling its interior, and the word "render" in wide heavy white lowercase letters on top. A pink-violet 3D cursor arrowhead comes down from the top and clicks it. The key is pressed down, then the shot changes to a soft peach-pink-violet gradient background with the same glass key seen edge-on and blank, a few thin white tick marks flashing along it. Camera slow push, high-key studio lighting with soft reflections.
```
- **On-screen text:** `render` (white, ultra-bold wide lowercase, tilted with the key; pressed key dips ~20%).
- **SFX/beat:** click at 54.28 s.
- **Transition out:** cross-dissolve into loading at ~56 s.

### Shot 28 — 00:56.0–00:58.4 (loading bar)
```text
Stylised 3D render, 16:9, hazy. Deep indigo-to-purple gradient (#282B6F to #6C3876) atmosphere with a faint reflective floor, ghosted glass sphere and a semi-transparent cube emerging behind. A thin glowing violet-magenta progress bar spans the frame, the fill advancing from about 15% to about 45% with a bright peach leading edge; below it the small white word "loading" in bold lowercase and a hand-drawn white curved chalk arrow pointing up at it. The ghost sphere and cube become more solid as the bar fills. Slow camera push, soft bloom.
```
- **On-screen text:** `loading` (white bold lowercase, ~14 px equiv, centred under bar), chalk arrow draws on. Bar fill eases linearly with a stutter.
- **SFX/beat:** steady music -10 dB.
- **Transition out:** soft focus rack into result.

### Shot 29 — 00:58.4–01:03.9 (render result -> zoom out to desk)
```text
Stylised 3D render, 16:9. Start on a finished poster image: a soft gradient card (blue-violet top to pink bottom) with a glass sphere balanced on a gridded cube, sitting inside a dark-grey social-app window with a left sidebar (Home, Search, Create, Notifications, Profile), a like/comment row and a post header. The camera pulls back in a smooth continuous zoom-out: the window shows inside the 3D editor (stage, ribbon toolbar, ring gauge, "You got this!" mini music player at lower right), then inside the wide monitor with a glowing violet-pink-blue desktop, then out to the full desk: coral lamp, pinboard, mugs on coaster, cactus plant, books, phone, framed poster "GET S#!? DONE.", desk now lit warm magenta-blue at dusk. In the last second a white hand-drawn chalk arrow appears at lower left pointing at the desk. Smooth, satisfying, glossy.
```
- **On-screen text:** sidebar `Home`, `Search`, `Create`, `Notifications`, `Profile` (tiny white); player `You got this!` / `DOM WB & JOE SIMS` / `0:00` / `3:12`; poster `GET S#!? DONE.`; final chalk arrow (draw-on ~0.4 s at ~62.5 s). No end card.
- **SFX/beat:** music fades from ~59 s down to -30 dB by 60 s, room-tone tail to 63.9 s.
- **Transition out:** end.

## Audio map
- 0-4.5 s: room tone/ambient (-24 dB). 4.5-27 s: music bed with ~100 BPM pulse (0.6 s beat, autocorrelation), loud -9 to -13 dB. 27-30 s: near silence (-28 to -30 dB) for the "crash" -> phone buzz (29.2 s). 30-33 s: sparse notification pings + key clicks (31.84, 32.56, 32.92). 35-58 s: music returns (-11 dB) with hits on shot starts (36.46, 37.46, 39.36, 40.26, 45.66-46.46, 47.46-49.06, 49.86, 50.6, 51.06, 53.06, 53.26, 54.28). 59-63.9 s: fade to -30/-40 dB.

## Web/Blender build notes
- **Inflated plastic bubble (Blender):** base = subdivided cube stretched to a pill, Shrinkwrap/Subsurf x2, Displace with Cloud noise (scale 0.15, strength 0.02) for foil wrinkles, then Solidify + Cloth "pressure" (Pressure 3-6) or sculpt Inflate. Principled BSDF: Base color = horizontal color-ramp (#FF8FA3 -> #F996D1 -> #9F2BD8 -> #4011FF), Roughness 0.25, Specular 0.6, Coat weight 0.8 / coat roughness 0.05, Sheen 0.3, Subsurface 0.05 radius (1,0.3,0.5) magenta. Add a Fresnel-driven emission (#B735C7, 0.1) for rim glow.
- **Glass key / acrylic slab:** Principled with Transmission 1.0, Roughness 0.05, IOR 1.45, Thin-film off; inside it an emissive gradient plane (Peach -> Pink -> Violet) 1 cm behind the front face; bevel 0.02 for the bright edge line; use Eevee with Screen-space refraction on + Bloom.
- **Gridded cube:** shader-mix a checker/grid texture (line width 0.02, white 0.7 alpha) over a Gradient (Object Z) between #4B34FC and #723FF8; Coat 0.5. Same grid on the stage floor (Wave/Brick texture at low contrast).
- **Palette gradient:** a single 4-stop ramp #FFC096 -> #F996D1 -> #9F2BD8 -> #5B15F0 drives everything; backgrounds use a linear 135deg version, dark shots use #010101 + magenta/blue area-light rim.
- **CSS/Three.js fake:** bubbles = `border-radius: 999px; background: linear-gradient(90deg,#FF8FA3,#F996D1,#9F2BD8,#4011FF); box-shadow: inset 0 6px 10px rgba(255,255,255,.55), inset 0 -10px 16px rgba(60,0,120,.5), 0 18px 40px rgba(155,43,216,.35)` plus an SVG turbulence filter for wrinkles. In Three.js use `MeshPhysicalMaterial({roughness:.25, clearcoat:1, clearcoatRoughness:.05, sheen:.4})` with a vertical `CanvasTexture` gradient and an env map from a soft pink/blue RoomEnvironment.
- **Chalk annotations:** SVG stroke paths with `stroke-dasharray/dashoffset` draw-on (0.25-0.5 s, `power2.out`), an `feTurbulence + feDisplacementMap` (scale 3) for the dry-brush jitter, brush texture mask for NOPE/YEAH (fake with `mask-image` of a scratchy PNG).
- **Bubble pop-in:** scale 0.6 -> 1.08 -> 1.0, 0.35 s `back.out(2)` plus 3-6 deg rotation settle; stagger 0.25 s on beat (0.6 s grid = 100 BPM; cut on multiples of 0.3 s).
- **Cursor as character:** a low-poly white arrowhead with a tiny bevel; add pink/violet emission on hover; give it a slight lag-follow (spring stiffness 120, damping 14) on movement so it "flies" not slides.
- **Swarm shot:** GPU instancing (InstancedMesh, ~150 bubbles), slow random rotation, camera dolly z -20 -> +5 over 4 s, DOF (BokehPass) focus tracking the cursor, UnrealBloom threshold 0.6 strength 0.8.
- **Mockup-on-desk hero idea:** the closing zoom-out (poster -> app window -> monitor -> desk) is a ready-made hero scroll: render the desk once, put the site's real hero UI as a texture on the monitor plane, and scrub a camera dolly with scroll (GSAP ScrollTrigger scrub 1, ease `power2.inOut`, FOV 35 -> 20).
- **Day/night swap:** lerp ambient + key light color between #FFF4EE (day) and #5B15F0/#B735C7 (night) over 0.6 s, lamp emission 0 -> 8, and desaturate the wall; the phone "buzz" = 4 px shake, 3 cycles at 24 fps.
- **Rhythm:** keep a 100 BPM grid (0.6 s); sequence: 3 s scene, 1.5 s scene, 0.5 s hit-cuts in rushes; let one scene go quiet for contrast before the pep-talk.
