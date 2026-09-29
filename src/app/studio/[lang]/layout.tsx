// src/app/studio/[lang]/layout.tsx: root layout for studio.enkd.uz (proxy.ts maps the host here).
import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Geist, Unbounded } from "next/font/google";
import { isStudioLang, studio, studioLangs, studioPath, STUDIO_URL } from "@/content/studio";
import "../scrollcraft.css";
import "../studio.css";

const text = Geist({ subsets: ["latin", "latin-ext", "cyrillic"], variable: "--font-text", display: "swap" });
const display = Unbounded({ subsets: ["latin", "latin-ext", "cyrillic"], variable: "--font-display", display: "swap" });

export function generateStaticParams() {
  return studioLangs.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isStudioLang(lang)) return {};
  return {
    metadataBase: new URL(STUDIO_URL),
    title: studio.meta.title[lang],
    description: studio.meta.description[lang],
    alternates: {
      canonical: studioPath(lang),
      languages: { uz: "/", ru: "/ru", en: "/en", "x-default": "/" },
    },
    openGraph: {
      title: studio.meta.title[lang],
      description: studio.meta.description[lang],
      url: studioPath(lang),
      siteName: "Enkd Studio",
      images: [{ url: "/studio/world/p0.jpg", width: 1920, height: 1080 }],
      type: "website",
    },
  };
}

export const viewport: Viewport = { themeColor: "#EEF4F1" };

export default async function StudioLayout({ children, params }: { children: ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isStudioLang(lang)) notFound();
  return (
    <html lang={lang === "uz" ? "uz-Latn" : lang} className={`${text.variable} ${display.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
