"use client";
// Mounts the scrollcraft engine (public/studio/scrollcraft.js, unmodified) and drives the route rail.
import { useEffect } from "react";
import Script from "next/script";

declare global {
  interface Window { ScrollCraft?: { mount: (root: Document) => unknown }; __scMounted?: boolean; __sc?: unknown }
}

function mount() {
  if (window.__scMounted || !window.ScrollCraft) return;
  window.__scMounted = true;
  window.__sc = window.ScrollCraft.mount(document); // exposed for the scroll-craft verification harness
  // The spacer is sized from innerHeight at mount; re-measure once the window and fonts settle.
  const relayout = () => dispatchEvent(new Event("resize"));
  if (document.readyState === "complete") relayout();
  else addEventListener("load", relayout, { once: true });
  document.fonts?.ready.then(relayout);
}

export function Engine() {
  useEffect(() => {
    const onWaypoint = (e: Event) => {
      const i = (e as CustomEvent<{ index: number }>).detail.index;
      document.querySelectorAll<HTMLElement>("[data-leg]").forEach((el) => {
        el.setAttribute("aria-current", String(Number(el.dataset.leg) === i));
      });
    };
    // Any [data-go] control jumps to a fraction of the flight track.
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest<HTMLElement>("[data-go]");
      if (!el) return;
      e.preventDefault();
      const spacer = document.querySelector<HTMLElement>("[data-sc-spacer]");
      // The spacer is (total + 1) viewports tall and copy windows are fractions of `total`.
      const track = (spacer?.offsetHeight ?? innerHeight) - innerHeight;
      const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
      scrollTo({ top: Number(el.dataset.go) * track, behavior: reduce ? "auto" : "smooth" });
    };
    addEventListener("sc:waypoint", onWaypoint);
    addEventListener("click", onClick);
    mount(); // script already cached on client-side re-mounts
    return () => {
      removeEventListener("sc:waypoint", onWaypoint);
      removeEventListener("click", onClick);
    };
  }, []);

  return <Script src="/studio/scrollcraft.js" strategy="afterInteractive" onReady={mount} />;
}
