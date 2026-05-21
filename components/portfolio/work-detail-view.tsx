import Link from "next/link"

import type { Project } from "@/lib/portfolio-data"

import { HighlightedText } from "./highlighted-text"
import { IconExternal } from "./icons"
import { ProjectImageStrip } from "./project-image-strip"

function initials(name: string) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase()
}

function projectImageSources(project: Project): string[] {
  const raw = [project.imageSrc, ...(project.gallery ?? [])].filter((src): src is string => Boolean(src))
  return [...new Set(raw)]
}

export function WorkDetailView({ project }: { project: Project }) {
  const images = projectImageSources(project)

  return (
    <article className="mx-auto max-w-3xl px-4 pb-24 pt-10 sm:px-6 sm:pt-14">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{project.context}</p>
      <h1 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{project.name}</h1>

      {images.length > 0 ? (
        <ProjectImageStrip projectName={project.name} images={images} />
      ) : (
        <div className="mt-8 overflow-hidden rounded-2xl border border-border/80 bg-muted">
          <div className="relative aspect-16/10 w-full">
            <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-[oklch(0.92_0.04_195)] via-muted to-[oklch(0.88_0.06_280)] dark:from-[oklch(0.28_0.06_195)] dark:via-card dark:to-[oklch(0.26_0.05_280)]">
              <span className="font-display text-4xl font-semibold tracking-tight text-foreground/25 sm:text-5xl">
                {initials(project.name)}
              </span>
            </div>
          </div>
        </div>
      )}

      {project.href || project.links?.length ? (
        <p className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
          {project.href ? (
            <Link
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
            >
              View live product
              <IconExternal className="size-4" />
            </Link>
          ) : null}
          {project.links?.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground"
            >
              {link.label}
              <IconExternal className="size-4" />
            </Link>
          ))}
        </p>
      ) : null}
      <ul className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((t) => (
          <li
            key={t}
            className="rounded-full border border-border/80 bg-muted/50 px-3 py-1 font-mono text-xs text-muted-foreground"
          >
            {t}
          </li>
        ))}
      </ul>
      <p className="mt-10 text-lg leading-relaxed text-muted-foreground">
        <HighlightedText text={project.detail.intro} />
      </p>
      <div className="mt-14 space-y-12">
        {project.detail.sections.map((section) => (
          <section key={section.title}>
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">{section.title}</h2>
            <ul className="mt-4 space-y-3">
              {section.bullets.map((b, i) => (
                <li
                  key={i}
                  className="relative pl-5 text-sm leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-[0.55em] before:size-1.5 before:rounded-full before:bg-muted-foreground/50"
                >
                  <HighlightedText text={b} />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <p className="mt-16 border-t border-border/80 pt-10">
        <Link href="/#work" className="text-sm font-medium text-muted-foreground hover:text-foreground">
          ← Professional experience
        </Link>
      </p>
    </article>
  )
}
