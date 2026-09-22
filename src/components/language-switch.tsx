// src/components/language-switch.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { localePath, otherLocale, type Locale } from "@/lib/i18n";

export function LanguageSwitch({ locale }: { locale: Locale }) {
  const pathname = usePathname() ?? "/";
  // Strip the /uz prefix to get the locale-neutral path.
  const path = pathname === "/uz" ? "/" : pathname.startsWith("/uz/") ? pathname.slice(3) : pathname;
  const other = otherLocale(locale);
  return (
    <div className="font-mono text-xs uppercase tracking-wider flex items-center gap-1">
      <span className="text-foreground" aria-current="true">{locale}</span>
      <span className="text-dim">/</span>
      <Link href={localePath(other, path)} hrefLang={other} className="text-dim hover:text-foreground transition-colors">{other}</Link>
    </div>
  );
}
