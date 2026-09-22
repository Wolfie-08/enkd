"use client";
import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

const KEY = "enkd:theme";
type Theme = "dark" | "light";

// Tiny store: the html class is the source of truth; the inline script in the
// layout applies the stored choice before first paint.
const listeners = new Set<() => void>();
const subscribe = (l: () => void) => { listeners.add(l); return () => { listeners.delete(l); }; };
const get = (): Theme => (document.documentElement.classList.contains("light") ? "light" : "dark");
const getServer = (): Theme => "dark";

function set(theme: Theme) {
  const el = document.documentElement;
  el.classList.remove("dark", "light");
  el.classList.add(theme);
  try { localStorage.setItem(KEY, theme); } catch {}
  listeners.forEach((l) => l());
}

export function ThemeToggle({ label }: { label: string }) {
  const theme = useSyncExternalStore(subscribe, get, getServer);
  const next: Theme = theme === "dark" ? "light" : "dark";
  return (
    <button
      type="button"
      onClick={() => set(next)}
      aria-label={label}
      title={label}
      aria-pressed={theme === "light"}
      className="inline-flex size-8 items-center justify-center rounded-md text-muted-foreground hover:text-foreground transition-colors"
    >
      {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  );
}

// Runs before hydration so a stored light preference never flashes dark.
export const themeInitScript = `(function(){try{var t=localStorage.getItem("${KEY}");if(t==="light"){var c=document.documentElement.classList;c.remove("dark");c.add("light");}}catch(e){}})();`;
