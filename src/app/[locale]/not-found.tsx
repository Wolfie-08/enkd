import Link from "next/link";
import { site } from "@/content/site";

// Locale is not available in not-found; render both, EN first.
export default function NotFound() {
  return (
    <main className="container py-32 max-w-xl">
      <p className="font-mono text-xs uppercase tracking-wider text-dim">404</p>
      <h1 className="mt-4 text-4xl font-semibold">{site.notFound.title.en}</h1>
      <p className="mt-2 text-muted-foreground">{site.notFound.text.en} · {site.notFound.text.uz}</p>
      <div className="mt-8 flex gap-6 font-mono text-xs uppercase tracking-wider">
        <Link href="/" className="hover:text-accent">{site.notFound.home.en}</Link>
        <Link href="/uz" className="hover:text-accent">{site.notFound.home.uz}</Link>
      </div>
    </main>
  );
}
