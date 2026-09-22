export const locales = ["en", "uz"] as const;
export type Locale = (typeof locales)[number];
export type Bi = { en: string; uz: string };

export const isLocale = (v: string): v is Locale => (locales as readonly string[]).includes(v);

/** Public URL path for a locale. EN is unprefixed, UZ is /uz. */
export const localePath = (locale: Locale, path = "/") =>
  locale === "en" ? path : `/uz${path === "/" ? "" : path}`;

export const otherLocale = (locale: Locale): Locale => (locale === "en" ? "uz" : "en");

export const SITE_URL = "https://enkd.uz";
