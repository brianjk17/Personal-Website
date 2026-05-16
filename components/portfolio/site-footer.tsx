import Link from "next/link"

import { Button } from "@/components/ui/button"
import { person } from "@/lib/portfolio-data"

import { IconGithub, IconLinkedin, IconMail, IconWhatsapp } from "./icons"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="scroll-mt-20 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-5xl rounded-3xl border border-border/80 bg-linear-to-br from-card/80 to-muted/30 p-10 sm:p-14">
        <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">Let&apos;s build</h2>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Interested in full-stack or Web3 product work? Reach out by email, WhatsApp, or connect on LinkedIn.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg" className="rounded-2xl">
            <Link href={`mailto:${person.email}`}>
              <IconMail className="size-4" />
              Email me
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-2xl">
            <Link href={person.whatsapp} target="_blank" rel="noreferrer">
              <IconWhatsapp className="size-4" />
              WhatsApp
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-2xl">
            <Link href={person.linkedin} target="_blank" rel="noreferrer">
              <IconLinkedin className="size-4" />
              LinkedIn
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-2xl">
            <Link href={person.github} target="_blank" rel="noreferrer">
              <IconGithub className="size-4" />
              GitHub
            </Link>
          </Button>
        </div>
        <p className="mt-12 font-mono text-xs text-muted-foreground">
          © {year} {person.name}. Press <kbd className="rounded border border-border px-1 py-0.5">d</kbd> for
          theme.
        </p>
      </div>
    </footer>
  )
}
