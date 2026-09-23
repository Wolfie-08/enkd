import Link from "next/link";
import { site } from "@/content/site";
import { yearLabel, type Project } from "@/content/projects";
import { localePath, type Locale } from "@/lib/i18n";

// A figure on the sheet: image with a fig label, then meta, title, summary, and a headline metric or stack.
export function ProjectCard({ locale, project, index }: { locale: Locale; project: Project; index?: string }) {
  const p = project;
  const mono = "font-mono text-xs uppercase tracking-wider";
  const metric = p.metrics?.[0];
  return (
    <Link
      href={localePath(locale, `/experience/${p.slug}`)}
      className="group flex h-full flex-col border border-line bg-background transition-colors hover:border-accent/60"
    >
      <div className="relative overflow-hidden border-b border-line">
        <div className="aspect-[16/9]">
          {p.image ? (
            <img src={p.image} alt="" loading="lazy" className="size-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]" />
          ) : (
            <div className="crosshair size-full" aria-hidden="true" />
          )}
        </div>
        {index && <span className={`${mono} absolute left-0 top-0 bg-background px-2 py-1 text-accent`}>Fig. {index}</span>}
        {p.imageNote && (
          <span className={`${mono} absolute bottom-3 left-3 bg-background/85 px-2 py-1 text-foreground backdrop-blur`}>{p.imageNote[locale]}</span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className={`${mono} flex flex-wrap items-center gap-x-2 text-dim`}>
          <span>{site.experience.groups[p.group][locale]}</span>
          <span aria-hidden="true">·</span>
          <span>{site.project.status[p.status][locale]}</span>
          {p.year && <><span aria-hidden="true">·</span><span>{yearLabel(p, locale)}</span></>}
        </p>
        <h3 className="mt-3 text-xl font-semibold leading-snug text-foreground transition-colors group-hover:text-accent">{p.title[locale]}</h3>
        <p className="mt-3 text-sm text-muted-foreground line-clamp-3">{p.summary[locale]}</p>
        <div className="mt-auto flex items-end justify-between gap-4 pt-6">
          {metric ? (
            <p>
              <span className="block text-2xl font-semibold text-accent">{metric.value}</span>
              <span className={`${mono} text-dim`}>{metric.label[locale]}</span>
            </p>
          ) : (
            <ul className={`${mono} flex flex-wrap gap-2 text-muted-foreground`}>
              {p.stack?.slice(0, 3).map((s) => <li key={s} className="border border-line px-2 py-1">{s}</li>)}
            </ul>
          )}
          <span className={`${mono} shrink-0 text-dim transition-colors group-hover:text-accent`} aria-hidden="true">→</span>
        </div>
      </div>
    </Link>
  );
}
