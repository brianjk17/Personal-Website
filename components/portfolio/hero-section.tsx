import Link from "next/link"

import { Button } from "@/components/ui/button"
import { person } from "@/lib/portfolio-data"

import { IconGithub, IconLinkedin } from "./icons"

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border/60 px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24"
    >
      <div
        className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-[oklch(0.72_0.14_195/0.12)] blur-3xl dark:bg-[oklch(0.55_0.12_195/0.18)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-[oklch(0.75_0.08_280/0.1)] blur-3xl dark:bg-[oklch(0.45_0.1_280/0.15)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-5xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {person.title}
        </p>
        <h1 className="font-display mt-4 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl sm:leading-[1.08]">
          {person.name}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          {person.tagline}
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Button asChild size="lg" className="rounded-2xl">
            <Link href="#work">Professional experience</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-2xl">
            <Link href={person.github} target="_blank" rel="noreferrer">
              <IconGithub className="size-4" />
              GitHub
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-2xl">
            <Link href={person.linkedin} target="_blank" rel="noreferrer">
              <IconLinkedin className="size-4" />
              LinkedIn
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
