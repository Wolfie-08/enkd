import Link from "next/link";
import { site } from "@/content/site";
import { featuredProjects } from "@/content/projects";
import { localePath, type Locale } from "@/lib/i18n";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/experience/project-card";

export function SelectedWork({ locale }: { locale: Locale }) {
  return (
    <section className="container py-20 md:py-28">
      <Reveal>
        <SectionHeading index="02 / Work" title={site.selectedWork.heading[locale]} />
      </Reveal>
      <div className="grid gap-5 sm:grid-cols-2">
        {featuredProjects.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.08}>
            <ProjectCard locale={locale} project={p} index={`0${i + 1}`} />
          </Reveal>
        ))}
      </div>
      <Link href={localePath(locale, "/experience")} className="mt-8 inline-block font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-accent">
        {site.selectedWork.all[locale]} →
      </Link>
    </section>
  );
}
