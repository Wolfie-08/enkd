import type { Metadata } from "next";
import { SITE_URL, localePath, type Locale } from "@/lib/i18n";
import { site } from "@/content/site";
import type { Project } from "@/content/projects";

const ogLocale = { en: "en_US", uz: "uz_UZ" } as const;

export function pageMetadata(args: { locale: Locale; path: string; title: string; description: string }): Metadata {
  const { locale, path, title, description } = args;
  const canonical = `${SITE_URL}${localePath(locale, path)}`;
  const fullTitle = path === "/" ? title : `${title} · ${site.name}`;
  return {
    title: fullTitle,
    description,
    alternates: {
      canonical,
      languages: {
        en: `${SITE_URL}${localePath("en", path)}`,
        uz: `${SITE_URL}${localePath("uz", path)}`,
        "x-default": `${SITE_URL}${localePath("en", path)}`,
      },
    },
    openGraph: { title: fullTitle, description, url: canonical, siteName: site.brand, locale: ogLocale[locale], type: "website" },
    twitter: { card: "summary_large_image", title: fullTitle, description, site: "@Enkd127" },
  };
}

const personId = `${SITE_URL}/#person`;
const orgId = `${SITE_URL}/#org`;

export function personLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
    name: site.name,
    jobTitle: "Digital Systems Engineer",
    email: `mailto:${site.email}`,
    url: SITE_URL,
    address: { "@type": "PostalAddress", addressLocality: "Tashkent", addressCountry: "UZ" },
    alumniOf: [{ "@type": "CollegeOrUniversity", name: "New Uzbekistan University", url: "https://newuu.uz" }],
    worksFor: { "@type": "Organization", name: "Supply Group LLC" },
    sameAs: site.socials.map((s) => s.href),
    knowsAbout: ["AI automation", "AI agents", "Telegram bots", "PostgreSQL", "Power BI", "Mechanical engineering"],
  };
}

export function serviceLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": orgId,
    name: site.brand,
    url: SITE_URL,
    founder: { "@id": personId },
    address: { "@type": "PostalAddress", addressLocality: "Tashkent", addressCountry: "UZ" },
    areaServed: ["Uzbekistan", "Remote"],
    availableLanguage: ["en", "uz", "ru"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: site.services.heading[locale],
      itemListElement: site.services.items.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title[locale], description: `${s.promise[locale]} ${s.includes.map((i) => i[locale]).join(". ")}.` },
      })),
    },
  };
}

export function websiteLd(locale: Locale) {
  return { "@context": "https://schema.org", "@type": "WebSite", url: SITE_URL, name: site.brand, inLanguage: locale, publisher: { "@id": personId } };
}

export function faqLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: site.faq.items.map((f) => ({
      "@type": "Question",
      name: f.q[locale],
      acceptedAnswer: { "@type": "Answer", text: f.a[locale] },
    })),
  };
}

export function projectLd(locale: Locale, p: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: p.title[locale],
    description: p.summary[locale],
    url: `${SITE_URL}${localePath(locale, `/experience/${p.slug}`)}`,
    ...(p.year ? { dateCreated: p.year.slice(0, 4) } : {}),
    ...(p.image ? { image: `${SITE_URL}${p.image}` } : {}),
    author: { "@id": personId },
    inLanguage: locale,
  };
}

export function breadcrumbLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: `${SITE_URL}${it.url}` })),
  };
}

export function JsonLd({ data }: { data: object | object[] }) {
  const list = Array.isArray(data) ? data : [data];
  return (
    <>
      {list.map((d, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />
      ))}
    </>
  );
}
