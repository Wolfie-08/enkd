import type { Config } from "tailwindcss";

const c = (name: string) => `hsl(var(--${name}) / <alpha-value>)`;

export default {
  darkMode: "class",
  // hover: styles only on devices that can hover, so a tapped card doesn't stay amber on phones.
  future: { hoverOnlyWhenSupported: true },
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: "1.25rem", screens: { "2xl": "1200px" } },
    extend: {
      // Tokens are HSL triples in globals.css; <alpha-value> lets bg-card/30 etc. work.
      colors: {
        background: c("background"),
        surface: c("surface"),
        foreground: c("foreground"),
        muted: { DEFAULT: c("surface"), foreground: c("muted") },
        dim: c("dim"),
        line: c("line"),
        ink: c("ink"),
        accent: { DEFAULT: c("accent"), foreground: c("on-accent") },
        primary: { DEFAULT: c("primary"), foreground: c("on-primary") },
        secondary: { DEFAULT: c("surface"), foreground: c("foreground") },
        destructive: { DEFAULT: "hsl(0 72% 45% / <alpha-value>)", foreground: "hsl(0 0% 98% / <alpha-value>)" },
        card: { DEFAULT: c("card"), foreground: c("foreground") },
        popover: { DEFAULT: c("card"), foreground: c("foreground") },
        border: c("line"),
        input: c("line"),
        ring: c("accent"),
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular"],
      },
      borderRadius: { lg: "var(--radius)", md: "calc(var(--radius) - 2px)", sm: "calc(var(--radius) - 4px)" },
      letterSpacing: { tightest: "-0.03em" },
    },
  },
  plugins: [],
} satisfies Config;
