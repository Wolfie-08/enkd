// src/app/[locale]/blog/page.tsx
import type { Metadata } from "next";
import { site } from "@/content/site";
import { localePath, type Locale } from "@/lib/i18n";
import { breadcrumbLd, JsonLd, pageMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata({ locale, path: "/blog", title: site.meta.blog.title[locale], description: site.meta.blog.description[locale] });
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  const b = site.blog;
  return (
    <main className="container py-20 md:py-28">
      <JsonLd data={breadcrumbLd([
        { name: site.nav.home[locale], url: localePath(locale) },
        { name: b.heading[locale], url: localePath(locale, "/blog") },
      ])} />
      <SectionHeading index="Blog" title={b.heading[locale]} intro={b.intro[locale]} />
      <div className="grid gap-5 md:grid-cols-3">
        {b.links.map((l, i) => (
          <Reveal key={l.href} delay={i * 0.08}>
            <a href={l.href} target="_blank" rel="noopener noreferrer" className="group block h-full border border-line rounded-lg p-6 bg-surface hover:border-foreground/30 transition-colors">
              <p className="font-mono text-xs uppercase tracking-wider text-dim">0{i + 1}</p>
              <h2 className="mt-3 text-xl font-semibold group-hover:text-accent transition-colors">{l.title[locale]}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{l.text[locale]}</p>
              <p className="mt-6 font-mono text-xs uppercase tracking-wider text-muted-foreground">{l.action[locale]} ↗</p>
            </a>
          </Reveal>
        ))}
      </div>
    </main>
  );
}
