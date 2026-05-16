import { person } from "@/lib/portfolio-data"

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 border-b border-border/60 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">About</h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          I&apos;m a full-stack engineer with 3+ years shipping production dashboards, smart contracts,
          data pipelines, risk monitoring agents, and multi-chain integrations. I care about clear
          product surfaces, reliable ops, and code that teams can extend.
        </p>
        <dl className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-border/80 bg-card/50 p-6">
            <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Focus</dt>
            <dd className="mt-2 text-foreground">Web Developments, Dapps, Smart Contracts, Web3, DeFi, NFTs, marketplaces</dd>
          </div>
          <div className="rounded-2xl border border-border/80 bg-card/50 p-6">
            <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Currently Based in</dt>
            <dd className="mt-2 text-foreground">Jakarta, Indonesia<br />Open to relocate or remote roles globally</dd>
          </div>
          <div className="rounded-2xl border border-border/80 bg-card/50 p-6 sm:col-span-2">
            <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Contact</dt>
            <dd className="mt-2">
              <a
                href={`mailto:${person.email}`}
                className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
              >
                {person.email}
              </a>
              <span className="mx-2 text-muted-foreground">·</span>
              <a
                href={`tel:${person.phone.replace(/\s/g, "")}`}
                className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
              >
                {person.phone}
              </a>
              <span className="mx-2 text-muted-foreground">·</span>
              <a
                href={person.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
              >
                WhatsApp
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
