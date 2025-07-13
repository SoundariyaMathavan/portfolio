import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { EnhancedProjectsSection } from "@/components/enhanced-projects-section"
import { EnhancedSkillsSection } from "@/components/enhanced-skills-section"
import { AboutSection } from "@/components/about-section"
import { EducationSection } from "@/components/education-section"
import { AchievementsSection } from "@/components/achievements-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <EnhancedProjectsSection />
      <EnhancedSkillsSection />
      <EducationSection />
      <AchievementsSection />
      <ContactSection />
    </div>
  )
}
