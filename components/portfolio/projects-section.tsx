import { projects } from "@/lib/portfolio-data"

import { ProjectCard } from "./project-card"

export function ProjectsSection() {
  return (
    <section id="work" className="scroll-mt-20 border-b border-border/60 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">Professional experience</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Products and platforms I&apos;ve helped ship.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
