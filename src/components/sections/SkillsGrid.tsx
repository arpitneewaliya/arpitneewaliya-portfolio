"use client";

import { useState, ComponentType } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiClaude,
  SiJavascript,
  SiPython,
  SiVite,
  SiSupabase,
  SiPrisma,
  SiHuggingface,
  SiKaggle,
  SiJupyter,
  SiVercel,
  SiPostman,
} from "react-icons/si";
import {
  FaAws,
  FaDocker,
  FaLinux,
  FaGitAlt,
  FaJava,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { PORTFOLIO_DATA } from "@/data/data";

const iconMap: Record<
  string,
  ComponentType<{ className?: string; style?: React.CSSProperties }>
> = {
  SiReact: SiReact,
  RiNextjsFill: SiNextdotjs,
  SiTypescript: SiTypescript,
  IoLogoJavascript: SiJavascript,
  SiPython: SiPython,
  FaJava: FaJava,
  SiTailwindcss: SiTailwindcss,
  FaHtml5: FaHtml5,
  FaCss3Alt: FaCss3Alt,
  SiVite: SiVite,
  SiNodedotjs: SiNodedotjs,
  SiExpress: SiExpress,
  SiPostgresql: SiPostgresql,
  SiMongodb: SiMongodb,
  SiSupabase: SiSupabase,
  SiPrisma: SiPrisma,
  FaAws: FaAws,
  FaDocker: FaDocker,
  FaLinux: FaLinux,
  FaGitAlt: FaGitAlt,
  SiClaude: SiClaude,
  SiHuggingface: SiHuggingface,
  SiKaggle: SiKaggle,
  SiJupyter: SiJupyter,
  SiVercel: SiVercel,
  SiPostman: SiPostman,
};

const brandColors: Record<string, string> = {
  SiReact: "#61DAFB",
  SiTypescript: "#3178C6",
  IoLogoJavascript: "#EAB308",
  SiPython: "#3776AB",
  FaJava: "#E76F00",
  SiTailwindcss: "#06B6D4",
  FaHtml5: "#E34F26",
  FaCss3Alt: "#1572B6",
  SiVite: "#646CFF",
  SiNodedotjs: "#5FA04E",
  SiPostgresql: "#4169E1",
  SiMongodb: "#47A248",
  SiSupabase: "#3ECF8E",
  FaAws: "#FF9900",
  FaDocker: "#2496ED",
  FaLinux: "#EAB308",
  FaGitAlt: "#F05032",
  SiClaude: "#D97706",
  SiHuggingface: "#F59E0B",
  SiKaggle: "#20BEFF",
  SiJupyter: "#F37626",
  SiPostman: "#FF6C37",
};

const categories = [
  "All",
  "Languages & Core",
  "Frontend",
  "Backend",
  "AI & Data Science",
  "DevOps & Tools",
] as const;

export function SkillsGrid() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>("All");

  const filteredSkills =
    activeTab === "All"
      ? PORTFOLIO_DATA.skills
      : PORTFOLIO_DATA.skills.filter((skill) => skill.category === activeTab);

  return (
    <section id="skills" className="py-10 sm:py-12 scroll-mt-24">
      <div className="flex flex-col gap-6">
        {/* Section Header */}
        <div className="flex items-baseline justify-between gap-4">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
              02
            </span>
            <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
              Technical Stack
            </h2>
          </div>
          <span className="text-xs text-zinc-400 dark:text-zinc-500 font-mono">
            {filteredSkills.length} / TOOLS
          </span>
        </div>

        {/* Gliding Category Filter Bar */}
        <div className="flex flex-wrap items-center gap-1 p-1 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-100/70 dark:bg-zinc-900/50 w-fit">
          {categories.map((cat) => {
            const isActive = activeTab === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                type="button"
                className={`relative px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer select-none ${
                  isActive
                    ? "text-zinc-950 dark:text-zinc-50"
                    : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="skillCategoryPill"
                    className="absolute inset-0 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200/80 dark:border-zinc-700/80 shadow-2xs -z-10"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 32,
                    }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Morphing Skill Chips */}
        <motion.div layout className="flex flex-wrap gap-2 pt-1 min-h-[44px]">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const IconComponent = iconMap[skill.icon] || SiReact;
              const brandColor = brandColors[skill.icon];
              const isHovered = hoveredSkill === skill.name;

              return (
                <motion.div
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{
                    opacity: { duration: 0.16 },
                    scale: { duration: 0.16 },
                    layout: { type: "spring", stiffness: 420, damping: 34 },
                  }}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className="rounded-lg border border-zinc-200/90 dark:border-zinc-800/90 bg-white dark:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800/70 transition-colors cursor-default flex items-center gap-2 px-3 py-1.5 text-xs text-zinc-800 dark:text-zinc-200 select-none font-medium"
                >
                  <IconComponent
                    className={`size-3.5 shrink-0 transition-colors duration-150 ${
                      isHovered
                        ? brandColor
                          ? ""
                          : "text-zinc-950 dark:text-white"
                        : "text-zinc-500 dark:text-zinc-400"
                    }`}
                    style={
                      isHovered && brandColor ? { color: brandColor } : undefined
                    }
                  />
                  <span>{skill.name}</span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
