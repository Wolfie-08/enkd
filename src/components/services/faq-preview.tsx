import Link from "next/link";
import { site } from "@/content/site";
import { localePath, type Locale } from "@/lib/i18n";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Faq({ locale }: { locale: Locale }) {
  return (
    <section className="container py-20 md:py-28">
      <Reveal>
        <SectionHeading index="02 / FAQ" title={site.faq.heading[locale]} />
      </Reveal>
      <div className="max-w-3xl divide-y divide-line border-y border-line">
        {site.faq.items.map((f) => (
          <details key={f.q.en} className="group py-5">
            <summary className="flex items-center justify-between gap-6 text-lg font-medium">
              {f.q[locale]}
              <span aria-hidden="true" className="font-mono text-dim transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-muted-foreground">{f.a[locale]}</p>
          </details>
        ))}
      </div>
      <Link href={localePath(locale, "/services/faq")} className="mt-8 inline-block font-mono text-xs uppercase tracking-wider hover:text-accent">{site.faq.all[locale]} →</Link>
    </section>
  );
}
