import Link from "next/link";
import { site } from "@/content/site";
import { localePath, type Locale } from "@/lib/i18n";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

export function Founders({ locale }: { locale: Locale }) {
  return (
    <section className="container py-10">
      <Reveal className="border-t border-line pt-10 grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="text-sm font-medium text-ink">{site.founders.heading[locale]}</p>
          <p className="mt-4 text-lg text-foreground max-w-2xl">{site.founders.text[locale]}</p>
        </div>
        <Button asChild variant="outline" className="rounded-full bg-card/40 px-6 hover:bg-card hover:text-foreground">
          <Link href={`${localePath(locale, "/contact")}?need=cofounder`} prefetch={false}>{site.founders.cta[locale]}</Link>
        </Button>
      </Reveal>
    </section>
  );
}
