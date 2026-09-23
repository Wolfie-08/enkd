import Link from "next/link";
import { site } from "@/content/site";
import { localePath, type Locale } from "@/lib/i18n";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

export function Hire({ locale }: { locale: Locale }) {
  const mono = "font-mono text-xs uppercase tracking-wider";
  const linkedin = site.socials.find((s) => s.label === "LinkedIn")!.href;
  return (
    <section className="container py-14 md:py-20">
      <Reveal className="ticks border border-line bg-surface p-8 md:p-14">
        <p className={`${mono} text-accent`}>04 / {site.nav.contact[locale]}</p>
        <h2 className="mt-6 max-w-3xl text-4xl md:text-6xl font-semibold text-balance">{site.hire.heading[locale]}</h2>
        <p className="mt-4 max-w-xl text-lg text-muted-foreground">{site.hire.text[locale]}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild size="lg" className={mono}>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </Button>
          <Button asChild size="lg" variant="outline" className={`${mono} bg-background`}>
            <a href={site.resume}>{site.hero.resume[locale]} ↓</a>
          </Button>
          <Button asChild size="lg" variant="outline" className={`${mono} bg-background`}>
            <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          </Button>
        </div>
        <Link href={localePath(locale, "/contact")} className={`${mono} mt-8 inline-block text-muted-foreground hover:text-accent`}>
          {site.contact.heading[locale]} →
        </Link>
      </Reveal>
    </section>
  );
}
