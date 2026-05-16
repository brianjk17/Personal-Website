import Link from "next/link"

import { hackathons } from "@/lib/portfolio-data"

import { IconExternal } from "./icons"

export function HackathonsSection() {
  return (
    <section id="hackathons" className="scroll-mt-20 border-b border-border/60 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">Hackathons</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          ETHGlobal builds and bounties
        </p>
        <ul className="mt-12 divide-y divide-border/80 rounded-2xl border border-border/80 bg-card/30">
          {hackathons.map((h) => (
            <li
              key={h.id}
              className="flex flex-col gap-2 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:py-4"
            >
              <div className="min-w-0">
                <p className="font-medium text-foreground">{h.name}</p>
                <p className="text-sm text-muted-foreground">
                  {h.event} — {h.date}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{h.detail}</p>
              </div>
              <Link
                href={h.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-full border border-border/80 px-3 py-1.5 text-sm text-foreground transition-colors hover:bg-muted sm:self-center"
              >
                Showcase
                <IconExternal className="size-3.5" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
