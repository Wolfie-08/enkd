import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { ExternalLink, Github, Play } from "lucide-react";
import useSEO from "@/hooks/useSEO";
import { projects } from "@/content/projects";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = useMemo(() => projects.find(p => p.slug === slug), [slug]);

  useSEO({
    title: project ? `${project.title} | Case Study` : "Project | Case Study",
    description: project ? project.description : "Project case study.",
    canonicalPath: project ? `/projects/${project.slug}` : undefined,
  });

  if (!project) {
    return (
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
          <h1 className="text-3xl font-bold mb-2">Project not found</h1>
          <p className="text-muted-foreground mb-6">The project you’re looking for doesn’t exist.</p>
          <Link to="/" className="text-primary underline-offset-4 hover:underline">Back to home</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <header className="mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient">{project.title}</h1>
          <p className="text-muted-foreground mt-3">{project.version} · {project.status}</p>
        </header>

        <p className="text-foreground text-lg leading-relaxed mb-6">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map(tag => (
            <span key={tag} className="px-3 py-1 text-xs rounded-md bg-muted/50 text-muted-foreground">{tag}</span>
          ))}
        </div>

        <div className="flex gap-2 mb-10">
          {project.links.github && (
            <a href={project.links.github} className="flex items-center space-x-1 px-3 py-2 text-sm rounded-lg bg-muted/50 hover:bg-muted transition-colors"><Github className="w-4 h-4" /><span>Code</span></a>
          )}
          {project.links.live && (
            <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 px-3 py-2 text-sm rounded-lg bg-primary/20 text-primary hover:bg-primary/30 transition-colors"><ExternalLink className="w-4 h-4" /><span>Live</span></a>
          )}
          {project.links.demo && (
            <a href={project.links.demo} className="flex items-center space-x-1 px-3 py-2 text-sm rounded-lg bg-secondary/20 text-secondary hover:bg-secondary/30 transition-colors"><Play className="w-4 h-4" /><span>Demo</span></a>
          )}
        </div>

        {project.caseStudy ? (
          <div className="space-y-6">
            <section className="rounded-xl border border-border p-6 bg-card text-card-foreground">
              <h2 className="text-xl font-semibold mb-3">Overview</h2>
              <p className="text-muted-foreground">{project.description}</p>
            </section>

            <section className="rounded-xl border border-border p-6 bg-card text-card-foreground">
              <h2 className="text-xl font-semibold mb-3">Problem Statement</h2>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                {project.caseStudy.problem.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="rounded-xl border border-border p-6 bg-card text-card-foreground">
              <h2 className="text-xl font-semibold mb-3">Approach</h2>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                {project.caseStudy.approach.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="rounded-xl border border-border p-6 bg-card text-card-foreground">
              <h2 className="text-xl font-semibold mb-3">Iterations</h2>
              <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
                {project.caseStudy.iterations.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ol>
            </section>

            <section className="rounded-xl border border-border p-6 bg-card text-card-foreground">
              <h2 className="text-xl font-semibold mb-3">Technical Details</h2>
              <div className="mb-3">
                <h3 className="font-medium mb-2">Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.caseStudy.technical.stack.map((t) => (
                    <span key={t} className="px-2 py-1 text-xs rounded-md bg-muted/50 text-muted-foreground">{t}</span>
                  ))}
                </div>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                {project.caseStudy.technical.details.map((d, idx) => (
                  <li key={idx}>{d}</li>
                ))}
              </ul>
            </section>

            <section className="rounded-xl border border-border p-6 bg-card text-card-foreground">
              <h2 className="text-xl font-semibold mb-3">Outcomes</h2>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                {project.caseStudy.outcomes.results.map((r, idx) => (
                  <li key={idx}>{r}</li>
                ))}
              </ul>
              {project.caseStudy.outcomes.metrics && (
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.caseStudy.outcomes.metrics.map((m) => (
                    <div key={m.label} className="rounded-md border border-border p-3">
                      <div className="text-sm text-muted-foreground">{m.label}</div>
                      <div className="font-semibold">{m.value}</div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          </div>
        ) : (
          <section className="rounded-xl border border-border p-6 bg-card text-card-foreground">
            <h2 className="text-xl font-semibold mb-3">Overview</h2>
            <p className="text-muted-foreground">This is a compact case study template. You can expand it with problem statements, approach, iterations, technical details, and outcomes.</p>
          </section>
        )}
      </article>
    </main>
  );
}
