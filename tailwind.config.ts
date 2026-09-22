import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: "1.25rem", screens: { "2xl": "1200px" } },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        surface: "hsl(var(--surface))",
        foreground: "hsl(var(--foreground))",
        muted: { DEFAULT: "hsl(var(--surface))", foreground: "hsl(var(--muted))" },
        dim: "hsl(var(--dim))",
        line: "hsl(var(--line))",
        accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--background))" },
        primary: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--background))" },
        secondary: { DEFAULT: "hsl(var(--surface))", foreground: "hsl(var(--foreground))" },
        destructive: { DEFAULT: "hsl(0 72% 51%)", foreground: "hsl(0 0% 98%)" },
        card: { DEFAULT: "hsl(var(--surface))", foreground: "hsl(var(--foreground))" },
        popover: { DEFAULT: "hsl(var(--surface))", foreground: "hsl(var(--foreground))" },
        border: "hsl(var(--line))",
        input: "hsl(var(--line))",
        ring: "hsl(var(--accent))",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular"],
      },
      borderRadius: { lg: "var(--radius)", md: "calc(var(--radius) - 2px)", sm: "calc(var(--radius) - 4px)" },
      letterSpacing: { tightest: "-0.03em" },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
