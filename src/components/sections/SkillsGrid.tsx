"use client";

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
  SiJavascript 
} from "react-icons/si";
import { FaAws, FaDocker, FaLinux, FaGitAlt } from "react-icons/fa";
import { PORTFOLIO_DATA } from "@/data/data";

const iconMap: Record<string, any> = {
  SiReact: SiReact,
  RiNextjsFill: SiNextdotjs,
  SiTypescript: SiTypescript,
  IoLogoJavascript: SiJavascript,
  SiTailwindcss: SiTailwindcss,
  SiNodedotjs: SiNodedotjs,
  SiExpress: SiExpress,
  SiPostgresql: SiPostgresql,
  SiMongodb: SiMongodb,
  FaAws: FaAws,
  FaDocker: FaDocker,
  FaLinux: FaLinux,
  FaGitAlt: FaGitAlt,
  SiClaude: SiClaude,
};

export function SkillsGrid() {
  return (
    <section id="skills" className="py-8 border-b border-dashed border-zinc-800">
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold tracking-tight text-white">
          Skills & Technologies
        </h2>

        <div className="flex flex-wrap gap-2 pt-1">
          {PORTFOLIO_DATA.skills.map((skill, idx) => {
            const IconComponent = iconMap[skill.icon] || SiReact;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.03 }}
                className="rounded-lg border border-dashed border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800 hover:border-zinc-700 transition-all cursor-default flex items-center gap-2 px-3 py-1.5 text-xs text-zinc-300 select-none group"
              >
                <IconComponent className="size-4 shrink-0 text-zinc-400 group-hover:text-white transition-colors" />
                <span className="font-medium">{skill.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
