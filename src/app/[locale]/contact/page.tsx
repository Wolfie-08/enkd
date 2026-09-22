// src/app/[locale]/contact/page.tsx
import type { Metadata } from "next";
import { Suspense } from "react";
import { site } from "@/content/site";
import { localePath, type Locale } from "@/lib/i18n";
import { breadcrumbLd, JsonLd, pageMetadata } from "@/lib/seo";
import { RequestForm } from "@/components/contact/request-form";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata({ locale, path: "/contact", title: site.meta.contact.title[locale], description: site.meta.contact.description[locale] });
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  const c = site.contact;
  return (
    <main className="container py-20 md:py-28 grid gap-12 lg:grid-cols-[1fr_1.2fr]">
      <JsonLd data={breadcrumbLd([
        { name: site.nav.home[locale], url: localePath(locale) },
        { name: c.heading[locale], url: localePath(locale, "/contact") },
      ])} />
      <div>
        <p className="font-mono text-xs uppercase tracking-wider text-dim">{site.nav.contact[locale]}</p>
        <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-[1.05]">{c.heading[locale]}</h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-md">{c.intro[locale]}</p>
        <div className="mt-10 font-mono text-xs uppercase tracking-wider space-y-2">
          <p className="text-dim">{c.direct[locale]}</p>
          <a href={`mailto:${site.email}`} className="block hover:text-accent">{site.email}</a>
          <a href={site.telegram} target="_blank" rel="noopener noreferrer" className="block hover:text-accent">Telegram @kdiyor_18</a>
        </div>
      </div>
      {/* Suspense: the form reads ?need= with useSearchParams, which needs a boundary in a static page. */}
      <Suspense fallback={null}>
        <RequestForm locale={locale} />
      </Suspense>
    </main>
  );
}
