# enkd.uz

Portfolio of Diyorbek Komilov. Next.js 16, App Router, static generation, English at `/` and Uzbek at `/uz`.

## Run

```sh
npm install
npm run dev        # http://localhost:3000
npm run build
npm run check:seo  # after build: asserts metadata and JSON-LD on all routes
```

## Content

All copy lives in `src/content/site.ts` and `src/content/projects.ts` as `{ en, uz }` pairs.

## Contact API

`POST /api/contact` sends email through Resend. Needs `RESEND_API_KEY` (Vercel env; locally via `vercel dev`).

## Deploy

Vercel, auto-detected Next.js. Before the first deploy of this branch, confirm the project's Framework Preset is Next.js and that no Vite-era Build Command or Output Directory override (`dist`) remains in the project settings.
