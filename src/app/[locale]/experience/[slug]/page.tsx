import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site } from "@/content/site";
import { projectBySlug, projects } from "@/content/projects";
import { localePath, locales, type Locale } from "@/lib/i18n";
import { breadcrumbLd, JsonLd, pageMetadata, projectLd } from "@/lib/seo";

type Props = { params: Promise<{ locale: Locale; slug: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) => projects.map((p) => ({ locale, slug: p.slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const p = projectBySlug(slug);
  if (!p) return {};
  return pageMetadata({ locale, path: `/experience/${slug}`, title: p.title[locale], description: p.summary[locale] });
}

export default async function ProjectPage({ params }: Props) {
  const { locale, slug } = await params;
  const p = projectBySlug(slug);
  if (!p) notFound();
  const i = projects.indexOf(p);
  const prev = projects[(i - 1 + projects.length) % projects.length];
  const next = projects[(i + 1) % projects.length];
  const t = site.project;
  const mono = "font-mono text-xs uppercase tracking-wider";

  return (
    <main className="container py-20 md:py-28 max-w-4xl">
      <JsonLd data={[
        projectLd(locale, p),
        breadcrumbLd([
          { name: site.nav.home[locale], url: localePath(locale) },
          { name: site.experience.heading[locale], url: localePath(locale, "/experience") },
          { name: p.title[locale], url: localePath(locale, `/experience/${p.slug}`) },
        ]),
      ]} />

      <p className={`${mono} text-dim`}>
        <Link href={localePath(locale, "/experience")} className="hover:text-foreground">{t.back[locale]}</Link>
        <span className="mx-2">/</span>{site.experience.groups[p.group][locale]}
        {p.year && <><span className="mx-2">/</span>{p.year}</>}
        <span className="mx-2">/</span>{t.status[p.status][locale]}
      </p>
      <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-[1.05]">{p.title[locale]}</h1>
      <p className="mt-6 text-lg text-muted-foreground">{p.summary[locale]}</p>

      {p.image && (
        <figure className="mt-10 overflow-hidden rounded-lg border border-line">
          <img src={p.image} alt={p.title[locale]} className="w-full object-cover" />
        </figure>
      )}

      <section className="mt-14 grid gap-4 md:grid-cols-[200px_1fr]">
        <h2 className={`${mono} text-dim`}>{t.built[locale]}</h2>
        <ul className="space-y-4 text-foreground/90">
          {p.built.map((b) => <li key={b.en} className="flex gap-3"><span className="text-dim">—</span>{b[locale]}</li>)}
        </ul>
      </section>

      {p.stack && (
        <section className="mt-10 grid gap-4 md:grid-cols-[200px_1fr]">
          <h2 className={`${mono} text-dim`}>{t.stack[locale]}</h2>
          <p className={`${mono} text-muted-foreground`}>{p.stack.join(" · ")}</p>
        </section>
      )}

      <section className="mt-10 grid gap-4 md:grid-cols-[200px_1fr]">
        <h2 className={`${mono} text-dim`}>{t.outcomes[locale]}</h2>
        <div>
          <ul className="space-y-3 text-muted-foreground">
            {p.outcomes.map((o) => <li key={o.en} className="flex gap-3"><span className="text-dim">—</span>{o[locale]}</li>)}
          </ul>
          {p.metrics && (
            <dl className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-px bg-line border border-line rounded-lg overflow-hidden">
              {p.metrics.map((m) => (
                <div key={m.label.en} className="bg-background p-4">
                  <dt className={`${mono} text-dim`}>{m.label[locale]}</dt>
                  <dd className="mt-2 text-2xl font-semibold">{m.value}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </section>

      {(p.links.live || p.links.demo || p.links.extra?.length) && (
        <section className="mt-10 grid gap-4 md:grid-cols-[200px_1fr]">
          <h2 className={`${mono} text-dim`}>{t.links[locale]}</h2>
          <ul className={`${mono} flex flex-wrap gap-x-6 gap-y-2`}>
            {p.links.live && <li><a href={p.links.live} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">{t.live[locale]} ↗</a></li>}
            {p.links.demo && <li><a href={p.links.demo} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">{t.demo[locale]} ↗</a></li>}
            {p.links.extra?.map((e) => <li key={e.href}><a href={e.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent">{e.label[locale]} ↗</a></li>)}
          </ul>
        </section>
      )}

      <nav className={`${mono} mt-20 flex justify-between border-t border-line pt-6`}>
        <Link href={localePath(locale, `/experience/${prev.slug}`)} className="text-muted-foreground hover:text-foreground">← {t.prev[locale]}</Link>
        <Link href={localePath(locale, `/experience/${next.slug}`)} className="text-muted-foreground hover:text-foreground">{t.next[locale]} →</Link>
      </nav>
    </main>
  );
}
