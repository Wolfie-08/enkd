"use client";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/content/site";
import { localePath, type Locale } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { HeroOrb } from "@/components/home/hero-orb";

export function Hero({ locale }: { locale: Locale }) {
  const reduce = useReducedMotion();
  const words = site.hero.h1[locale].split(" ");
  return (
    <section className="relative overflow-hidden">
      <div className="hero-grid absolute inset-0 -z-10" aria-hidden="true" />
      <div className="container grid gap-12 py-20 md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-dim">{site.hero.eyebrow[locale]}</p>
          <h1 className="mt-6 text-5xl md:text-7xl font-semibold leading-[1.02]">
            {words.map((w, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.25em]"
                initial={reduce ? false : { y: "0.4em" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
              >
                {w}
              </motion.span>
            ))}
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground">{site.hero.sub[locale]}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild size="lg" className="font-mono uppercase tracking-wider text-xs">
              <Link href={localePath(locale, "/contact")}>{site.hero.primary[locale]}</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-mono uppercase tracking-wider text-xs">
              <Link href={localePath(locale, "/experience")}>{site.hero.secondary[locale]}</Link>
            </Button>
          </div>
          <dl className="mt-14 grid grid-cols-2 gap-x-8 gap-y-4 max-w-md font-mono text-xs uppercase tracking-wider">
            {site.hero.status.map((s) => (
              <div key={s.label.en} className="border-t border-line pt-3">
                <dt className="text-dim">{s.label[locale]}</dt>
                <dd className="mt-1 text-foreground">{s.value[locale]}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto flex items-center justify-center lg:justify-end">
          <div className="orb-halo absolute size-[420px] md:size-[600px] rounded-full" aria-hidden="true" />
          <HeroOrb label="Enkd" className="relative size-[300px] md:size-[520px]" />
        </div>
      </div>
    </section>
  );
}
