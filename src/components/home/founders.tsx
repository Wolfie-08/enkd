import Link from "next/link";
import { site } from "@/content/site";
import { localePath, type Locale } from "@/lib/i18n";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

export function Founders({ locale }: { locale: Locale }) {
  return (
    <section className="container py-10">
      <Reveal className="border border-line rounded-lg p-8 md:p-12 bg-surface grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-dim">04 / {site.founders.heading[locale]}</p>
          <p className="mt-4 text-lg text-foreground max-w-2xl">{site.founders.text[locale]}</p>
        </div>
        <Button asChild variant="outline" className="font-mono uppercase tracking-wider text-xs">
          <Link href={`${localePath(locale, "/contact")}?need=cofounder`}>{site.founders.cta[locale]}</Link>
        </Button>
      </Reveal>
    </section>
  );
}
