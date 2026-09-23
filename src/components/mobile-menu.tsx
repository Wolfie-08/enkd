"use client";
import { useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

// Below md the nav links collapse into a native <details> dropdown; tapping a link closes it.
export function MobileMenu({ label, links }: { label: string; links: { href: string; label: string }[] }) {
  const ref = useRef<HTMLDetailsElement>(null);
  const close = () => ref.current?.removeAttribute("open");
  return (
    <details ref={ref} className="group md:hidden">
      <summary aria-label={label} title={label} className="inline-flex size-8 items-center justify-center rounded-md text-muted-foreground hover:text-foreground">
        <Menu className="size-5 group-open:hidden" />
        <X className="size-5 hidden group-open:block" />
      </summary>
      <nav className="absolute inset-x-0 top-14 border-b border-line bg-background font-mono text-sm uppercase tracking-wider">
        <ul className="container divide-y divide-line">
          {links.map((l) => (
            <li key={l.href + l.label}>
              {/* Static files (the CV) need a plain anchor, not client-side routing. */}
              {l.href.endsWith(".pdf")
                ? <a href={l.href} onClick={close} className="block py-4 text-accent">{l.label}</a>
                : <Link href={l.href} onClick={close} className="block py-4 text-muted-foreground hover:text-foreground">{l.label}</Link>}
            </li>
          ))}
        </ul>
      </nav>
    </details>
  );
}
