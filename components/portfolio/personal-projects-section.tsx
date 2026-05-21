import Link from "next/link"

import { personalProjects } from "@/lib/portfolio-data"

import { HighlightedText } from "./highlighted-text"
import { IconExternal } from "./icons"

export function PersonalProjectsSection() {
  return (
    <section id="personal-projects" className="scroll-mt-20 border-b border-border/60 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">Personal projects</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Solo experiments on Solana and the browser — shipping small tools and trading-adjacent UX outside of hackathon
          weekends.
        </p>
        <ul className="mt-12 divide-y divide-border/80 rounded-2xl border border-border/80 bg-card/30">
          {personalProjects.map((p) => (
            <li
              key={p.id}
              className="flex flex-col gap-3 px-5 py-5 sm:flex-row sm:items-start sm:justify-between sm:gap-8 sm:py-5"
            >
              <div className="min-w-0 flex-1">
                <p className="font-medium text-foreground">{p.name}</p>
                <p className="text-sm text-muted-foreground">{p.kind}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  <HighlightedText text={p.detail} />
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <li
                      key={t}
                      className="rounded-md bg-muted/80 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              {p.href ? (
                <Link
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-full border border-border/80 px-3 py-1.5 text-sm text-foreground transition-colors hover:bg-muted sm:self-center"
                >
                  Link
                  <IconExternal className="size-3.5" />
                </Link>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
