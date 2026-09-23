import Link from "next/link";
import { site } from "@/content/site";
import { localePath, type Locale } from "@/lib/i18n";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

// Condensed CV: jobs on the left, education and notes on the right.
export function Record({ locale }: { locale: Locale }) {
  const x = site.experience;
  const mono = "font-mono text-xs uppercase tracking-wider";
  return (
    <section className="container py-14 md:py-20">
      <Reveal>
        <SectionHeading title={site.record.heading[locale]} />
      </Reveal>
      <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
        <Reveal className="bg-card/70 backdrop-blur p-6 md:p-8">
          <p className={`${mono} text-dim`}>{x.work[locale]}</p>
          <ol className="mt-6 space-y-8">
            {x.jobs.map((j) => (
              <li key={j.org}>
                <p className={`${mono} text-ink`}>{j.period[locale]}</p>
                <h3 className="mt-2 text-xl font-semibold">{j.role[locale]}</h3>
                <p className="text-muted-foreground">{j.org}</p>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {j.points.slice(0, 2).map((p) => <li key={p.en} className="flex gap-3"><span className="text-dim">—</span>{p[locale]}</li>)}
                </ul>
              </li>
            ))}
          </ol>
        </Reveal>
        <Reveal className="bg-card/70 backdrop-blur p-6 md:p-8" delay={0.08}>
          <p className={`${mono} text-dim`}>{x.education[locale]}</p>
          <ol className="mt-6 space-y-8">
            {x.edu.map((e) => (
              <li key={e.org}>
                <p className={`${mono} text-ink`}>{e.period}</p>
                <h3 className="mt-2 text-xl font-semibold">{e.title[locale]}</h3>
                <p className="text-muted-foreground">
                  {e.url ? <a href={e.url} target="_blank" rel="noopener noreferrer" className="hover:text-ink">{e.org}</a> : e.org}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{e.note[locale]}</p>
              </li>
            ))}
          </ol>
          <p className={`${mono} mt-10 text-dim`}>{x.notes[locale]}</p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {x.notesList.map((n) => <li key={n.en} className="flex gap-3"><span className="text-dim">—</span>{n[locale]}</li>)}
          </ul>
        </Reveal>
      </div>
      <Link href={localePath(locale, "/experience")} className={`${mono} mt-8 inline-block text-muted-foreground hover:text-ink`}>
        {site.record.link[locale]} →
      </Link>
    </section>
  );
}
