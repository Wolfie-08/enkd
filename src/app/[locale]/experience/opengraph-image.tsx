import { site } from "@/content/site";
import { locales, type Locale } from "@/lib/i18n";
import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
export default async function Image({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return ogImage(site.meta.experience.title[locale], site.meta.experience.description[locale]);
}
