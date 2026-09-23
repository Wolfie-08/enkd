import { site } from "@/content/site";
import type { Locale } from "@/lib/i18n";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Toolkit({ locale }: { locale: Locale }) {
  const t = site.toolkit;
  return (
    <section className="container py-14 md:py-20">
      <Reveal>
        <SectionHeading title={t.heading[locale]} intro={t.intro[locale]} />
      </Reveal>
      <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
        {t.groups.map((g, i) => (
          <Reveal key={g.title.en} delay={i * 0.08} className="bg-card/70 backdrop-blur p-6 md:p-8">
            <h3 className="text-sm font-semibold text-ink">{g.title[locale]}</h3>
            <ul className="mt-5 divide-y divide-line">
              {g.items.map((s) => <li key={s} className="py-2.5">{s}</li>)}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
