import type { Metadata } from "next";
import { site } from "@/content/site";
import type { Locale } from "@/lib/i18n";
import { faqLd, JsonLd, pageMetadata, websiteLd } from "@/lib/seo";
import { Hero } from "@/components/home/hero";
import { Marquee } from "@/components/marquee";
import { Services } from "@/components/home/services";
import { SelectedWork } from "@/components/home/selected-work";
import { Now } from "@/components/home/now";
import { Founders } from "@/components/home/founders";
import { Faq } from "@/components/home/faq";
import { Cta } from "@/components/home/cta";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata({ locale, path: "/", title: site.meta.home.title[locale], description: site.meta.home.description[locale] });
}

export default async function Home({ params }: Props) {
  const { locale } = await params;
  return (
    <main>
      <JsonLd data={[websiteLd(locale), faqLd(locale)]} />
      <Hero locale={locale} />
      <Marquee items={site.marquee} />
      <Services locale={locale} />
      <SelectedWork locale={locale} />
      <Now locale={locale} />
      <Founders locale={locale} />
      <Faq locale={locale} />
      <Cta locale={locale} />
    </main>
  );
}
