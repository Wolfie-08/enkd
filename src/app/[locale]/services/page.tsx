// src/app/[locale]/services/page.tsx
// One-page business offer. Deliberately not linked from the nav or footer: the site leads with internships.
import type { Metadata } from "next";
import { site } from "@/content/site";
import { localePath, type Locale } from "@/lib/i18n";
import { breadcrumbLd, faqLd, JsonLd, pageMetadata, serviceLd } from "@/lib/seo";
import { Services } from "@/components/services/offer";
import { Founders } from "@/components/services/founders";
import { Faq } from "@/components/services/faq-preview";
import { Cta } from "@/components/services/cta";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata({ locale, path: "/services", title: site.meta.services.title[locale], description: site.meta.services.description[locale] });
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  return (
    <main>
      <JsonLd data={[
        serviceLd(locale),
        faqLd(locale),
        breadcrumbLd([
          { name: site.nav.home[locale], url: localePath(locale) },
          { name: site.nav.services[locale], url: localePath(locale, "/services") },
        ]),
      ]} />
      <header className="container pt-16 pb-12 md:pt-24 md:pb-16">
        <p className="font-mono text-xs uppercase tracking-wider text-accent">{site.servicesPage.eyebrow[locale]}</p>
        <h1 className="mt-6 max-w-4xl text-5xl md:text-7xl font-semibold leading-[1.02] text-balance">{site.services.heading[locale]}</h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">{site.services.intro[locale]}</p>
      </header>
      <Services locale={locale} />
      <Founders locale={locale} />
      <Faq locale={locale} />
      <Cta locale={locale} />
    </main>
  );
}
