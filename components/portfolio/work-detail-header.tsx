import Link from "next/link"

import { person } from "@/lib/portfolio-data"

import { ThemeToggle } from "./theme-toggle"

export function WorkDetailHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/#work"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          ← <span className="sr-only">Back to </span>Professional experience
        </Link>
        <Link href="/" className="font-display text-lg font-semibold tracking-tight text-foreground">
          {person.name.split(" ")[0]}
          <span className="text-muted-foreground">.</span>
        </Link>
        <ThemeToggle />
      </div>
    </header>
  )
}
