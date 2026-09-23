import { site } from "@/content/site";
import { groupOrder, projects } from "@/content/projects";
import type { Locale } from "@/lib/i18n";
import { ProjectCard } from "@/components/experience/project-card";

export function ProjectGrid({ locale }: { locale: Locale }) {
  return (
    <div className="space-y-16">
      {groupOrder.map((g) => {
        const items = projects.filter((p) => p.group === g);
        return (
          <div key={g} className="grid gap-8 md:grid-cols-[200px_1fr]">
            <p className="text-sm font-semibold text-ink">{site.experience.groups[g][locale]}</p>
            <div className="grid gap-5 sm:grid-cols-2">
              {items.map((p, i) => (
                <ProjectCard key={p.slug} locale={locale} project={p} delay={i * 0.06} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
