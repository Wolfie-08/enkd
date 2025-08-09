import { motion } from "framer-motion";
import useSEO from "@/hooks/useSEO";
import { bioLong } from "@/content/bio";

const values = [
  { title: "Clarity", text: "Make complex things understandable. Good systems feel obvious once you see them." },
  { title: "Utility", text: "Ship solutions that are genuinely helpful and sustainable in the long run." },
  { title: "Care", text: "Design with empathy. Details matter because people feel them." },
];

const skills = [
  "React", "TypeScript", "Framer Motion", "TailwindCSS", "Supabase",
  "Arduino", "CAD", "Prototyping", "Git", "Figma",
];

export default function About() {
  useSEO({
    title: "About | Diyorbek Komilov",
    description: "About Diyorbek Komilov — mechanical engineer & developer focused on practical, human-centered systems.",
    canonicalPath: "/about",
  });

  return (
    <main className="min-h-screen bg-background">
      <section className="pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient">About</h1>
            <p className="text-muted-foreground mt-3">Mechanical Engineer & Developer</p>
          </header>

          <article className="prose prose-invert max-w-none">
            <p className="text-foreground text-lg leading-relaxed">{bioLong}</p>
          </article>

          <section className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-border p-6 bg-card text-card-foreground">
              <h2 className="text-xl font-semibold mb-3">Values</h2>
              <ul className="space-y-3">
                {values.map(v => (
                  <li key={v.title}>
                    <p className="font-medium">{v.title}</p>
                    <p className="text-muted-foreground text-sm">{v.text}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-border p-6 bg-card text-card-foreground">
              <h2 className="text-xl font-semibold mb-3">Process</h2>
              <ol className="space-y-3 list-decimal list-inside text-sm text-muted-foreground">
                <li>Understand the problem and constraints.</li>
                <li>Prototype quickly and test assumptions.</li>
                <li>Refine the solution and polish details.</li>
              </ol>
            </div>
          </section>

          <section className="mt-12 rounded-xl border border-border p-6 bg-card text-card-foreground">
            <h2 className="text-xl font-semibold mb-4">Skills & Tools</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map(s => (
                <span key={s} className="px-3 py-1 text-xs rounded-md bg-muted/50 text-muted-foreground">{s}</span>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
