"use client";

import { useState, ComponentType } from "react";
import { motion } from "framer-motion";
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
  SiPostman
} from "react-icons/si";
import { FaAws, FaDocker, FaLinux, FaGitAlt, FaJava, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { PORTFOLIO_DATA } from "@/data/data";

const iconMap: Record<string, ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
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
  IoLogoJavascript: "#F7DF1E",
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
  FaLinux: "#FCC624",
  FaGitAlt: "#F05032",
  SiClaude: "#D97706",
  SiHuggingface: "#FFD21E",
  SiKaggle: "#20BEFF",
  SiJupyter: "#F37626",
  SiPostman: "#FF6C37",
};

export function SkillsGrid() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-8 border-b border-dashed border-zinc-300 dark:border-zinc-800">
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Skills & Technologies
        </h2>

        <div className="flex flex-wrap gap-2 pt-1">
          {PORTFOLIO_DATA.skills.map((skill, idx) => {
            const IconComponent = iconMap[skill.icon] || SiReact;
            const brandColor = brandColors[skill.icon];
            const isHovered = hoveredSkill === skill.name;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.03 }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                className="rounded-lg border border-dashed border-zinc-300 dark:border-zinc-800 bg-zinc-200/80 dark:bg-zinc-900/60 hover:bg-zinc-300 dark:hover:bg-zinc-800 transition-all cursor-default flex items-center gap-2 px-3 py-1.5 text-xs text-zinc-900 dark:text-zinc-100 select-none group font-medium"
              >
                <IconComponent
                  className={`size-4 shrink-0 transition-colors duration-200 ${
                    isHovered
                      ? brandColor
                        ? ""
                        : "text-zinc-950 dark:text-white"
                      : "text-zinc-700 dark:text-zinc-300"
                  }`}
                  style={isHovered && brandColor ? { color: brandColor } : undefined}
                />
                <span>{skill.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
