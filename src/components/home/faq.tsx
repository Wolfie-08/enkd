import { site } from "@/content/site";
import type { Locale } from "@/lib/i18n";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Faq({ locale }: { locale: Locale }) {
  return (
    <section className="container py-20 md:py-28 max-w-3xl">
      <Reveal>
        <SectionHeading index="05 / FAQ" title={site.faq.heading[locale]} />
      </Reveal>
      <div className="divide-y divide-line border-y border-line">
        {site.faq.items.map((f) => (
          <details key={f.q.en} className="group py-5">
            <summary className="flex items-center justify-between gap-6 text-lg font-medium">
              {f.q[locale]}
              <span className="font-mono text-dim transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-muted-foreground">{f.a[locale]}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
