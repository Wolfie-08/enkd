/**
 * Adapted from kokonutui Carousel Cards (MIT, @dorianbaffier) for Vite + react-router.
 */
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Badge, type BadgeProps } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import type { Project } from "@/content/projects";

const statusVariant: Record<string, NonNullable<BadgeProps["variant"]>> = {
  Live: "success",
  "In Development": "info",
  Completed: "mono",
  Planning: "warning",
};

const ProjectCard = ({ project }: { project: Project }) => (
  <Card className="group relative flex h-[320px] w-full flex-col overflow-hidden rounded-xl border-0 shadow-sm transition-shadow duration-300 hover:shadow-md">
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-xl">
      {project.image ? (
        <img
          alt={project.imageAlt ?? project.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          src={project.image}
        />
      ) : (
        <div className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${project.color} transition-transform duration-300 group-hover:scale-105`}>
          <project.icon className="h-12 w-12 text-white/90 drop-shadow" />
        </div>
      )}
      <Badge
        appearance="solid"
        className="absolute top-2 left-2 rounded-md px-1.5 py-0.5 text-xs font-medium"
        variant={statusVariant[project.status] ?? "outline"}
      >
        {project.status}
      </Badge>
    </div>

    <div className="flex flex-1 flex-col justify-between">
      <CardContent className="p-2 pt-3 pb-0">
        <h3 className="font-medium text-sm tracking-tight">{project.title}</h3>
        <p className="line-clamp-2 text-muted-foreground text-xs tracking-tight">{project.description}</p>
      </CardContent>
      <CardFooter className="mt-auto flex items-center gap-1 p-2 pt-0 text-xs">
        {project.tags.slice(0, 2).map((tag) => (
          <span key={tag} className="rounded-md bg-muted/60 px-1.5 py-0.5 text-[11px] text-muted-foreground">{tag}</span>
        ))}
        <span className="ml-auto text-muted-foreground tracking-tight">{project.version}</span>
      </CardFooter>
    </div>
  </Card>
);

export const ProjectCarousel = ({ title, items }: { title: string; items: Project[] }) => {
  const scrollContainer = React.useRef<HTMLDivElement>(null);
  const scroll = (dx: number) => scrollContainer.current?.scrollBy({ left: dx, behavior: "smooth" });

  return (
    <div className="w-full py-4">
      <div className="mb-2 flex items-center justify-between">
        <h2 className="font-medium text-lg tracking-tight md:text-xl">{title}</h2>
        <div className="flex items-center gap-1">
          <Button className="h-7 w-7 rounded-full" onClick={() => scroll(-320)} size="icon" variant="outline">
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Scroll left</span>
          </Button>
          <Button className="h-7 w-7 rounded-full" onClick={() => scroll(320)} size="icon" variant="outline">
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Scroll right</span>
          </Button>
        </div>
      </div>

      <div
        className="-mx-1 flex snap-x snap-mandatory gap-3 overflow-x-auto px-1 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        ref={scrollContainer}
      >
        {items.map((project) => (
          <div className="w-[240px] flex-none snap-start md:w-[260px]" key={project.slug}>
            <Link
              className="block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              to={`/projects/${project.slug}`}
            >
              <ProjectCard project={project} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
