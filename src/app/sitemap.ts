import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { localePath, SITE_URL } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/experience", "/blog", "/contact", ...projects.map((p) => `/experience/${p.slug}`)];
  const now = new Date();
  return paths.flatMap((path) =>
    (["en", "uz"] as const).map((locale) => ({
      url: `${SITE_URL}${localePath(locale, path)}`,
      lastModified: now,
      changeFrequency: path === "/" ? "weekly" : "monthly",
      priority: path === "/" ? 1 : path.startsWith("/experience/") ? 0.6 : 0.8,
      alternates: { languages: { en: `${SITE_URL}${localePath("en", path)}`, uz: `${SITE_URL}${localePath("uz", path)}` } },
    })),
  );
}
