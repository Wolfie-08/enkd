import type { Metadata } from "next";
import { site } from "@/content/site";
import { localePath, type Locale } from "@/lib/i18n";
import { breadcrumbLd, JsonLd, pageMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/section-heading";
import { Timeline } from "@/components/experience/timeline";
import { ProjectGrid } from "@/components/experience/project-grid";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata({ locale, path: "/experience", title: site.meta.experience.title[locale], description: site.meta.experience.description[locale] });
}

export default async function ExperiencePage({ params }: Props) {
  const { locale } = await params;
  const x = site.experience;
  return (
    <main className="container py-20 md:py-28">
      <JsonLd data={breadcrumbLd([
        { name: site.nav.home[locale], url: localePath(locale) },
        { name: x.heading[locale], url: localePath(locale, "/experience") },
      ])} />
      <SectionHeading title={x.heading[locale]} intro={x.intro[locale]} />
      <Timeline locale={locale} />
      <div className="mt-24 border-t border-line pt-16">
        <SectionHeading title={x.projects[locale]} />
        <ProjectGrid locale={locale} />
      </div>
    </main>
  );
}
