import Link from "next/link"

import { experiences } from "@/lib/portfolio-data"
import { cn } from "@/lib/utils"

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-20 border-b border-border/60 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">Experience</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Roles and initiatives where I owned features end to end.
        </p>
        <ol className="relative mt-14 space-y-16 before:absolute before:left-[7px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-border sm:before:left-[11px]">
          {experiences.map((job) => (
            <li key={`${job.company}-${job.period}`} className="relative pl-10 sm:pl-14">
              <span
                className="absolute left-0 top-1.5 size-4 rounded-full border-2 border-background bg-primary sm:left-1 sm:top-2 sm:size-3.5"
                aria-hidden
              />
              <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between sm:gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{job.role}</h3>
                  <p className="text-muted-foreground">
                    {job.company}
                    {job.team ? ` — ${job.team}` : null}
                  </p>
                  {job.companyLinks && job.companyLinks.length > 0 ? (
                    <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                      {job.companyLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs font-medium text-muted-foreground underline decoration-border underline-offset-2 transition-colors hover:text-foreground hover:decoration-foreground"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </p>
                  ) : null}
                </div>
                <p className="font-mono text-sm text-muted-foreground">{job.period}</p>
              </div>
              <div className="mt-8 overflow-hidden rounded-2xl border border-border/80 bg-card/25">
                {job.blocks.map((block, i) => (
                  <div
                    key={`${block.title ?? "block"}-${i}`}
                    className={cn(
                      "border-border/60 px-4 py-4 sm:px-5 sm:py-4",
                      i > 0 && "border-t",
                      block.title != null &&
                      "grid gap-3 sm:grid-cols-[minmax(0,13rem)_minmax(0,1fr)] sm:items-start sm:gap-x-8",
                    )}
                  >
                    {block.title != null ? (
                      <div className="min-w-0 sm:pt-0.5">
                        <h4 className="text-sm font-semibold tracking-tight text-foreground">{block.title}</h4>
                        {block.links && block.links.length > 0 ? (
                          <p className="mt-1.5 flex flex-col gap-1">
                            {block.links.map((link) => (
                              <Link
                                key={link.href}
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                                className="break-all text-xs font-medium text-muted-foreground underline decoration-border underline-offset-2 transition-colors hover:text-foreground hover:decoration-foreground"
                              >
                                {link.label}
                              </Link>
                            ))}
                          </p>
                        ) : block.href ? (
                          <p className="mt-1.5">
                            <Link
                              href={block.href}
                              target="_blank"
                              rel="noreferrer"
                              className="break-all text-xs font-medium text-muted-foreground underline decoration-border underline-offset-2 transition-colors hover:text-foreground hover:decoration-foreground"
                            >
                              {block.href.replace(/^https?:\/\//, "")}
                            </Link>
                          </p>
                        ) : null}
                      </div>
                    ) : null}
                    <ul
                      className={cn(
                        "space-y-2 text-sm leading-relaxed text-muted-foreground",
                      )}
                    >
                      {block.bullets.map((b, bi) => (
                        <li
                          key={`${block.title ?? "note"}-${bi}`}
                          className={cn(
                            "relative pl-4 before:absolute before:left-0 before:top-[0.55em] before:size-1.5 before:rounded-full before:bg-muted-foreground/45",
                            block.title != null && "sm:pl-0 sm:before:hidden",
                          )}
                        >
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
