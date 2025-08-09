import { useEffect } from "react";

type UseSEOParams = {
  title?: string;
  description?: string;
  canonicalPath?: string; // e.g. "/about"
  jsonLd?: Record<string, any> | null;
};

export default function useSEO({ title, description, canonicalPath, jsonLd }: UseSEOParams) {
  useEffect(() => {
    if (title) document.title = title;

    if (description) {
      let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", description);
    }

    if (canonicalPath) {
      const href = `${window.location.origin}${canonicalPath}`;
      let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", href);
    }

    // JSON-LD structured data
    const existing = document.getElementById("ld-json");
    if (existing) existing.remove();

    if (jsonLd) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "ld-json";
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }, [title, description, canonicalPath, jsonLd]);
}
