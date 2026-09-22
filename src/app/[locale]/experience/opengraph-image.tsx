import { site } from "@/content/site";
import type { Locale } from "@/lib/i18n";
import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export default async function Image({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return ogImage(site.meta.experience.title[locale], site.meta.experience.description[locale]);
}
