import { ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";
import { yearLabel, type Project } from "@/content/projects";
import { localePath, type Locale } from "@/lib/i18n";
import { GlassBlogCard } from "@/components/ui/glass-blog-card-shadcnui";

// The first link a visitor can try right now: the live site, a demo, or the first extra (e.g. a live shop).
function demoLink(p: Project, locale: Locale) {
  const t = site.project;
  if (p.links.live) return { href: p.links.live, label: t.liveDemo[locale] };
  if (p.links.demo) return { href: p.links.demo, label: t.demo[locale] };
  const extra = p.links.extra?.[0];
  return extra ? { href: extra.href, label: t.demo[locale] } : null;
}

// Project data mapped onto the glass card: stack as tags, year and status as the date line,
// and the demo button in the footer slot, above the card-wide case-study link (z-10).
export function ProjectCard({ locale, project, delay }: { locale: Locale; project: Project; delay?: number }) {
  const p = project;
  const demo = demoLink(p, locale);
  const status = site.project.status[p.status][locale];
  return (
    <GlassBlogCard
      className="h-full min-w-0 max-w-none"
      delay={delay}
      href={localePath(locale, `/experience/${p.slug}`)}
      hoverLabel={site.project.caseStudy[locale]}
      title={p.title[locale]}
      excerpt={p.summary[locale]}
      image={p.image ?? null}
      note={p.imageNote?.[locale]}
      tags={p.stack?.slice(0, 2) ?? []}
      author={{ name: site.name }}
      readTime=""
      date={p.year ? `${yearLabel(p, locale)} · ${status}` : status}
      action={
        demo && (
          <a
            href={demo.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 inline-flex h-9 shrink-0 items-center gap-1.5 rounded-full bg-primary px-4 text-xs font-medium text-primary-foreground transition hover:bg-primary/85 active:scale-[0.97]"
          >
            {demo.label}
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </a>
        )
      }
    />
  );
}
