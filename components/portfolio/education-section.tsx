import { education } from "@/lib/portfolio-data"

export function EducationSection() {
  return (
    <section id="education" className="scroll-mt-20 border-b border-border/60 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">Education</h2>
        <div className="mt-8 rounded-2xl border border-border/80 bg-card/40 p-8">
          <h3 className="text-lg font-semibold text-foreground">{education.degree}</h3>
          <p className="mt-1 text-muted-foreground">
            {education.school}, {education.location}
          </p>
          <p className="mt-4 font-mono text-sm text-muted-foreground">{education.period}</p>
          <p className="mt-2 text-sm text-muted-foreground">{education.detail}</p>
        </div>
      </div>
    </section>
  )
}
