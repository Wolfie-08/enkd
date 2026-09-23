// src/app/[locale]/layout.tsx
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { isLocale, locales, SITE_URL, type Locale } from "@/lib/i18n";
import { JsonLd, personLd } from "@/lib/seo";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { AudioPlayer } from "@/components/audio-player";
import { themeInitScript } from "@/components/theme-toggle";
import "../globals.css";

const sans = Geist({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata = { metadataBase: new URL(SITE_URL) };

export default async function LocaleLayout({ children, params }: { children: ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l: Locale = locale;
  return (
    <html lang={l} className={`light ${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="font-sans min-h-dvh flex flex-col">
        <JsonLd data={personLd()} />
        <Nav locale={l} />
        <div className="flex-1">{children}</div>
        <Footer locale={l} />
        <AudioPlayer />
        <Analytics />
      </body>
    </html>
  );
}
