import Link from "next/link"

import { Button } from "@/components/ui/button"
import { navLinks, person } from "@/lib/portfolio-data"

import { HeaderMobileNav } from "./header-mobile-nav"
import { ThemeToggle } from "./theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center gap-3 px-4 sm:px-6 lg:gap-4">
        <Link
          href="#top"
          className="shrink-0 font-display text-lg font-semibold tracking-tight text-foreground"
        >
          {person.name.split(" ")[0]}
          <span className="text-muted-foreground">.</span>
        </Link>
        <nav
          className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] lg:flex [&::-webkit-scrollbar]:hidden"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="shrink-0 whitespace-nowrap rounded-full px-2.5 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground xl:px-3 xl:text-sm"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex shrink-0 items-center gap-2 lg:ml-0">
          <ThemeToggle />
          <Button asChild size="sm" className="hidden rounded-2xl lg:inline-flex">
            <Link href="#contact">Let&apos;s talk</Link>
          </Button>
          <HeaderMobileNav links={navLinks} />
        </div>
      </div>
    </header>
  )
}
