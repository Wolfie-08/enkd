import Link from "next/link";
import { site } from "@/content/site";
import { localePath, type Locale } from "@/lib/i18n";
import { ThinkingOrb } from "@/components/ui/thinking-orbs";
import { Button } from "@/components/ui/button";
import { LanguageSwitch } from "@/components/language-switch";
import { MuteButton } from "@/components/audio-player";

export function Nav({ locale }: { locale: Locale }) {
  const links = [
    { href: "/experience", label: site.nav.experience[locale] },
    { href: "/blog", label: site.nav.blog[locale] },
    { href: "/contact", label: site.nav.contact[locale] },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-background/80 backdrop-blur">
      <div className="container flex h-14 items-center justify-between gap-4">
        <Link href={localePath(locale)} className="flex items-center gap-2 font-mono text-sm tracking-wider uppercase">
          <span className="inline-flex size-6 items-center justify-center" aria-hidden="true">
            <ThinkingOrb state="solving" size={20} theme="dark" />
          </span>
          {site.brand}
        </Link>
        <nav className="flex items-center gap-4 sm:gap-6 font-mono text-xs uppercase tracking-wider">
          {links.map((l) => (
            <Link key={l.href} href={localePath(locale, l.href)} className="text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitch locale={locale} />
          <MuteButton label={site.nav.sound[locale]} />
          <Button asChild size="sm" className="hidden sm:inline-flex font-mono uppercase tracking-wider text-xs">
            <Link href={localePath(locale, "/contact")}>{site.nav.request[locale]}</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
