# Diyorbek Komilov Portfolio

Personal portfolio website built with React, TypeScript, Vite, Tailwind CSS, and shadcn/ui.

## Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Framer Motion
- React Router

## Local Development

Requirements:

- Node.js
- npm

Run locally:

```sh
npm install
npm run dev
```

The dev server starts on the default Vite port unless overridden.

## Build

Create a production build with:

```sh
npm run build
```

Preview the production build locally with:

```sh
npm run preview
```

## Project Structure

- `src/components` – page sections and shared UI composition
- `src/components/ui` – shadcn/ui primitives and custom UI components
- `src/content` – structured portfolio content such as projects
- `src/pages` – route-level pages
- `public` – static assets such as audio, PDFs, and images

## Notes

- Project and case study content is managed in `src/content/projects.ts`.
- Static assets used by the hero music player live under `public/audio` and `public/images/covers`.
