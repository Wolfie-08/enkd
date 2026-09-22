import Link from "next/link";
import { site } from "@/content/site";
import type { Project } from "@/content/projects";
import { localePath, type Locale } from "@/lib/i18n";

// Screenshot on top (a grid strip when the project has none), then index, title, summary and stack chips.
export function ProjectCard({ locale, project, index }: { locale: Locale; project: Project; index?: string }) {
  const p = project;
  const mono = "font-mono text-xs uppercase tracking-wider";
  return (
    <Link
      href={localePath(locale, `/experience/${p.slug}`)}
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-line bg-surface transition-colors hover:border-foreground/30"
    >
      <div className="overflow-hidden border-b border-line">
        <div className="aspect-[16/8]">
          {p.image ? (
            <img src={p.image} alt="" loading="lazy" className="size-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]" />
          ) : (
            <div className="hero-grid size-full" aria-hidden="true" />
          )}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className={`${mono} flex items-center justify-between text-dim`}>
          <span>{index ?? site.experience.groups[p.group][locale]}</span>
          <span className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
            {site.project.status[p.status][locale]}
            {p.year && <span className="text-dim">· {p.year}</span>}
          </span>
        </div>
        <h3 className="mt-4 text-xl font-semibold leading-snug transition-colors group-hover:text-accent">{p.title[locale]}</h3>
        <p className="mt-3 text-sm text-muted-foreground line-clamp-3">{p.summary[locale]}</p>
        {p.stack?.length ? (
          <ul className={`${mono} mt-5 flex flex-wrap gap-2 text-muted-foreground`}>
            {p.stack.slice(0, 3).map((s) => (
              <li key={s} className="rounded-md border border-line px-2 py-1">{s}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </Link>
  );
}
