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
      <Reveal className="relative overflow-hidden rounded-3xl border border-line bg-card/60 p-8 shadow-xl shadow-foreground/5 backdrop-blur-md md:p-14">
                <h2 className="max-w-3xl text-4xl md:text-6xl font-semibold text-balance">{site.hire.heading[locale]}</h2>
        <p className="mt-4 max-w-xl text-lg text-muted-foreground">{site.hire.text[locale]}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild size="lg" className="rounded-full px-6">
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full bg-card/40 px-6 hover:bg-card hover:text-foreground">
            <a href={site.resume}>{site.hero.resume[locale]} ↓</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full bg-card/40 px-6 hover:bg-card hover:text-foreground">
            <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          </Button>
        </div>
        <Link href={localePath(locale, "/contact")} className={`${mono} mt-8 inline-block text-muted-foreground hover:text-ink`}>
          {site.contact.heading[locale]} →
        </Link>
      </Reveal>
    </section>
  );
}
