import Image from "next/image"
import Link from "next/link"

import type { Project } from "@/lib/portfolio-data"

import { IconExternal } from "./icons"

function initials(name: string) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase()
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border/80 bg-card/40 transition-shadow hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30">
      <Link
        href={`/work/${project.slug}`}
        className="flex flex-1 flex-col outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <div className="relative aspect-16/10 w-full overflow-hidden bg-muted">
          {project.imageSrc ? (
            <Image
              src={encodeURI(project.imageSrc)}
              alt={`${project.name} screenshot`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-[oklch(0.92_0.04_195)] via-muted to-[oklch(0.88_0.06_280)] dark:from-[oklch(0.28_0.06_195)] dark:via-card dark:to-[oklch(0.26_0.05_280)]">
              <span className="font-display text-3xl font-semibold tracking-tight text-foreground/25">
                {initials(project.name)}
              </span>
            </div>
          )}
        </div>
        <div className="flex flex-1 flex-col gap-4 p-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">{project.name}</h3>
          </div>
          <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
          <ul className="flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <li
                key={t}
                className="rounded-md bg-muted/80 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
              >
                {t}
              </li>
            ))}
          </ul>
          <span className="text-sm font-medium text-foreground underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-foreground">
            View project details →
          </span>
        </div>
      </Link>
      {project.href || project.links?.length ? (
        <div className="space-y-2 border-t border-border/60 bg-muted/20 px-6 py-3">
          {project.href ? (
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs text-muted-foreground">Live product</span>
              <Link
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:underline"
              >
                Open
                <IconExternal className="size-3.5" />
              </Link>
            </div>
          ) : null}
          {project.links?.length ? (
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              {project.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:underline"
                >
                  {link.label}
                  <IconExternal className="size-3" />
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
    </article>
  )
}
