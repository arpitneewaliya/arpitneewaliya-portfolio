import { Navbar } from "@/components/Navbar";
import { HeaderHero } from "@/components/sections/HeaderHero";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsGrid } from "@/components/sections/SkillsGrid";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { Contact } from "@/components/sections/Contact";
import { PORTFOLIO_DATA } from "@/data/data";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground transition-colors duration-300">
      <Navbar />

      {/* Main Single Column Layout Wrapper */}
      <main className="mx-auto w-full max-w-4xl px-4 sm:px-6 py-6 border-x border-dashed border-zinc-300 dark:border-zinc-800/80 min-h-[calc(100vh-3.5rem)] flex flex-col">
        <div className="border border-dashed border-zinc-300 dark:border-zinc-800/80 rounded-2xl p-4 sm:p-8 bg-card/60 backdrop-blur-xs shadow-xl flex flex-col gap-2">
          
          {/* Header & Bio Section */}
          <HeaderHero />

          {/* Projects Section */}
          <ProjectsSection />

          {/* Skills Grid */}
          <SkillsGrid />

          {/* Work Experience Timeline */}
          <ExperienceTimeline />

          {/* Contact Form & Information */}
          <Contact />

        </div>

        {/* Footer */}
        <footer className="py-8 text-center text-xs text-muted-foreground font-mono tracking-wider uppercase border-t border-dashed border-zinc-300 dark:border-zinc-800/80 mt-8">
          © {new Date().getFullYear()} {PORTFOLIO_DATA.name}. Built with Next.js & Tailwind CSS.
        </footer>
      </main>
    </div>
  );
}
