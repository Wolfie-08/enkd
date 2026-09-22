import Link from "next/link";
import { site } from "@/content/site";
import { localePath, type Locale } from "@/lib/i18n";

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="border-t border-line mt-24">
      <div className="container py-12 grid gap-10 md:grid-cols-3 text-sm">
        <div className="space-y-3">
          <p className="font-mono uppercase tracking-wider text-xs text-dim">{site.brand}</p>
          <p className="text-muted-foreground max-w-xs">{site.footer.tagline[locale]}</p>
          <a href={`mailto:${site.email}`} className="block hover:text-accent transition-colors">{site.email}</a>
        </div>
        <div className="space-y-3">
          <p className="font-mono uppercase tracking-wider text-xs text-dim">{site.nav.experience[locale]}</p>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link href={localePath(locale, "/experience")} className="hover:text-foreground">{site.nav.experience[locale]}</Link></li>
            <li><Link href={localePath(locale, "/blog")} className="hover:text-foreground">{site.nav.blog[locale]}</Link></li>
            <li><Link href={localePath(locale, "/contact")} className="hover:text-foreground">{site.nav.contact[locale]}</Link></li>
            <li><a href="/Diyorbek_Komilov_CV.pdf" className="hover:text-foreground">CV (PDF)</a></li>
          </ul>
        </div>
        <div className="space-y-3">
          <p className="font-mono uppercase tracking-wider text-xs text-dim">Social</p>
          <ul className="space-y-2 text-muted-foreground">
            {site.socials.map((s) => (
              <li key={s.href}><a href={s.href} target="_blank" rel="noopener noreferrer me" className="hover:text-foreground">{s.label} <span className="text-dim">{s.handle}</span></a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container pb-8 font-mono text-xs text-dim">
        © {new Date().getFullYear()} {site.name}. {site.footer.rights[locale]}
      </div>
    </footer>
  );
}
