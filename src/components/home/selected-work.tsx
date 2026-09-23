import Link from "next/link";
import { site } from "@/content/site";
import { featuredProjects } from "@/content/projects";
import { localePath, type Locale } from "@/lib/i18n";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/experience/project-card";

export function SelectedWork({ locale }: { locale: Locale }) {
  return (
    <section id="work" className="container scroll-mt-24 py-14 md:py-20">
      <Reveal>
        <SectionHeading title={site.selectedWork.heading[locale]} intro={site.selectedWork.intro[locale]} />
      </Reveal>
      <div className="grid gap-6 md:grid-cols-2">
        {featuredProjects.map((p, i) => (
          <ProjectCard key={p.slug} locale={locale} project={p} delay={i * 0.08} />
        ))}
      </div>
      <Link href={localePath(locale, "/experience")} className="mt-8 inline-block font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-ink">
        {site.selectedWork.all[locale]} →
      </Link>
    </section>
  );
}
