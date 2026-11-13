import { Navbar } from "@/components/Navbar";
import { HeaderHero } from "@/components/sections/HeaderHero";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsGrid } from "@/components/sections/SkillsGrid";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { Blog } from "@/components/sections/Blog";
import { FooterCTA } from "@/components/sections/FooterCTA";
import { PORTFOLIO_DATA } from "@/data/data";

function ArchitecturalDivider() {
  return (
    <div
      aria-hidden="true"
      className="relative -mx-5 sm:-mx-8 border-t border-zinc-200/80 dark:border-zinc-800/80"
    >
      {/* Left rail intersection crosshair */}
      <span className="pointer-events-none select-none absolute -left-[4.5px] -top-[7.5px] font-mono text-[11px] leading-none text-zinc-400 dark:text-zinc-600">
        +
      </span>
      {/* Right rail intersection crosshair */}
      <span className="pointer-events-none select-none absolute -right-[4.5px] -top-[7.5px] font-mono text-[11px] leading-none text-zinc-400 dark:text-zinc-600">
        +
      </span>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen w-full text-foreground">
      <Navbar />

      {/* Main Architectural Column with 1px Solid Vertical Rails */}
      <main className="mx-auto w-full max-w-3xl px-5 sm:px-8 border-x border-zinc-200/80 dark:border-zinc-800/80 min-h-[calc(100vh-3.5rem)] flex flex-col relative z-10">
        {/* Header & Bio Section */}
        <HeaderHero />

        <ArchitecturalDivider />

        {/* Featured Projects (1 + 2 Bento) */}
        <ProjectsSection />

        <ArchitecturalDivider />

        {/* Technical Stack */}
        <SkillsGrid />

        <ArchitecturalDivider />

        {/* Work Experience Timeline */}
        <ExperienceTimeline />

        <ArchitecturalDivider />

        {/* Writing & Notes */}
        <Blog />

        <ArchitecturalDivider />

        {/* Contact CTA */}
        <FooterCTA />

        <ArchitecturalDivider />

        {/* Footer */}
        <footer className="py-7 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-zinc-400 dark:text-zinc-500 font-mono">
          <span>
            © {new Date().getFullYear()} {PORTFOLIO_DATA.name}
          </span>
          <span>Built with Next.js</span>
        </footer>
      </main>
    </div>
  );
}
