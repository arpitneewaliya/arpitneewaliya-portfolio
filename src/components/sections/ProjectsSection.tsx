"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Globe } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { PORTFOLIO_DATA } from "@/data/data";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-8 border-b border-dashed border-zinc-300 dark:border-zinc-800">
      <div className="flex flex-col gap-6">
        
        {/* Section Title */}
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
            <span>Featured Projects</span>
          </h2>
          <span className="text-xs text-zinc-600 dark:text-zinc-400 font-mono font-medium">
            {PORTFOLIO_DATA.projects.length} Works
          </span>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {PORTFOLIO_DATA.projects.map((project, idx) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group flex flex-col h-full overflow-hidden rounded-xl border border-dashed border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 hover:border-zinc-400 dark:hover:border-zinc-700 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              {/* Media Preview Box */}
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900 border-b border-dashed border-zinc-300 dark:border-zinc-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Status Indicator */}
                {project.isLive && (
                  <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 px-2 py-1 rounded-md bg-white/90 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-300 dark:border-zinc-800 text-[10px] text-emerald-700 dark:text-emerald-400 font-bold font-mono">
                    <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Live</span>
                  </div>
                )}
              </div>

              {/* Content Details */}
              <div className="flex flex-col flex-1 p-4 gap-3">
                <div>
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-bold text-base text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  {project.subtitle && (
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 font-medium mt-0.5">{project.subtitle}</p>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md border border-zinc-300 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 text-[10px] font-mono text-zinc-800 dark:text-zinc-300 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Card Action Links */}
                <div className="flex items-center gap-2 pt-2 mt-auto border-t border-dashed border-zinc-300 dark:border-zinc-800/80">
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-2.5 py-1.5 rounded-md bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors border border-zinc-800 dark:border-zinc-200"
                    >
                      <Globe className="size-3 text-zinc-300 dark:text-zinc-700" />
                      <span>Live Demo</span>
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1.5 rounded-md bg-zinc-200/80 dark:bg-zinc-900 hover:bg-zinc-300 dark:hover:bg-zinc-800 text-xs font-semibold text-zinc-900 dark:text-zinc-100 flex items-center justify-center gap-1.5 transition-colors border border-zinc-300 dark:border-zinc-800"
                    >
                      <FaGithub className="size-3 text-zinc-700 dark:text-zinc-300" />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
