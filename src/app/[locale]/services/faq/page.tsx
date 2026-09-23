// src/app/[locale]/services/faq/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { faqGroups, faqId, faqPage } from "@/content/faq";
import { localePath, type Locale } from "@/lib/i18n";
import { breadcrumbLd, faqLd, JsonLd, pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata({ locale, path: "/services/faq", title: site.meta.faq.title[locale], description: site.meta.faq.description[locale] });
}

export default async function FaqPage({ params }: Props) {
  const { locale } = await params;
  return (
    <main className="container py-20 md:py-28 max-w-3xl">
      <JsonLd data={[
        faqLd(locale, faqGroups.flatMap((g) => g.items)),
        breadcrumbLd([
          { name: site.nav.home[locale], url: localePath(locale) },
          { name: site.nav.services[locale], url: localePath(locale, "/services") },
          { name: site.nav.faq[locale], url: localePath(locale, "/services/faq") },
        ]),
      ]} />
      <p className="font-mono text-xs uppercase tracking-wider text-dim">
        <Link href={localePath(locale, "/services")} className="hover:text-foreground">{site.nav.services[locale]}</Link>
        <span className="mx-2">/</span><span className="text-accent">{site.nav.faq[locale]}</span>
      </p>
      <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-[1.05]">{faqPage.heading[locale]}</h1>
      <p className="mt-6 text-lg text-muted-foreground">{faqPage.intro[locale]}</p>

      <nav aria-label={faqPage.contents[locale]} className="mt-10 font-mono text-xs uppercase tracking-wider">
        <p className="text-dim">{faqPage.contents[locale]}</p>
        <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
          {faqGroups.map((g) => (
            <li key={g.id}><a href={`#${g.id}`} className="hover:text-accent">{g.title[locale]} ({g.items.length})</a></li>
          ))}
        </ul>
      </nav>

      {faqGroups.map((g, i) => (
        <section key={g.id} id={g.id} className="mt-16 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold">
            <span className="font-mono text-sm text-accent mr-3">{String(i + 1).padStart(2, "0")}</span>
            {g.title[locale]}
          </h2>
          <div className="mt-6 divide-y divide-line border-y border-line">
            {g.items.map((f) => {
              const id = faqId(f);
              return (
                <div key={id} id={id} className="py-5 scroll-mt-24">
                  <h3 className="text-lg font-medium"><a href={`#${id}`} className="hover:text-accent">{f.q[locale]}</a></h3>
                  <p className="mt-2 text-muted-foreground">{f.a[locale]}</p>
                </div>
              );
            })}
          </div>
        </section>
      ))}

      <p className="mt-16 font-mono text-xs uppercase tracking-wider">
        <Link href={localePath(locale, "/contact")} className="hover:text-accent">{faqPage.cta[locale]} →</Link>
      </p>
    </main>
  );
}
