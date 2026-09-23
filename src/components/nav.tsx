import Link from "next/link";
import { site } from "@/content/site";
import { localePath, type Locale } from "@/lib/i18n";
import { ThinkingOrb } from "@/components/ui/thinking-orbs";
import { Button } from "@/components/ui/button";
import { LanguageSwitch } from "@/components/language-switch";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileMenu } from "@/components/mobile-menu";
import { MuteButton } from "@/components/audio-player";

export function Nav({ locale }: { locale: Locale }) {
  const links = [
    { href: `${localePath(locale)}#work`, label: site.nav.work[locale] },
    { href: localePath(locale, "/experience"), label: site.nav.experience[locale] },
    { href: localePath(locale, "/blog"), label: site.nav.blog[locale] },
    { href: localePath(locale, "/contact"), label: site.nav.contact[locale] },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-background/70 backdrop-blur-md">
      <div className="container flex h-14 items-center justify-between gap-4">
        <Link href={localePath(locale)} className="flex items-center gap-2 font-mono text-sm tracking-wider uppercase">
          <span className="inline-flex size-6 items-center justify-center" aria-hidden="true">
            <ThinkingOrb state="solving" size={20} theme="dark" />
          </span>
          {site.name}
        </Link>
        <nav className="hidden md:flex items-center gap-6 font-mono text-xs uppercase tracking-wider">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitch locale={locale} />
          <MuteButton label={site.nav.sound[locale]} />
          <ThemeToggle label={site.nav.theme[locale]} />
          <Button asChild size="sm" className="hidden rounded-full px-4 md:inline-flex">
            <a href={site.resume}>{site.nav.resume[locale]} ↓</a>
          </Button>
          <MobileMenu label={site.nav.menu[locale]} links={[...links, { href: site.resume, label: `${site.nav.resume[locale]} (PDF)` }]} />
        </div>
      </div>
    </header>
  );
}
