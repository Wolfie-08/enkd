import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";
import { yearLabel, type Project } from "@/content/projects";
import { localePath, type Locale } from "@/lib/i18n";

// The first link a visitor can try right now: the live site, a demo, or the first extra (e.g. a live shop).
function demoLink(p: Project, locale: Locale) {
  const t = site.project;
  if (p.links.live) return { href: p.links.live, label: t.liveDemo[locale] };
  if (p.links.demo) return { href: p.links.demo, label: t.demo[locale] };
  const extra = p.links.extra?.[0];
  return extra ? { href: extra.href, label: t.demo[locale] } : null;
}

// Image, meta, title, summary, headline metric or stack, then an action bar.
// The title link stretches over the whole card; the demo button sits above it (z-10), so links never nest.
export function ProjectCard({ locale, project }: { locale: Locale; project: Project }) {
  const p = project;
  const mono = "font-mono text-xs uppercase tracking-wider";
  const metric = p.metrics?.[0];
  const demo = demoLink(p, locale);
  return (
    <article className="group relative flex h-full flex-col border border-line bg-background transition-colors duration-300 hover:border-accent/60">
      <div className="relative h-52 overflow-hidden border-b border-line md:h-64">
        {p.image ? (
          <img
            src={p.image}
            alt=""
            loading="lazy"
            className="size-full object-cover object-top grayscale-[40%] transition duration-700 ease-out group-hover:scale-[1.03] group-hover:grayscale-0 motion-reduce:transition-none"
          />
        ) : (
          <div className="crosshair size-full" aria-hidden="true" />
        )}
        {p.imageNote && (
          <span className={`${mono} absolute bottom-3 left-3 bg-background/85 px-2 py-1 text-foreground backdrop-blur`}>{p.imageNote[locale]}</span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <div className={`${mono} flex items-center justify-between gap-4 text-dim`}>
          <span>{site.experience.groups[p.group][locale]}</span>
          <span>{p.year ? yearLabel(p, locale) : site.project.status[p.status][locale]}</span>
        </div>
        <h3 className="mt-3 text-xl md:text-2xl font-semibold leading-snug text-balance">
          <Link
            href={localePath(locale, `/experience/${p.slug}`)}
            className="transition-colors after:absolute after:inset-0 after:content-[''] group-hover:text-accent"
          >
            {p.title[locale]}
          </Link>
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-2">{p.summary[locale]}</p>

        {metric ? (
          <p className="mt-5 flex items-baseline gap-3">
            <span className="text-3xl font-semibold tracking-tightest text-accent">{metric.value}</span>
            <span className={`${mono} text-dim`}>{metric.label[locale]}</span>
          </p>
        ) : p.stack?.length ? (
          <ul className={`${mono} mt-5 flex flex-wrap gap-2 text-muted-foreground`}>
            {p.stack.slice(0, 3).map((s) => <li key={s} className="border border-line px-2 py-1">{s}</li>)}
          </ul>
        ) : null}

        <div className="mt-auto pt-6">
          <div className="flex items-center justify-between gap-4 border-t border-line pt-5">
            {demo ? (
              <a
                href={demo.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono} relative z-10 inline-flex h-9 items-center gap-1.5 bg-accent px-4 text-accent-foreground transition hover:brightness-110 active:scale-[0.98]`}
              >
                {demo.label}
                <ArrowUpRight className="size-3.5" strokeWidth={2} aria-hidden="true" />
              </a>
            ) : <span />}
            <span className={`${mono} inline-flex items-center gap-1.5 text-muted-foreground transition-colors group-hover:text-foreground`} aria-hidden="true">
              {site.project.caseStudy[locale]}
              <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2} />
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
