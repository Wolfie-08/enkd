import type { Metadata } from "next";
import { site } from "@/content/site";
import type { Locale } from "@/lib/i18n";
import { JsonLd, pageMetadata, websiteLd } from "@/lib/seo";
import { Hero } from "@/components/home/hero";
import { SelectedWork } from "@/components/home/selected-work";
import { Record } from "@/components/home/record";
import { Toolkit } from "@/components/home/toolkit";
import { Hire } from "@/components/home/hire";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata({ locale, path: "/", title: site.meta.home.title[locale], description: site.meta.home.description[locale] });
}

export default async function Home({ params }: Props) {
  const { locale } = await params;
  return (
    <main>
      <JsonLd data={websiteLd(locale)} />
      <Hero locale={locale} />
      <SelectedWork locale={locale} />
      <Record locale={locale} />
      <Toolkit locale={locale} />
      <Hire locale={locale} />
    </main>
  );
}
