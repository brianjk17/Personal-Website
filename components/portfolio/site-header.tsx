import Link from "next/link"

import { Button } from "@/components/ui/button"
import { navLinks, person } from "@/lib/portfolio-data"

import { HeaderMobileNav } from "./header-mobile-nav"
import { ThemeToggle } from "./theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="#top"
          className="font-display text-lg font-semibold tracking-tight text-foreground"
        >
          {person.name.split(" ")[0]}
          <span className="text-muted-foreground">.</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild size="sm" className="hidden rounded-2xl md:inline-flex">
            <Link href="#contact">Let&apos;s talk</Link>
          </Button>
          <HeaderMobileNav links={navLinks} />
        </div>
      </div>
    </header>
  )
}
