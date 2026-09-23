"use client";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { MousePointerClick } from "lucide-react";
import { site } from "@/content/site";
import { localePath, type Locale } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

// three.js is ~600 KB: load the moon after first paint.
const LunarScene = dynamic(() => import("@/components/ui/lunar-gravity-card").then((m) => m.LunarScene), { ssr: false });

export function Hero({ locale }: { locale: Locale }) {
  const reduce = useReducedMotion();
  const h = site.hero;
  const mono = "font-mono text-xs uppercase tracking-wider";
  return (
    <section className="overflow-x-clip">
      <div className="container grid gap-12 pt-12 pb-16 md:pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-card/50 px-3.5 py-1.5 text-sm text-foreground backdrop-blur">
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
            <Button asChild size="lg" className="rounded-full px-6">
              <a href={site.resume}>{h.resume[locale]} ↓</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full bg-card/40 px-6 backdrop-blur hover:bg-card hover:text-foreground">
              <Link href={localePath(locale, "/contact")}>{h.contact[locale]}</Link>
            </Button>
          </div>
        </div>

        {/* Interactive moon, straight on the page background. */}
        <figure>
          <div className="relative aspect-square" role="img" aria-label={h.figureLabel[locale]}>
            {/* Canvas bleeds past the column so the ring isn't cut at a hard edge; the section clips sideways overflow. */}
            <LunarScene className="absolute -inset-[14%] h-auto w-auto" />
          </div>
          <figcaption className="mt-2 flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <MousePointerClick className="size-3.5 shrink-0 text-accent" aria-hidden="true" />
            {h.figure[locale]}
          </figcaption>
        </figure>
      </div>

      {/* Title block: the facts a recruiter scans first. */}
      <div className="container pb-16">
        <dl className="grid grid-cols-2 gap-x-8 gap-y-6 lg:grid-cols-4">
          {h.specs.map((s) => (
            <div key={s.label.en} className="border-t border-line pt-4">
              <dt className={`${mono} text-ink`}>{s.label[locale]}</dt>
              <dd className="mt-2 text-sm font-medium">{s.value[locale]}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
