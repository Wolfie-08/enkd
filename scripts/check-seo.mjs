// Asserts every route renders with unique, complete SEO metadata. Run after `npm run build`.
import { spawn } from "node:child_process";
import { readFileSync } from "node:fs";

const PORT = 3998;
const BASE = `http://localhost:${PORT}`;
const src = readFileSync(new URL("../src/content/projects.ts", import.meta.url), "utf8");
const slugs = [...src.matchAll(/slug: "([a-z0-9-]+)"/g)].map((m) => m[1]);
const pages = ["/", "/experience", "/blog", "/contact", "/faq", ...slugs.map((s) => `/experience/${s}`)];
const routes = [...pages, ...pages.map((p) => (p === "/" ? "/uz" : `/uz${p}`))];

const server = spawn("npx", ["next", "start", "-p", String(PORT)], { stdio: "ignore", detached: true });
const wait = async () => {
  for (let i = 0; i < 40; i++) {
    try { await fetch(BASE); return; } catch { await new Promise((r) => setTimeout(r, 500)); }
  }
  throw new Error("server did not start");
};

const failures = [];
const seen = { title: new Map(), description: new Map() };
const one = (html, re, label, url) => {
  const m = html.match(re);
  if (!m) failures.push(`${url}: missing ${label}`);
  return m?.[1];
};

try {
  await wait();
  for (const url of routes) {
    const res = await fetch(BASE + url);
    if (res.status !== 200) { failures.push(`${url}: HTTP ${res.status}`); continue; }
    const html = await res.text();
    const titles = html.match(/<title>/g)?.length ?? 0;
    if (titles !== 1) failures.push(`${url}: ${titles} <title> tags`);
    const title = one(html, /<title>([^<]+)<\/title>/, "title", url);
    const desc = one(html, /<meta name="description" content="([^"]+)"/, "description", url);
    one(html, /<link rel="canonical" href="([^"]+)"/, "canonical", url);
    if (!/<link rel="alternate" hrefLang="en"/.test(html) && !/hreflang="en"/i.test(html)) failures.push(`${url}: missing hreflang en`);
    if (!/hreflang="uz"/i.test(html)) failures.push(`${url}: missing hreflang uz`);
    for (const key of ["title", "description"]) {
      const v = key === "title" ? title : desc;
      if (!v) continue;
      const prev = seen[key].get(v);
      if (prev) failures.push(`${url}: duplicate ${key} with ${prev}`);
      seen[key].set(v, url);
    }
    const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
    if (blocks.length === 0) failures.push(`${url}: no JSON-LD`);
    for (const b of blocks) {
      try {
        const data = JSON.parse(b[1]);
        if (!data["@type"]) failures.push(`${url}: JSON-LD without @type`);
      } catch {
        failures.push(`${url}: JSON-LD does not parse`);
      }
    }
  }
  for (const f of ["/sitemap.xml", "/robots.txt", "/llms.txt"]) {
    const res = await fetch(BASE + f);
    if (res.status !== 200) failures.push(`${f}: HTTP ${res.status}`);
  }
} finally {
  try { process.kill(-server.pid); } catch {}
}

if (failures.length) {
  console.error(failures.join("\n"));
  console.error(`\n${failures.length} failure(s) across ${routes.length} routes`);
  process.exit(1);
}
console.log(`ok: ${routes.length} routes, sitemap, robots, llms.txt`);
