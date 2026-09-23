import Link from "next/link";
import { site } from "@/content/site";
import { featuredProjects } from "@/content/projects";
import { localePath, type Locale } from "@/lib/i18n";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/experience/project-card";

const spans = ["md:col-span-7", "md:col-span-5", "md:col-span-5", "md:col-span-7"];

export function SelectedWork({ locale }: { locale: Locale }) {
  return (
    <section id="work" className="container scroll-mt-24 py-14 md:py-20">
      <Reveal>
        <SectionHeading index="01 / Projects" title={site.selectedWork.heading[locale]} intro={site.selectedWork.intro[locale]} />
      </Reveal>
      {/* Offset rows (7/5, then 5/7) so the four cards don't read as a uniform tile wall. Single column below md. */}
      <div className="grid gap-6 md:grid-cols-12">
        {featuredProjects.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.08} className={`h-full ${spans[i % spans.length]}`}>
            <ProjectCard locale={locale} project={p} />
          </Reveal>
        ))}
      </div>
      <Link href={localePath(locale, "/experience")} className="mt-8 inline-block font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-accent">
        {site.selectedWork.all[locale]} →
      </Link>
    </section>
  );
}
