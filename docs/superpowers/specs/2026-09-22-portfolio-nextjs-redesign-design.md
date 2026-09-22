# enkd.uz redesign on Next.js — design

Date: 2026-09-22. Status: approved in conversation, pending spec review.

## 1. Goal

Replace the current Vite portfolio at enkd.uz with a bilingual (EN/UZ), dark, cinematic
Next.js site that does three jobs:

1. Show what Diyorbek Komilov has built (software and hardware).
2. Sell AI solutions to businesses: AI automation, AI agents, AI chatbots, websites.
3. Let anyone reach out: businesses requesting a solution, founders looking for a
   technical co-founder, general contact.

Non-goals: light theme, CMS, hosted blog posts, analytics beyond Vercel Analytics,
pricing pages, any scope the old site had that is not listed here.

## 2. Stack

- Next.js 16, App Router, TypeScript strict, React 19.
- Tailwind CSS 3, shadcn (style `default`, CSS variables), `class-variance-authority`,
  `clsx`, `tailwind-merge`, `lucide-react`, `framer-motion`.
- `thinking-orbs` for the two orbs. `@vercel/analytics`.
- Fonts via `next/font/google`: Geist (sans) and Geist Mono.
- Deploy: Vercel, auto-detected Next build. Env: `RESEND_API_KEY` only.
- Every page statically generated at build. The only server code is the contact route.

Removed from the repo: Vite, `index.html`, `src/main.tsx`, `src/App.tsx`,
`vite.config.ts`, `vercel.json`, react-router, react-query, Supabase (client, types,
`supabase/`), next-themes, react-intersection-observer, all 58 unused ui files, the six
orphan components, `src/assets/`, `graphify-out/`, `public/404.html`, `public/_redirects`,
`public/placeholder.svg`, six of the seven audio tracks, all cover images, stray
`read.me` / `readme.dm` files, and the 40 dependencies the audit listed.
`cv/Diyorbek_Komilov_CV.html` and `public/Diyorbek_Komilov_CV.pdf` stay.

## 3. Repository layout

```
src/
  app/
    layout.tsx                 html shell, fonts, grain overlay, <AudioPlayer/>, <Analytics/>
    [locale]/
      layout.tsx               locale validation, <Nav/>, <Footer/>, JSON-LD Person + ProfessionalService
      template.tsx             route-enter transition
      page.tsx                 Home
      experience/page.tsx
      experience/[slug]/page.tsx
      blog/page.tsx
      contact/page.tsx
      opengraph-image.tsx      one per route folder (5 files), name + page title on dark
    api/contact/route.ts       moved from api/contact.ts
    sitemap.ts  robots.ts  not-found.tsx
  components/
    nav.tsx  footer.tsx  audio-player.tsx  reveal.tsx  marquee.tsx  language-switch.tsx
    home/  hero.tsx  services.tsx  selected-work.tsx  experience-teaser.tsx  faq.tsx  cta.tsx
    experience/  timeline.tsx  project-grid.tsx  project-card.tsx
    contact/  request-form.tsx
    ui/  button input textarea label select badge card  thinking-orbs.tsx
  content/
    site.ts                    identity, socials, nav, services, faq, experience, education, ui strings
    projects.ts                nine projects
  lib/
    i18n.ts                    Locale type, locales, localePath(), t() helper
    seo.ts                     metadata builder, JSON-LD builders
    utils.ts                   cn()
public/
  audio/ordinary.m4a  images/projects/*.jpg  llms.txt  favicon.ico  Diyorbek_Komilov_CV.pdf
scripts/check-seo.mjs
```

`components.json` updated: `rsc: true`, css `src/app/globals.css`. `tsconfig.json` is the
Next default with `@/*` → `src/*`.

## 4. Routes and locales

| Path (EN) | Path (UZ) | Page |
|---|---|---|
| `/` | `/uz` | Home |
| `/experience` | `/uz/experience` | Experience |
| `/experience/<slug>` | `/uz/experience/<slug>` | Project (9 slugs) |
| `/blog` | `/uz/blog` | Blog |
| `/contact` | `/uz/contact` | Contact |

Implementation: `app/[locale]/` with `generateStaticParams` returning `en` and `uz`.
`next.config.ts` rewrites `/:path*` → `/en/:path*` for paths not starting with `uz`,
`api`, `_next`, or a file extension, and redirects `/en/:path*` → `/:path*` (308), except
paths ending in `opengraph-image`, which Next serves under the locale prefix and must not
bounce. A page's canonical is always the EN path without prefix or the `/uz` path.

`lib/i18n.ts`:

```ts
export const locales = ["en", "uz"] as const;
export type Locale = (typeof locales)[number];
export type Bi = { en: string; uz: string };
export const localePath = (l: Locale, p = "/") => (l === "en" ? p : `/uz${p === "/" ? "" : p}`);
```

Content strings are `Bi` objects; components receive `locale` as a prop and read
`text[locale]`. No context, no i18n library. The language switch links to the same path
in the other locale. `<html lang>` is set per locale.

Slugs (shared across locales): `supply-group`, `rsef`, `hunar`, `aquaferma`, `osonqur`,
`enkd-os`, `cansat-dashboard`, `solar-tracker`, `mubl`.

## 5. Content model

```ts
type Project = {
  slug: string;
  group: "work" | "products" | "hardware" | "community";
  year: string;                       // "2026" or "2025–"
  status: "live" | "building" | "done";
  links: { live?: string; demo?: string; extra?: { label: Bi; href: string }[] };
  image?: string;                     // /images/projects/...
  stack: string[];
  title: Bi;
  summary: Bi;                        // one sentence, used on cards and as meta description
  built: Bi[];                        // "What I built"
  outcomes: Bi[];
  metrics?: { label: Bi; value: string }[];
  featured?: boolean;                 // shown in Home "Selected work"
};
```

`content/site.ts` holds: `person` (name, role, location, email, socials), `nav`, `hero`,
`services[4]`, `founders` strip, `faq[6]`, `experience[]` (jobs), `education[]`,
`notes[]` (Yandex, FIA), `blogLinks[3]`, `form` labels and options, `footer`, and the
`replyTime` promise ("within 24 hours").

### Projects, grouped

- work: Supply Group (featured)
- products: Hunar, AquaFerma (featured), Osonqur, Enkd OS (featured)
- hardware: CanSat Live Dashboard (featured), Solar Tracker
- community: RSEF, MUBL

Facts are taken from the CV and the existing case studies for RSEF, AquaFerma, Enkd OS,
the two shops and CanSat. MUBL and Solar Tracker figures were confirmed by Diyorbek
(50+ members, 15+ projects, 5+ competition wins; 22–28% energy gain). Osonqur is described
only as "construction management system, live at osonqur.uz"; no further claims.

Supply Group: company named. Systems described: three Telegram bots (storefront,
marketing broadcast, customer service) across four divisions, Postgres warehouse with
Smartup ERP sync, Power BI dashboards, automated cash-flow and debtor reporting, Dockerized
Linux server with 17 services and health monitoring, LLM financial assistant in progress.
Links to the Parfume and Sedia shops inside the entry. No revenue, customer count, or
repeat-rate figures.

### Home copy (EN, final wording to be reviewed in the content file)

- Eyebrow (mono): `TASHKENT · MECHANICAL ENGINEER · AVAILABLE · REPLIES WITHIN 24H`
- H1: `Engineer who builds AI systems for real businesses.`
- Sub: `Diyorbek Komilov. I build and run the software behind a four-division retail
  group: Telegram storefronts, an ERP-fed data warehouse, Power BI reporting, and an AI
  assistant over live company data. Available for AI automation, agents, chatbots, and
  websites.`
- Services (title, promise, three inclusions each), grounded in shipped work:
  - AI automation: replace the manual step. ERP/CRM sync into Postgres, scheduled reports,
    alerts to Telegram.
  - AI agents: an assistant on your data. Natural-language questions over live company
    data, tool use with approval gates, deployed on your server.
  - AI chatbots: sales and support inside Telegram. Storefront, order flow, admin panel,
    UZ/RU.
  - Websites: fast, bilingual, indexable. Next.js, structured data, forms that land in
    your inbox.
- Founders strip: `Building a startup and need the technical half? I take co-founder roles
  where I own product engineering end to end.`
- FAQ (six, EN): what Enkd is; where based and remote work; what an automation project
  involves; how to start (form, 24h reply, short call); do you build hardware; do you join
  startups as co-founder. No durations or prices.

Uzbek copy (Latin script) is drafted by Claude for every string and reviewed by Diyorbek
before launch. Until reviewed, the UZ site is built and deployed, but the review is a
launch gate, not a build gate.

## 6. Pages

**Home.** Hero: two columns on desktop, headline left with word-by-word reveal, orb right.
Below: services (4 blocks, index numbers in mono), stack marquee, selected work (4 featured
cards), experience teaser (current role + link), founders strip, FAQ (accordion, native
`<details>`), request CTA linking to `/contact`.

**Experience.** Timeline: Supply Group (Jul 2026–present), Private tutor (Oct–Dec 2025),
education (NewUU 2025–2029; Khiva Presidential School, A Levels AAA), notes (Yandex Dev
Camp 2025, FIA delegate Dec 2025). Then the project grid, four groups in the order work,
products, hardware, community, cards linking to project pages.

**Project.** Mono breadcrumb, title, summary, image if present, "What I built" list, stack
line, outcomes list, metrics row if present, links, prev/next project.

**Blog.** Three cards: Medium, the AJEL publication, the Telegram channel. External links.

**Contact.** Left: heading, reply-time line, email and Telegram links. Right: the form.

**404.** Locale-aware, links home.

## 7. Visual system

- Background `#070707`. Surfaces `#0d0d0d`. Hairline `rgba(255,255,255,0.08)`.
  Text `#f5f5f5` / `#a3a3a3` / `#666666`. Accent amber `#f5a524`, used for the orb halo,
  links, one primary button.
- Geist Sans for headlines and body, Geist Mono for eyebrows, indexes, status lines,
  metrics. Headlines heavy, tight tracking (`-0.03em`), sizes clamp from 40px to 96px.
- Fixed grain overlay: `body::after`, SVG `feTurbulence` data URI, opacity 0.05,
  `pointer-events: none`, `mix-blend-mode: overlay`.
- Hero hairline grid via a repeating linear-gradient background, fading out downward.
- Borders 1px hairline, radius 6px. No drop shadows, no gradient buttons, no glassmorphism.
- Cards: hairline border, image at top with a slow scale on hover, mono meta row.

## 8. Motion

- `template.tsx`: fade + 12px rise on mount, 0.5s. Enter-only; App Router has no exit
  phase.
- `<Reveal>`: framer `whileInView`, `once`, fade + rise, optional stagger for children.
- Hero headline: words wrapped in spans, staggered 40ms.
- `<Marquee>`: CSS keyframe translateX, duplicated track, pause on hover.
- All animation disabled under `prefers-reduced-motion: reduce` (framer `useReducedMotion`
  and a CSS media query for the marquee). Orbs handle this themselves.

## 9. Orbs

`components/ui/thinking-orbs.tsx` as supplied (re-export of `thinking-orbs`). Orbs are
monochrome; on our background they render light dots. Amber comes from a radial halo
behind the canvas.

- Hero: `<ThinkingOrb state="composing" size={64} theme="dark" />` inside a wrapper that
  scales the canvas with CSS (`[&_canvas]:!size-[260px]` desktop, 180px mobile) over a
  600px amber radial halo. Risk: CSS upscaling of a 64px preset may look soft. Test first;
  if soft, render at 64px inside the same halo and let the halo carry the size.
- Nav: `<ThinkingOrb state="solving" size={20} theme="dark" />` left of the wordmark
  `Enkd`, linking home.
- Contact form: `size={20}` orb next to the submit button, `paused` when idle,
  `state="working"` while the request is in flight.

## 10. Music

`components/audio-player.tsx`, client component mounted once in the root layout.

- `<audio src="/audio/ordinary.m4a" loop preload="none" />`.
- On mount, if `localStorage["enkd:muted"] === "1"`, do nothing. Else register one-time
  `pointerdown`, `keydown`, `wheel`, `touchstart` listeners on `window`; on first event
  call `play()`, then ramp `volume` 0 → 0.35 over 2s with `requestAnimationFrame`.
- Nav speaker button toggles mute; writes `enkd:muted`. Icon reflects state; `aria-pressed`.
- Playback state shared between the player and the nav button through a 10-line
  `useSyncExternalStore` store in the same file. No context provider.
- Playback persists across route changes because the root layout does not remount.

## 11. Contact form and API

Fields: `name`, `email`, `company` (optional), `need` (select), `message`, honeypot
`website`. `need` options, EN: AI automation, AI agent, AI chatbot, Website, Technical
co-founder, Other. Values sent to the API are fixed English keys regardless of locale.

`app/api/contact/route.ts` is the current handler with three changes: `need` validated
against the six keys (400 otherwise), subject `[enkd.uz] <need> — <name>`, `company` added
to text and HTML bodies. Same limits, honeypot, email regex, Resend sender and recipient.

Client: shadcn Input/Textarea/Select, uncontrolled, `FormData` → JSON. Submitting: button
disabled, orb `working`. Success: form replaced by `Got it. I reply within 24 hours.` and a
Telegram link. Error: inline message above the button, form kept. Strings bilingual.

## 12. SEO, AEO, GEO

- `generateMetadata` per page: title `<Page> · Diyorbek Komilov` (Home: `Diyorbek Komilov
  · AI systems for business, Tashkent`), description from content, `alternates.canonical`,
  `alternates.languages` for `en`, `uz`, `x-default`, OpenGraph and Twitter cards pointing
  to the route's generated image.
- `opengraph-image.tsx` per route folder using `next/og`: dark background, Geist, name and
  page title. Project pages take the project title.
- `sitemap.ts`: every route in both locales with `alternates.languages`. `robots.ts`: allow
  all, sitemap URL.
- JSON-LD, rendered as `<script type="application/ld+json">` from `lib/seo.ts`:
  - Every page: `Person` (name, jobTitle, address Tashkent, email, url, `sameAs` LinkedIn,
    Telegram, X, Instagram) and `ProfessionalService` (name Enkd, url, areaServed
    Uzbekistan + remote, `hasOfferCatalog` with the four services, `founder` → Person).
  - Home: `FAQPage` from the six questions. `WebSite` with `inLanguage`.
  - Project: `CreativeWork` (name, description, url, dateCreated year, `author` → Person)
    and `BreadcrumbList`.
  - Experience: `BreadcrumbList`.
- `public/llms.txt`: plain text, ~40 lines, EN: who Diyorbek is, what Enkd offers, where,
  how to contact, list of project URLs with one-line summaries, link to the sitemap.
- Copy rule: the first paragraph of every page states subject, what, and where in one
  liftable sentence.

## 13. Checks

- `npm run build` (Next build includes type checking) must pass.
- `scripts/check-seo.mjs`: starts `next start` on a free port, fetches all 28 HTML routes
  (14 per locale), asserts HTTP 200, exactly one `<title>`, unique title and description
  across routes, a canonical, both hreflang links, and that every `application/ld+json`
  block parses and includes `@type`. Fetches `/sitemap.xml`, `/robots.txt`, `/llms.txt`
  and asserts 200. Exits non-zero on any failure. Run as `npm run check:seo`.
- Manual: `vercel dev`, submit the form, confirm the email arrives with the new subject;
  Lighthouse on Home, SEO 100, performance ≥ 90 mobile; reduced-motion pass in devtools.
- Launch gate: Diyorbek reviews every `uz` string in `content/*.ts`.

## 14. Migration order (for the plan)

1. Branch. Remove Vite files, dead code, assets, dependencies. Install Next, orbs,
   analytics. New tsconfig, next.config, globals.css, tailwind config trimmed to tokens.
2. `lib/i18n.ts`, `content/site.ts`, `content/projects.ts` with EN copy. UZ drafted last.
3. Root layout, locale layout, nav, footer, grain, fonts, template transition, 404.
4. Home sections. Hero orb test decides the scaling approach.
5. Experience, project, blog, contact pages. API route. Form.
6. Audio player. Analytics.
7. Metadata, OG images, sitemap, robots, JSON-LD, llms.txt. `check-seo.mjs`.
8. UZ copy. Build, check script, manual checks. Deploy preview on Vercel.
