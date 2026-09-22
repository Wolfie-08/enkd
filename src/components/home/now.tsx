import Link from "next/link";
import { site } from "@/content/site";
import { localePath, type Locale } from "@/lib/i18n";
import { Reveal } from "@/components/reveal";

export function Now({ locale }: { locale: Locale }) {
  return (
    <section className="container py-20 md:py-28">
      <Reveal className="grid gap-6 md:grid-cols-[200px_1fr] border-t border-line pt-10">
        <p className="font-mono text-xs uppercase tracking-wider text-dim">03 / {site.now.heading[locale]}</p>
        <div>
          <p className="text-2xl md:text-3xl font-medium leading-snug max-w-3xl">{site.now.text[locale]}</p>
          <Link href={localePath(locale, "/experience")} className="mt-6 inline-block font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-accent">
            {site.now.link[locale]} →
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
