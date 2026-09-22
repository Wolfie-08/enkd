import Link from "next/link";
import { site } from "@/content/site";
import { localePath, type Locale } from "@/lib/i18n";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

export function Cta({ locale }: { locale: Locale }) {
  return (
    <section className="container py-20">
      <Reveal className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-semibold">{site.cta.heading[locale]}</h2>
        <p className="mt-4 text-muted-foreground">{site.cta.text[locale]}</p>
        <Button asChild size="lg" className="mt-8 font-mono uppercase tracking-wider text-xs">
          <Link href={localePath(locale, "/contact")}>{site.cta.button[locale]}</Link>
        </Button>
      </Reveal>
    </section>
  );
}
