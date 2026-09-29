# V2 — "Dala" dark AI-search site with particle morphs (scroll recording)

- **Source:** `0b35b66f5fe4fe5620e2efab79ba13ec_t4.mp4` (Telegram tmp)
- **Duration:** 29.9 s · **Resolution:** 648x384 · **FPS:** 30 (HEVC)
- **Structure:** one continuous scroll recording, no hard cuts (scene-detect at 0.2 found none). "Shots" are scroll sections from 1–2 fps sheets. Times are ±0.25 s.
- **Style summary:** near-black full-bleed WebGL scene. A single cloud of tiny **triangle-outline particles** morphs on scroll: brain, scattered dust, lightbulb, globe, team backdrop, dust cloud, then an abstract ribbon-arrow. Big neon wire-frame tetrahedra float at several depths. Copy is clean white geometric grotesk in generous negative space. Purple pill CTA, amber micro-accents. The cursor visibly disturbs the particles.

## Consistency bible

**Palette (sampled + visual)**

| Role | Hex |
|---|---|
| Page background | `#030303` (pure near-black, no gradient) |
| Headline / body text | white `#ffffff` (body at ~80% opacity) |
| Nav inactive | grey `#8a8a92` (approx.); active link white |
| CTA pill "REQUEST ACCESS" | `#774fff` to `#8253fd`, white 7 px uppercase text |
| Amber accent (eyebrow, "here" link, "being better") | `#f2a91d` (visual; small text samples darker) |
| Particle gold (brain/bulb/globe rim) | `#e5be28` / `#cba634` |
| Particle purple / violet | `#9f74f9`, deep `#231448` |
| Particle teal / mint | `#0dd7b2`, `#12b38f` |
| Hover-state carousel button (teal) | `#068269` |
| Interior particles | white to light grey, semi-transparent |

**Type (best guess):** geometric grotesk, Manrope / Plus Jakarta / Sora family. Headlines weight 400–500, tracking about -0.02em, line-height about 1.05. Hero H1 ~40 px cap on a 648 px-wide frame (about 6% of width). Body ~6 px at 648 w (16 px at 1440 w), weight 400, line-height 1.45. Nav and buttons are uppercase, +0.06em tracking.

**Recurring elements (keep identical in every shot)**
1. **Particles:** every particle is a small *triangle outline* (wire, not filled), 1–2 px lines, randomly rotated. Sizes range from dust (2 px) to hero-size neon tetrahedra (60–120 px, wire-frame, glowing).
2. **Big floating tetrahedra:** teal `#0dd7b2`, white/grey, gold `#e5be28`, pink `#ff5fa2`, violet `#9f74f9`. Slow tumble, parallax (larger ones move faster with scroll).
3. **Nav (fixed):** top-left the Dala logo mark, a small prismatic purple/blue/orange glyph, with the wordmark "Dala" shown only at page top (it collapses to the glyph after the first scroll). Top-right `MANIFESTO`, `TEAM`, `BLOG` and the purple pill `REQUEST ACCESS`. The active section's link is white, the others grey.
4. **Scrollbar:** a thin grey pill scrollbar sits at the far right edge and its thumb moves down the page.
5. **Cursor:** a white arrow (a hand on the team carousel buttons) that stirs particles and brightens a white "hot spot" where it moves.
6. **Text entry:** copy blocks fade and drift up as they scroll in and out, with a soft blur at the very top and bottom edges of the viewport.

## Shot list

### Shot 1 — 00:00.0–00:02.3 · Hero "Unlock collective wisdom." (brain)

```text
Full-bleed near-black web scene rendered in WebGL. At right, a large, slowly rotating three-dimensional human brain seen from the front, built entirely from thousands of tiny wire-frame triangle particles: a glowing gold rim with violet and teal flecks on the outer cortex, and pale white-grey translucent triangles filling the interior; a dense bright white cluster swirls and shifts on the lower-centre surface where the cursor disturbs it, and a faint brainstem fades out at the bottom edge. Sparse larger outline triangles in gold, teal, white and violet drift in the black background. At left, a stacked three-line headline "Unlock collective wisdom." in large white geometric sans, weight 400, tight tracking. Under it a small amber uppercase eyebrow, a four-line white body paragraph, and a small purple pill button "REQUEST ACCESS". Top nav: a small prismatic logo glyph with the wordmark "Dala" at left; MANIFESTO, TEAM, BLOG in small grey uppercase and a rounded purple pill "REQUEST ACCESS" at right. Cinematic, moody, sharp, high-contrast on black.
```
- **On-screen text:**
  - H1 (exact): `Unlock / collective / wisdom.` White, 3 lines, left-aligned at ~8% from the left edge.
  - Eyebrow (amber, caps): `STOP MANAGING KNOWLEDGE. START USING IT.`
  - Body: `Plug into your team's shared brainpower. Ask Dala to instantly find anything or anyone from any workplace system. Focus on doing your best work with context, conviction and clarity.`
  - Button: `REQUEST ACCESS` (purple pill, small).
  - Nav: `Dala` (logo + wordmark) · `MANIFESTO` · `TEAM` · `BLOG` · `REQUEST ACCESS`.
  - Animation: static. The text is fully present at t=0. The brain is already formed and turning ~10°/s with a rippling white hot-spot.
- **Transition out (~2.0–2.3 s):** scroll begins. The headline and body lift up and out. The wordmark collapses to the glyph only, and the brain centres and grows.

### Shot 2 — 00:02.3–00:05.0 · "Make decisions with confidence" (brain drifts left)

```text
Same near-black WebGL scene. The wire-frame triangle-particle brain moves to the left and scales up until it is cropped by the left edge of the frame, rotating in 3D so its side profile shows, gold-rimmed with purple and teal flecks and white triangles clustering at the front-right where a bright white hot-spot forms and drifts. Sparse outline triangles in white and gold drift in the black. At right, a text block eases up from the lower right: a two-line white headline "Make decisions with confidence" in geometric sans, weight 400, above a four-line small white body paragraph, both slightly translucent. The nav shows only the small prismatic logo glyph at the left and MANIFESTO, TEAM, BLOG plus the purple pill "REQUEST ACCESS" at the right; a thin grey scrollbar appears at the right edge. As the text moves toward the upper right the brain's cortex starts to loosen, particles peeling off its right edge.
```
- **On-screen text:**
  - H2 (exact): `Make decisions / with confidence`.
  - Body: `Dala's bleeding-edge AI search tool automates extracting knowledge from across your organisation so that you can take the guesswork out of your work.`
  - Animation: block enters from ~y +40% and rides up with scroll (no separate tween), soft-clipped at the top of the viewport.
- **Transition out (~4.3–5.0 s):** the text scrolls off upward. The brain's right side disintegrates into loose triangles that spread across the frame while it sinks toward the bottom.

### Shot 3 — 00:05.0–00:09.0 · Manifesto: brain dissolves into scattered dust

```text
Same near-black WebGL scene. The particle brain, now only a curved dome at the top, disintegrates into a huge field of tiny scattered wire-frame triangles in gold, white, violet and teal, drifting slowly and swirling across the entire frame. A handful of large glowing wire-frame tetrahedra tumble through at different depths: a big teal one with bright neon edges, white and pale-grey ones, a pink one, a violet one; they drift upward as the page scrolls. Centred white geometric-sans paragraphs, weight 400, medium size, stacked in pairs, scroll up one after another with generous spacing and slight translucency; the cursor arrow sits mid-frame, stirring particles. The nav is the small logo glyph, MANIFESTO in white as the active link, TEAM, BLOG, and the purple "REQUEST ACCESS" pill. Chaotic, entropy, dark cinematic.
```
- **On-screen text (centred, white, 3 pairs of paragraphs, scrolling in sequence; each pair about 1.4 s in view):**
  - Pair 1 (5.0–6.3 s): `This is your workplace today. Countless fragments of critical knowledge scattered across hundreds of disparate systems.` / `30% of your time is spent trying to organise and find the information and expertise you need to do your job.`
  - Pair 2 (6.4–7.4 s): `The impossible battle to make sense of this chaos leaves your team feeling overwhelmed and unproductive.` / `They're confronted with the anxiety of bothering a busy coworker again, or aimlessly trying to connect the dots with incomplete context.`
  - Pair 3 (7.4–8.8 s): `Existing solutions are cumbersome and quickly become outdated. Yet another decaying system that requires continuous maintenance.` / `They fail to understand what you need from the vast amounts of information that your team creates every day.`
  - "MANIFESTO" becomes white (active) at ~6.5 s.
- **Transition out (~8.8–9.3 s):** last text leaves. Particles begin converging toward a bright centre, flickering, as the field densifies at the middle of the frame.

### Shot 4 — 00:09.0–00:12.3 · Particles converge into a lightbulb, "Spark lightbulb moments"

```text
Same near-black WebGL scene. Thousands of scattered wire-frame triangle particles converge from across the frame into a cloud, then sharpen into a large three-dimensional lightbulb tilted about 20 degrees, filling the left half of the screen: the glass globe rimmed with gold and amber triangles, the interior pale white-grey translucent triangles, the neck fading to deep violet and then teal-green and gold at the base cap, which bleeds off the bottom edge. A few larger outline triangles in white and gold drift near the bulb. At the right a text block rises from below: a two-line white headline "Spark lightbulb moments" in geometric sans, then three short white body paragraphs with wide spacing. The cursor arrow rests inside the bulb, brightening white particles around it. Nav: logo glyph left, MANIFESTO active in white, TEAM, BLOG, purple "REQUEST ACCESS" pill.
```
- **On-screen text:**
  - H2 (exact): `Spark lightbulb / moments`.
  - Body 1: `Dala is your intelligent, real-time source of truth that eliminates the cultural, financial and operational struggles of splintered tools.`
  - Body 2: `We connect your systems behind the scenes and pull together exactly the knowledge you require into an elegant contextual view.`
  - Body 3: `Just ask Dala for the answer that advances your work, and helps you make better decisions with more confidence.`
  - Animation: the block enters from the bottom-right at ~10.3 s and rides to the vertical middle by ~11.5 s (scroll-linked).
- **Transition out (~12.0–12.5 s):** the bulb is stable for ~1.5 s (9.8–11.8 s). Then the text lifts out to the top-right, and the bulb's lower-right neck begins to break apart into loose triangles.

### Shot 5 — 00:12.3–00:16.2 · Bulb dissolves into a globe, "Build a better world of work"

```text
Same near-black WebGL scene. The wire-frame triangle-particle lightbulb loosens and drifts apart into a hazy cloud of gold, white and violet triangles, which re-gathers on the right into a huge three-dimensional globe: a sphere of triangles with a glowing gold and violet rim, teal and purple-tinted particles in the oceans, dense gold triangle patches for continents, a bright cluster of white translucent triangles at one side where the cursor is, slowly rotating and bleeding off the right and bottom of the frame. On the left a text block scrolls up: a two-line white headline "Build a better world of work" in geometric sans, then three small white body paragraphs, with the phrase "being better" in italic amber and "doing more" in italic white. Sparse outline triangles in teal, violet and grey drift around. Nav: logo glyph left; MANIFESTO active white; TEAM; BLOG; purple "REQUEST ACCESS" pill.
```
- **On-screen text:**
  - H2 (exact): `Build a better / world of work`.
  - Body 1: `Our mission is to make work more coherent and delightful—reframing productivity from` *doing more* `to` *being better*`.` (italic; "being better" amber `#f2a91d`)
  - Body 2: `Your happiest and most purposeful moments at work are when you're in flow, intellectually stimulated, and creating value for customers.`
  - Body 3: `We want to recreate that every time you experience Dala. A tool that is completely integrated with how you think, feel and work.`
  - Animation: block rises from the lower-left (~13.5 s) to mid-left, then continues up and out (~16 s).
- **Transition out (~15.5–16.3 s):** the globe's edge frays into dust, drifting up-left as its remnant dims, while the "Our team" headline starts rising from the bottom.

### Shot 6 — 00:16.2–00:21.8 · "Our team" carousel (Haroun → Poppy → Joel)

```text
Same near-black WebGL scene, now calmer. Behind everything a sparse field of tiny wire-frame triangle dust in dim gold, violet and white, plus a few slowly tumbling outline triangles at the edges, and very dark blurred silhouettes of team portraits in a row at about ten percent opacity. Left column: a large white headline "Our team", below it "Build with us." in white, then a five-line body paragraph in which the email "careers@dala.ai" and the word "here" are amber. Centre: a tall rounded-rectangle portrait card (bearded dark-haired man with round glasses and a dark shirt, warm window light) with two small round purple arrow buttons beneath it; the right button turns teal and a hand cursor clicks it. The card cross-slides to a woman with strawberry-blonde hair and bangs resting her chin on her hand, then to a smiling man in a plaid shirt. Beside the card a tiny violet role line and a two-line white name each mask-reveal upward with a 3D roll when a new person appears; two small social icons (Twitter, LinkedIn) follow.
```
- **On-screen text:**
  - H2 (exact): `Our team`. H3: `Build with us.`
  - Body: `We are actively hiring intentional, empathetic and curious people who thrive on creating delightful experiences. If you'd like to be a part of the journey, email` `careers@dala.ai` `with your CV or portfolio, and a thoughtful note.` Link line: `Read more about our values` `here.` (amber links.)
  - Person 1 (16.5–18.9 s): role `CO FOUNDER & CEO` (tiny violet caps) · name `Haroun Hickman` (2 lines).
  - Person 2 (19.2–20.7 s): role `PRODUCT DESIGN LEAD` · name `Poppy Reid`.
  - Person 3 (20.7–21.8 s): role `CO FOUNDER & CTO` · name `Joel Kang`.
  - Controls: `←` `→` circles; `→` turns teal `#068269` on hover/click.
  - Animation per swap (~0.8 s): the old card slides left and fades (with a subtle blur), the new card slides in from the right, and name lines rise from a mask with a slight rotateX. The role/name lines re-appear ~0.3 s after the card lands.
- **Transition out (~21.5–22.0 s):** scroll. The team block and carousel buttons rise out of the top, while the investors block rises from below. Faint dark portrait silhouettes fade.

### Shot 7 — 00:21.8–00:25.7 · "Our investors" (neon tetrahedra logos)

```text
Same near-black WebGL scene with a thin haze of tiny triangle-dust drifting in dim gold and violet. Five glowing wire-frame tetrahedra icons in a loose scatter at the left half of the frame, each with a white label beside it: a yellow tetrahedron with "Seedcamp", a teal tetrahedron with "James Meekings" and a tiny grey subline, a yellow tetrahedron with "Evening Fund", a purple tetrahedron with "Roman Schumacher" and a tiny grey subline, and a violet tetrahedron with "Valia Ventures". Each icon slowly rotates in 3D. At the right, a large white headline "Our investors" in geometric sans, weight 400, with a three-line small white paragraph below it. Grey outline tetrahedra float behind the text and drift up as the page scrolls. The team carousel's purple arrow buttons scroll off the top of the frame. Nav: logo glyph, TEAM active in white.
```
- **On-screen text:**
  - H2 (exact): `Our / investors`. Body: `We are supported by some of the world's most pioneering operators and progressive funds to fuel our growth.`
  - Labels: `Seedcamp` (yellow icon) · `James Meekings` + `Co-founder of Funding Circle` (teal icon) · `Evening Fund` (yellow icon) · `Roman Schumacher` + `Co-founder & CPO at Personio` (purple icon) · `Valia Ventures` (violet icon).
  - "TEAM" is white (active) from ~22 s.
- **Transition out (~24.5–25.7 s):** scroll. The investor icons and labels climb out of frame at the top-left, the headline block last. The background thins to sparse dust.

### Shot 8 — 00:25.7–00:29.9 · "Your workplace has the answer." + dust morphs to ribbon + footer

```text
Same near-black WebGL scene. Centred white two-line headline "Your workplace has the answer. Ask Dala to find it." in geometric sans, weight 400, with a small purple pill button "REQUEST ACCESS" beneath. Behind the text, a faint hazy cloud of tiny multicolour particles (gold, violet, teal, pink) slowly swirls and clusters, then over the following seconds condenses into a soft, glowing abstract three-dimensional shape like a folded ribbon or arrow: a teal-and-blue vertical curve at the upper left, a violet and pink diagonal plane, and an orange-amber wedge at the bottom pointing right, with fine particle grain. A few outline triangles in teal, white and violet hover at the sides. Near the end, a thin bordered footer bar slides up at the bottom of the frame with a small copyright line at left, five small grey uppercase links centred and three tiny white social icons at right. Serene, cinematic, dark.
```
- **On-screen text:**
  - CTA (exact): `Your workplace has the answer. / Ask Dala to find it.` Button `REQUEST ACCESS`.
  - Footer: `© 2021 Dala Technologies Limited. All rights reserved.` · `MANIFESTO` `TEAM` `BLOG` `PRIVACY` `TERMS` · icons: LinkedIn, Twitter, mail envelope.
  - Animation: the CTA rides up from the bottom (~25.7 s) and settles at the vertical centre by ~27.5 s. The footer bar enters from the bottom at ~27.5–28 s.
- **Transition out:** end. The last frame holds the ribbon shape, the CTA and the footer. There is no fade.

## Web-build notes

1. **One particle system, many shapes.** Use a single `THREE.Points` (or instanced triangle geometry) with ~25–40k instances. Pre-sample target positions from meshes (brain, bulb, globe, ribbon) via `MeshSurfaceSampler`, and store them as attributes `posA, posB, posC, posD`. The vertex shader mixes them by a scroll-driven uniform `uMorph` (0 to 3), with a smoothstep between segments.
2. **Scatter between shapes:** add a curl-noise offset scaled by `sin(π · t)` per segment, so particles explode outward at mid-transition and re-converge (Shot 3 dust, Shot 4 gather, Shot 5 bulb to globe). The dust phase holds ~1.5 s of scroll before re-gathering.
3. **Triangle sprites:** draw triangle *outlines* with a tiny SDF triangle in the fragment shader (line width ~1.2 px), random per-instance rotation, additive blending, size 2–6 px. Colour by attribute: gold on a fresnel rim (`pow(1 - dot(n, v), 2)`), random violet/teal flecks, white for the interior (alpha ~0.5).
4. **Scroll map (approx. of a 300–400 vh page):** 0–8% brain hero, 8–15% brain drifts left and scales ~1.6x, 15–27% dissolve and scatter (manifesto), 27–40% bulb, 40–54% globe (rotate ~30° across), 54–58% dissolve into dust behind the team section, 88–100% dust condenses to the ribbon. Use lerped scroll (`lenis` or manual damping, ~0.1) so morphs feel weighty.
5. **Cursor interaction:** raycast the mouse onto a plane at the object's depth, and push particles away within radius ~0.25 (plus a brightness boost), producing the bright white "hot spot" seen on the brain, bulb and globe. Ease the force back to 0 in ~0.6 s.
6. **Floating tetrahedra:** 8–12 wire-frame tetrahedra (`EdgesGeometry`, additive, bloom-friendly colour). Assign depth 0.3–1.0 to each. Scroll parallax multiplier equals depth, slow spin `0.1–0.3 rad/s`. Neon teal `#0dd7b2` gets the largest scale (~3x). In the investors section, the same meshes become the labelled icons.
7. **Post-processing:** a light UnrealBloom (strength ~0.6, threshold ~0.2), and a slight chromatic fringe at edges. Cap DPR at 1.5 and use a 20–25k instance fallback on mobile.
8. **Text choreography:** headings and body fade up with `y 24 px → 0, opacity 0 → 1, 0.6 s, power3.out`. For the manifesto, three centred paragraph pairs each get an opacity envelope tied to scroll (0 → 1 → 0 across ~20 vh) instead of a time tween. Body copy is ~80% white on black.
9. **Nav behaviour:** the wordmark collapses to the glyph after ~40 px scroll. The active link (white) switches by section via IntersectionObserver. The CTA pill stays fixed. The right-edge scrollbar is a custom 3 px pill.
10. **Team carousel:** the card is ~130x190 at 648 w (~28% of the frame height), radius ~14 px. On next: `x 0 → -60 px, opacity → 0, blur 6 px` (0.5 s), then the new card `x +60 → 0` (0.6 s, `expo.out`). Neighbouring portraits sit at ~10% opacity, blurred, behind the row. Name lines use a line-mask reveal (`translateY 100% → 0`, `rotateX -40° → 0`, 0.6 s, 80 ms stagger).
11. **Button micro-interaction:** the carousel buttons are 22 px circles, purple `#774fff`. On hover the right one tweens to teal `#068269` in ~150 ms with a hand cursor.
12. **Footer + CTA morph:** the final CTA section uses a fourth morph target (ribbon-arrow) and the footer bar (1 px top border `#ffffff14`) slides up over the last ~10% of scroll.
