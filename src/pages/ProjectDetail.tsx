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

        <section className="rounded-xl border border-border p-6 bg-card text-card-foreground">
          <h2 className="text-xl font-semibold mb-3">Overview</h2>
          <p className="text-muted-foreground">This is a compact case study template. You can expand it with problem statements, approach, iterations, technical details, and outcomes.</p>
        </section>
      </article>
    </main>
  );
}
