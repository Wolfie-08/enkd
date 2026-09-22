import Link from "next/link";
import { site } from "@/content/site";
import type { Project } from "@/content/projects";
import { localePath, type Locale } from "@/lib/i18n";

export function ProjectCard({ locale, project, index }: { locale: Locale; project: Project; index?: string }) {
  const p = project;
  return (
    <Link
      href={localePath(locale, `/experience/${p.slug}`)}
      className="group block border border-line rounded-lg overflow-hidden bg-surface hover:border-foreground/30 transition-colors"
    >
      {p.image ? (
        <div className="aspect-[16/10] overflow-hidden border-b border-line">
          <img src={p.image} alt="" loading="lazy" className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
        </div>
      ) : (
        <div className="aspect-[16/10] border-b border-line hero-grid" />
      )}
      <div className="p-5">
        <div className="flex items-center justify-between font-mono text-xs uppercase tracking-wider text-dim">
          <span>{index ?? site.experience.groups[p.group][locale]}</span>
          <span>{p.year ?? site.project.status[p.status][locale]}</span>
        </div>
        <h3 className="mt-3 text-lg font-semibold leading-snug group-hover:text-accent transition-colors">{p.title[locale]}</h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{p.summary[locale]}</p>
      </div>
    </Link>
  );
}
