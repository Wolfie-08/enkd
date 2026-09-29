# V6 — Off-white tilted fintech dashboard, camera tour with counting numbers

- **Source file:** `a287f5aa9825ce9d334e32e6fbcefc45.mp4`
- **Duration / res / fps:** 15.0 s · 720x720 (1:1) · 30 fps
- **Audio:** yes, continuous music bed (mean about -13 dB) with bass/impact hits at approx **3.3, 5.85, 6.7, 8.8, 9.25, 9.7, 11.55, 13.45 s**, plus light high-frequency ticks at ~0.8, 1.4, 4.15, 9.45, 10.9, 14.3 s. The loud low-end hits at 3.3 / 5.85 / 6.7 / 8.8 / 11.55 line up with the camera moves (zoom-in on card, pans).
- **Cuts:** none. One continuous virtual-camera take over a fixed grid of white UI cards; I split it into 7 beats by camera position.

**Style summary:** Ultra-clean light UI "dashboard bento" on an off-white studio background. Panels are pure white rounded cards with soft, near-invisible shadows, floating on a slightly 3D-tilted plane. A virtual camera tilts, pans and zooms across the grid while numbers count up, bars grow and states change, then zooms out flat and the cards dissolve. Calm, premium, Dribbble-shot look.

## Consistency bible

**Global style tag (prepend to every prompt):** `off-white #eff2ef studio background, pure white rounded UI cards (24px radius) with very soft diffuse shadows, bento dashboard grid in a slightly tilted 3D plane, geometric rounded sans-serif UI text (Outfit/Urbanist style) in near-black, soft pastel icon tiles, cyan-blue #55b2cf accents, one vivid blue-to-orange-red gradient credit card, crisp product-UI render, smooth cinematic camera glide, no film grain`

| Element | Value |
|---|---|
| Background | `#eff2ef` (flat, no gradient) |
| Card fill | `#fcfffc` / near white; shadows almost imperceptible |
| Bar chart bar / accent cyan | `#55b2cf`; empty bar track `#f0f3f0` |
| Icon tile blue | about `#4f8fd0` (sampled `#70a3d0`) with white bolt icon |
| Icon tile pink | `#ffa5be` with white trend arrow |
| Icon tile peach | `#f3c18f` with white clock |
| Credit card gradient | blue `#376ac4` at left/top, through near-black-magenta, to `#e73a22` red-orange at right/bottom; darker `#a62c1b` mid-band; "RuPay" italic bold white logo top-right |
| PRO chip | pale yellow `#e9cb80` bg, tiny text |
| Tab highlight | `#b0d8e1` pill with cyan text; other tabs gray text |
| Positive / online | green `#4e8158` text on light green pill; red pill for pending/call end `#e3a9b4`; mic button `#b6cfd4` |
| Calendar highlight | cyan `#55b2cf` pills on selected days 5, 9, 11 with light range 6-8 |
| Legend dots | cyan, indigo, violet (Campaign, Direct, Indirect) |

**Font guess:** Outfit / Urbanist-like geometric sans, medium and semibold, tight tracking; numbers bold. Card number is a small LCD/segmented-style mono (Share Tech Mono / DSEG feel) in white with letter-spacing. Avatars are Apple-Memoji-style 3D emoji faces on pastel squares.

**Grid layout (frontal view, left to right, top to bottom):** Left column: profile chip (avatar + "John H Doe" + PRO), Recent Earning bar card, wide Recent Swaps list, wide appointment row at the bottom. Middle column: wide Account Summary card (3 icon tiles) on top, then Calendar next to Recent Chats, then a tab bar, then the Manjeet Kaur profile card. Right column: RuPay credit card at the top, Visitors Overview donut card, Discussion with Team video-call card. A tiny light/dark toggle sits above the credit card.

## Complete on-screen text (exact)

- Profile: `John H Doe`, `@johnhdoefina`, chip `PRO`
- Recent Earning: title `Recent Earning`, value counts `$0.00k` → `$3.45k` → `$5.23k`, kebab menu `⋮`
- Account Summary: title `Account Summary`, `See all`; tiles `This Week $7.25k +5.54% ↑`, `This Month $12.25k +4.42% ↑`, `Upcoming $22.5k +3.17% ↓`
- Credit card: `Total Balance`, counts `$0.0k` → `$784.2k` → `$1764.4k` → `$2450.5k`; `RuPay▸`; `2024 3256 3824 4548`; `JOHN DOE`; `04/25`
- Calendar: `May 2022`, `SUN MON TUE WED THU FRI SAT`, rows `29 30 31 1 2 3 4 / 5 6 7 8 9 10 11 / 12 13 14 15 16 17 18 / 19 20 21 22 23 24 25 / 26 27 28 29 30 31 1`, selected 5–11
- Recent Chats: `Recent Chats`, badge `2`; `Atrain — I really appreciate your help. Thank you`; `Vishss — Thank you for the gift card, it will he[lp]`; `Bonjing — Your kind words warmed my hea[rt]`; `Granny — You're the sweetest! Thank you`
- Visitors Overview: `Visitors Overview`, legend `Campaign`, `Direct`, `Indirect`, `45.5`, `JAN 22 - MAR 21`, `Here data in Thousand Form`
- Tabs: `Recent` (active), `Favorite`, `Admin`, `Members`
- Profile card: `Manjeet Kaur`, `@saddamanjeet`, button `+ Follow`
- Discussion with Team: title `Discussion with Team`, green pill `● 4:54`
- Recent Swaps: `Recent Swaps`, `See all`, `PAIR`, `VALUE`; rows `0.8244RBTC ⇄ 180 USDT` / `Tokentodep · 10 min ago`, `0.2541RETH ⇄ 120 USDT` / `Tokentodep · 30 min ago`, `0.6934RAHT ⇄ 170 USDT` / `Tokentodep · 34 min ago`, `0.4742RTTM ⇄ 140 USDT` / `Tokentodep · 45 min ago`; values count `$0.00` ×4 → `$2259.91`, `$1237.03`, `$1636.20`, `$459.30` → final `$4542.40`, `$3952.40`, `$3445.40`, `$1254.40`
- Appointment row: `3:45 PM`, `30 minutes`, `Tana Mogan`, `Mexico`, `May 25th`, status `Pending` (red dot) → `Confirmed` (violet dot), `✕`

## Shot list

### Shot 1 — 00:00.0–00:01.6 · Tilted overview settling flat

```text
Off-white #eff2ef studio void. A grid of white rounded UI cards floats on a plane that is strongly tilted in 3D (rotateX and rotateY of roughly 20-25 degrees, camera close so the left two thirds of the layout fill the frame and the right column runs off the edge). The camera glides back and the plane smoothly un-tilts toward a frontal view as it zooms out, all edges softly perspective-distorted at the start. Cards visible: profile chip "John H Doe" with PRO badge, "Recent Earning $0.00k" with five cyan rounded vertical bars in gray tracks, wide "Account Summary" with blue, pink and peach icon tiles showing "$7.25k", "$12.25k", "$22.5k", a May 2022 calendar, "Recent Chats" with four Memoji avatars, "Visitors Overview" donut arcs with "45.5", a blue-to-red-orange RuPay credit card at "$0.0k", "Recent Swaps" list with four crypto rows all at "$0.00", an appointment row for "Tana Mogan". Very soft shadows, crisp UI, smooth ease-out camera, no film grain.
```

- **On-screen text:** all values initially at zero (`$0.00k`, `$0.0k`, `$0.00`), status `Pending`. Typography: Outfit-style medium/semibold; no text animation yet.
- **SFX/beat:** soft riser under the move; light tick ~0.8 and ~1.4 s.
- **Transition out:** continuous; plane finishes flattening as it zooms out.

### Shot 2 — 00:01.6–00:02.8 · Frontal hold, full bento layout

```text
Perfectly frontal, fully zoomed-out view of the complete dashboard bento on an off-white #eff2ef background. Three columns of pure-white rounded cards with barely visible soft shadows: left column profile chip "John H Doe PRO", "Recent Earning $0.00k" with five cyan bars, tall "Recent Swaps" table with four rows (Bitcoin yellow, Ethereum blue, BNB gold, Tether green icon tiles) and "$0.00" values, appointment row "3:45 PM / Tana Mogan / May 25th Pending". Middle column "Account Summary" with blue, pink and peach icon tiles, calendar "May 2022" with days 5-11 highlighted in cyan, "Recent Chats" with four Memoji avatars, tab bar Recent / Favorite / Admin / Members, "Manjeet Kaur" profile card with dark marble banner and orange-turban avatar. Right column: blue-red gradient credit card "Total Balance $0.0k" with RuPay logo, "Visitors Overview" with concentric arcs and "45.5", "Discussion with Team" with two portrait photos. Tiny light/dark toggle above the card. Stillness with subtle bar-height twitching; clean, premium UI render.
```

- **On-screen text:** all as in the full list with zero values; the five bars twitch to slightly different heights.
- **SFX/beat:** silence between hits; tick at ~1.4 s.
- **Transition out:** camera begins pushing toward the credit card at about 2.6 s.

### Shot 3 — 00:02.8–00:05.4 · Zoom onto credit card, balance counts up, pan to Visitors/Chats

```text
Camera dollies in fast toward the top-right of the dashboard and stops on a large, slightly tilted (rotateY about -8 degrees) close-up of the blue-to-red-orange RuPay credit card. The card's text is large: "Total Balance", a counter that rapidly rolls up from "$784.2k" to "$1764.4k" and then "$2450.5k", "2024 3256 3824 4548" in LCD-style white digits, "JOHN DOE", "04/25", italic white "RuPay" logo, glossy gradient with a dark mid band. A tiny light/dark toggle above the card. Camera then glides down-left across "Visitors Overview" (concentric cyan-indigo-violet arcs, avatar in the center, legend Campaign / Direct / Indirect, "45.5", "JAN 22 - MAR 21") and "Recent Chats" (Atrain, Vishss, Bonjing, Granny with Memoji avatars), rows fading in from the right as text slides left. Off-white background, smooth cinematic parallax, soft shadows, sharp UI detail.
```

- **On-screen text:** `Total Balance $784.2k → $1764.4k → $2450.5k` (number roll/slot counter, bold); other text static and blurred slightly by depth of field at the edges.
- **SFX/beat:** strong impact/whoosh at **3.3 s** as the zoom lands; tick at 4.15 s.
- **Transition out:** continuous pan left/up.

### Shot 4 — 00:05.4–00:07.8 · Pan to top-left: account summary, earnings bars, calendar

```text
The tilted camera pans left and slightly up across the top-left of the dashboard, plane angled in 3D (rotateY about 10 degrees, rotateX about 8). Foreground: "John H Doe" profile chip with a PRO tag, the wide "Account Summary" card with "This Week $7.25k +5.54%" (blue bolt tile), "This Month $12.25k +4.42%" (pink trend tile), "Upcoming $22.5k +3.17%" (peach clock tile), the "Recent Earning" card where the value ticks from "$3.45k" to "$5.23k" while five cyan rounded bars smoothly grow and shrink to new heights in their light-gray tracks, and the "May 2022" calendar with a cyan range highlight sliding across the days 5 to 11. Small green and red percentage deltas fade in beneath the numbers. Off-white studio background, white cards, minimal shadows, snappy ease-in-out pan with subtle depth-of-field blur on the far edge.
```

- **On-screen text:** `Recent Earning $3.45k` → `$5.23k`; deltas `+5.54% ↑` (green), `+4.42% ↑` (green), `+3.17% ↓` (red) fade in. Digits swap with a quick vertical roll.
- **SFX/beat:** impacts at **5.85 s** and **6.7 s** as bar sets update.
- **Transition out:** continuous downward pan.

### Shot 5 — 00:07.8–00:09.8 · Pan down to Recent Swaps, values count up

```text
Camera pans down the left side to the wide "Recent Swaps" table, plane tilted slightly (rotateY about 12 degrees), header "Recent Swaps" with "See all", columns "PAIR" and "VALUE". Four rows with pastel square icon tiles (Bitcoin yellow, Ethereum light blue, BNB gold, Tether green) and text "0.8244RBTC ⇄ 180 USDT / Tokentodep - 10 min ago", "0.2541RETH ⇄ 120 USDT / Tokentodep - 30 min ago", "0.6934RAHT ⇄ 170 USDT / Tokentodep - 34 min ago", "0.4742RTTM ⇄ 140 USDT / Tokentodep - 45 min ago". The right-aligned values roll from "$0.00" up to "$2259.91", "$1237.03", "$1636.20", "$459.30" and then to "$4542.40", "$3952.40", "$3445.40", "$1254.40". Below, an appointment row with a cyan vertical bar, "3:45 PM / 30 minutes", a pink Memoji avatar, "Tana Mogan / Mexico", "May 25th" with status "Pending" (red dot) morphing to "Confirmed" (violet dot). Clean white cards on off-white, soft light.
```

- **On-screen text:** numbers roll/slot-machine up in two steps (0 → intermediate → final); status text cross-fades `Pending` → `Confirmed` and its dot changes red → violet at ~9 s.
- **SFX/beat:** hits at **8.8 s**, **9.25 s**, **9.7 s** (numbers landing).
- **Transition out:** camera pans right and down.

### Shot 6 — 00:09.8–00:12.5 · Pan right/down: chats, visitors, tabs, profile, discussion

```text
Camera pans right and down across the bottom half of the dashboard, plane tilted (rotateY about -10 degrees). White cards in view: "Recent Chats" with avatars Atrain, Vishss, Bonjing, Granny and grayed message previews, "Visitors Overview" with three concentric arcs in cyan, indigo and violet with round end-dots, avatar center, "45.5" and "JAN 22 - MAR 21", the tab bar "Recent Favorite Admin Members" with a pale-cyan active pill, the "Manjeet Kaur @saddamanjeet" card with dark ink-marble banner, orange-turban avatar overlapping the banner and "+ Follow" button, and "Discussion with Team" with two portrait photos (a man in a green sweater with a live audio-wave pill, a man in a striped tee in black and white), blue mic button, red end-call button and a green "4:54" timer. Slight shift in focal distance, smooth ease-in-out, soft shadows on off-white.
```

- **On-screen text:** static; arcs in Visitors Overview draw on clockwise; audio-wave pill animates; `4:54` green pill.
- **SFX/beat:** impact at **11.55 s** as the pan settles.
- **Transition out:** camera pulls back to frontal zoom-out.

### Shot 7 — 00:12.5–00:15.0 · Zoom out flat, slow push-in, cards dissolve

```text
Camera rises to a flat frontal view of the entire dashboard bento at final values (Recent Earning "$5.23k", card "$2450.5k", swaps "$4542.40 $3952.40 $3445.40 $1254.40", status "Confirmed"), then makes a very slow push-in of about 10 percent for one second. Then the cards dissolve away one by one with a soft fade and slight blur, staggered: left and top panels vanish first, leaving only ghosted calendar, Recent Chats, Visitors Overview and the tab bar for a moment, until the frame is nearly empty off-white #eff2ef with faint ghost outlines. Text in the vanishing cards fades faster than the card bodies. Calm, quiet outro, minimal motion, premium UI presentation.
```

- **On-screen text:** final values: `$5.23k`, `$2450.5k`, `$4542.40 / $3952.40 / $3445.40 / $1254.40`, `Confirmed`; then all fade out.
- **SFX/beat:** last bass hit **13.45 s** as dissolve begins; music tail fades to the end.
- **Transition out:** end of clip on near-empty off-white.

## Web build notes

- **Bento grid:** CSS Grid, 3 columns `1.1fr 1.25fr .8fr`, 16-20 px gaps, cards `border-radius: 24px; background: #fcfffc; box-shadow: 0 1px 2px rgba(0,0,0,.03), 0 12px 32px -12px rgba(30,40,60,.08)` on `#eff2ef`.
- **Tilted plane:** wrap the grid in `perspective: 1400px` container; grid gets `transform: rotateX(22deg) rotateY(-24deg) scale(1.35)` initially and eases to `rotate(0) scale(.92)` over 1.4 s `cubic-bezier(.22,1,.36,1)`. `transform-style: preserve-3d` so cards can also have tiny `translateZ` offsets for parallax.
- **Scroll-scrubbed camera:** pin the section; use one GSAP timeline with `x/y/scale/rotateY` keyframes per "waypoint" (card, top-left, swaps, bottom-right, zoom-out) with `scrub: 1`. Waypoint positions: card `scale 2.5, x -55%, y 45%`; top-left `scale 1.8, x 30%, y 30%`; swaps `scale 1.7, x 28%, y -25%`; bottom-right `scale 1.7, x -25%, y -30%`.
- **Count-ups:** tween a numeric proxy with `gsap.to(obj,{val:target,duration:1.2,ease:"power3.out",onUpdate})`, `font-variant-numeric: tabular-nums`; stage swaps as 0 → mid (0.9 s) → final (0.9 s) to mimic the two-step jumps.
- **Bars:** animate `height` (or `scaleY` from bottom) with `elastic.out(1,.8)` 700 ms, values re-randomized at each waypoint.
- **Credit card:** `linear-gradient(115deg,#376ac4 0%,#1b1f9a 35%,#a62c1b 60%,#e73a22 100%)` + soft radial blur blobs; LCD number in a mono font, `letter-spacing: .12em`.
- **Donut arcs:** three concentric SVG circles with `stroke-linecap: round`, dashoffset animates 1 s `ease-out`, colored cyan/indigo/violet, end-dot circles.
- **Status swap:** cross-fade Pending → Confirmed with dot color transition `#ef4444 → #9b59d0`, 250 ms.
- **Outro dissolve:** stagger `opacity 1->0, blur(0->6px)` per card with `stagger: .09`, order by reading direction, 500 ms each.
- **Type:** `Outfit` (Google Fonts) 400/500/600; tabular numerals for money.
- **Perf:** promote cards with `will-change: transform` only during camera moves; at mobile widths drop rotateX/Y and keep just the zoom/pan.
