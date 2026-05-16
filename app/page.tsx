import { AboutSection } from "@/components/portfolio/about-section"
import { EducationSection } from "@/components/portfolio/education-section"
import { ExperienceSection } from "@/components/portfolio/experience-section"
import { HackathonsSection } from "@/components/portfolio/hackathons-section"
import { HeroSection } from "@/components/portfolio/hero-section"
import { PersonalProjectsSection } from "@/components/portfolio/personal-projects-section"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { SiteFooter } from "@/components/portfolio/site-footer"
import { SiteHeader } from "@/components/portfolio/site-header"
import { SkillsSection } from "@/components/portfolio/skills-section"

export default function Page() {
  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <HackathonsSection />
        <PersonalProjectsSection />
        <EducationSection />
        <SiteFooter />
      </main>
    </>
  )
}
