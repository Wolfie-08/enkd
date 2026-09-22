import { projectBySlug } from "@/content/projects";
import { site } from "@/content/site";
import type { Locale } from "@/lib/i18n";
import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export default async function Image({ params }: { params: Promise<{ locale: Locale; slug: string }> }) {
  const { locale, slug } = await params;
  const p = projectBySlug(slug);
  return ogImage(p ? p.title[locale] : site.brand, p ? site.experience.groups[p.group][locale] : "");
}
