"use client";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/content/site";
import { localePath, type Locale } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { HeroOrb } from "@/components/home/hero-orb";

export function Hero({ locale }: { locale: Locale }) {
  const reduce = useReducedMotion();
  const h = site.hero;
  const mono = "font-mono text-xs uppercase tracking-wider";
  return (
    <section className="border-b border-line">
      <div className="container grid gap-12 pt-12 pb-16 md:pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <p className={`${mono} inline-flex items-center gap-2 border border-line bg-background px-3 py-1.5 text-foreground`}>
            <span className="relative flex size-2" aria-hidden="true">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            {h.open[locale]}
          </p>
          <h1 className="mt-8 text-6xl sm:text-7xl md:text-8xl font-semibold leading-[0.95]">
            {site.name.split(" ").map((w, i) => (
              <motion.span
                key={w}
                className="block"
                initial={reduce ? false : { y: "0.3em", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] }}
              >
                {w}
              </motion.span>
            ))}
          </h1>
          <p className="mt-8 max-w-xl text-xl md:text-2xl leading-snug text-balance">{h.lead[locale]}</p>
          <p className="mt-4 max-w-xl text-muted-foreground">{h.sub[locale]}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild size="lg" className={mono}>
              <a href={site.resume}>{h.resume[locale]} ↓</a>
            </Button>
            <Button asChild size="lg" variant="outline" className={`${mono} bg-background`}>
              <Link href={localePath(locale, "/contact")}>{h.contact[locale]}</Link>
            </Button>
          </div>
        </div>

        {/* Orb drawn as a figure on the sheet: frame, centre lines, caption. */}
        <figure className="ticks border border-line bg-background/60">
          <div className="crosshair relative flex aspect-square items-center justify-center overflow-hidden">
            <div className="orb-halo absolute inset-[8%] rounded-full" aria-hidden="true" />
            <HeroOrb label={h.figure[locale]} className="relative size-[86%]" />
          </div>
          <figcaption className={`${mono} border-t border-line px-4 py-3 text-dim`}>{h.figure[locale]}</figcaption>
        </figure>
      </div>

      {/* Title block: the facts a recruiter scans first. */}
      <div className="container pb-16">
        <dl className="grid grid-cols-2 gap-px border border-line bg-line lg:grid-cols-4">
          {h.specs.map((s) => (
            <div key={s.label.en} className="bg-background p-4">
              <dt className={`${mono} text-dim`}>{s.label[locale]}</dt>
              <dd className="mt-2 text-sm font-medium">{s.value[locale]}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
