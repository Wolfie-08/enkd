import { site } from "@/content/site";
import type { Locale } from "@/lib/i18n";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Services({ locale }: { locale: Locale }) {
  return (
    <section className="container py-20 md:py-28">
      <Reveal>
        <SectionHeading index="01 / Services" title={site.services.heading[locale]} intro={site.services.intro[locale]} />
      </Reveal>
      <div className="grid gap-px bg-line border border-line rounded-lg overflow-hidden md:grid-cols-2">
        {site.services.items.map((s, i) => (
          <Reveal key={s.key} delay={i * 0.08} className="bg-background p-6 md:p-8">
            <p className="font-mono text-xs text-dim">{s.index}</p>
            <h3 className="mt-3 text-2xl font-semibold">{s.title[locale]}</h3>
            <p className="mt-2 text-accent">{s.promise[locale]}</p>
            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              {s.includes.map((inc) => (
                <li key={inc.en} className="flex gap-3"><span className="text-dim">—</span>{inc[locale]}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
