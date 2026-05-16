import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { SiteFooter } from "@/components/portfolio/site-footer"
import { WorkDetailHeader } from "@/components/portfolio/work-detail-header"
import { WorkDetailView } from "@/components/portfolio/work-detail-view"
import { getWorkProjectBySlug, getWorkProjectSlugs, person } from "@/lib/portfolio-data"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return getWorkProjectSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getWorkProjectBySlug(slug)
  if (!project) {
    return { title: "Project" }
  }
  const title = `${project.name} — ${person.name}`
  return {
    title,
    description: project.summary,
    openGraph: { title, description: project.summary, type: "article" },
  }
}

export default async function WorkProjectPage({ params }: Props) {
  const { slug } = await params
  const project = getWorkProjectBySlug(slug)
  if (!project) {
    notFound()
  }

  return (
    <>
      <WorkDetailHeader />
      <main>
        <WorkDetailView project={project} />
      </main>
      <SiteFooter />
    </>
  )
}
