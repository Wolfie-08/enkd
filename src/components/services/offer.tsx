import { site } from "@/content/site";
import type { Locale } from "@/lib/i18n";
import { Reveal } from "@/components/reveal";

export function Services({ locale }: { locale: Locale }) {
  return (
    <section className="container pb-20 md:pb-28">
      <div className="grid gap-12 md:grid-cols-2 md:gap-x-16">
        {site.services.items.map((s, i) => (
          <Reveal key={s.key} delay={i * 0.08} className="border-t border-line pt-6">
            <p className="font-mono text-xs text-ink">{s.index}</p>
            <h3 className="mt-3 text-2xl font-semibold">{s.title[locale]}</h3>
            <p className="mt-2 text-ink">{s.promise[locale]}</p>
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
