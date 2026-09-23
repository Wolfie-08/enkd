import { site } from "@/content/site";
import type { Locale } from "@/lib/i18n";
import { Reveal } from "@/components/reveal";

export function Timeline({ locale }: { locale: Locale }) {
  const x = site.experience;
  return (
    <div className="grid gap-16 md:grid-cols-[200px_1fr]">
      <p className="font-mono text-xs uppercase tracking-wider text-dim">01 / {x.work[locale]}</p>
      <ol className="space-y-12">
        {x.jobs.map((j) => (
          <Reveal key={j.org}>
            <li className="grid gap-2 md:grid-cols-[180px_1fr]">
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{j.period[locale]}</p>
              <div>
                <h3 className="text-xl font-semibold">{j.role[locale]}</h3>
                <p className="text-muted-foreground">{j.org}</p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {j.points.map((p) => (
                    <li key={p.en} className="flex gap-3"><span className="text-dim">—</span>{p[locale]}</li>
                  ))}
                </ul>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>

      <p className="font-mono text-xs uppercase tracking-wider text-dim">02 / {x.education[locale]}</p>
      <ol className="space-y-8">
        {x.edu.map((e) => (
          <Reveal key={e.org}>
            <li className="grid gap-2 md:grid-cols-[180px_1fr]">
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{e.period}</p>
              <div>
                <h3 className="text-xl font-semibold">{e.title[locale]}</h3>
                <p className="text-muted-foreground">
                  {e.url ? <a href={e.url} target="_blank" rel="noopener noreferrer" className="hover:text-ink">{e.org}</a> : e.org}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{e.note[locale]}</p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>

      <p className="font-mono text-xs uppercase tracking-wider text-dim">03 / {x.notes[locale]}</p>
      <ul className="space-y-2 text-sm text-muted-foreground">
        {x.notesList.map((n) => (
          <li key={n.en} className="flex gap-3"><span className="text-dim">—</span>{n[locale]}</li>
        ))}
      </ul>
    </div>
  );
}
