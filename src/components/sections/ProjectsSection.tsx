"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { PORTFOLIO_DATA } from "@/data/data";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-10 sm:py-12 scroll-mt-24">
      <div className="flex flex-col gap-6">
        {/* Architectural Section Header */}
        <div className="flex items-baseline justify-between gap-4">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
              01
            </span>
            <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
              Selected Projects
            </h2>
          </div>
          <span className="text-xs text-zinc-400 dark:text-zinc-500 font-mono">
            0{PORTFOLIO_DATA.projects.length} / WORKS
          </span>
        </div>

        {/* Asymmetric 1 + 2 Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {PORTFOLIO_DATA.projects.map((project, idx) => {
            const isSpotlight = idx === 0;

            return (
              <motion.article
                key={project.title}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.35,
                  delay: idx * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`group relative flex overflow-hidden rounded-xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white dark:bg-zinc-900/40 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors ${
                  isSpotlight
                    ? "sm:col-span-2 flex-col md:grid md:grid-cols-12"
                    : "flex-col h-full"
                }`}
              >
                {/* Media Preview Box */}
                <div
                  className={`relative overflow-hidden bg-zinc-100 dark:bg-zinc-900 ${
                    isSpotlight
                      ? "aspect-16/10 md:aspect-auto md:col-span-7 md:min-h-[260px] border-b md:border-b-0 md:border-r border-zinc-200/80 dark:border-zinc-800/80"
                      : "aspect-16/10 w-full border-b border-zinc-200/80 dark:border-zinc-800/80"
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes={
                      isSpotlight
                        ? "(max-width: 768px) 100vw, 55vw"
                        : "(max-width: 640px) 100vw, 45vw"
                    }
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />

                  {/* Subtle Top Badge if Metrics or Spotlight */}
                  {(project.metrics || isSpotlight) && (
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-zinc-950/75 text-zinc-100 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-wide">
                      {project.metrics ?? "Featured Build"}
                    </div>
                  )}
                </div>

                {/* Content Details */}
                <div
                  className={`flex flex-col flex-1 p-5 justify-between gap-4 ${
                    isSpotlight ? "md:col-span-5 md:p-6" : ""
                  }`}
                >
                  <div className="flex flex-col gap-2.5">
                    {/* Title + Quick Action Links */}
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-base sm:text-lg tracking-tight text-zinc-950 dark:text-zinc-50">
                            {project.title}
                          </h3>
                          {project.isLive && (
                            <span
                              title="Live Deployment"
                              className="inline-block size-1.5 rounded-full bg-emerald-500"
                            />
                          )}
                        </div>
                        {project.subtitle && (
                          <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono mt-0.5">
                            {project.subtitle}
                          </p>
                        )}
                      </div>

                      {/* Sleek Icon Actions */}
                      <div className="flex items-center gap-1.5 shrink-0">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} source code on GitHub`}
                            title="Source Code"
                            className="inline-flex items-center justify-center size-7 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
                          >
                            <FaGithub className="size-3.5" />
                          </a>
                        )}
                        {project.liveUrl && project.liveUrl !== "#" && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visit ${project.title} live site`}
                            title="Live Preview"
                            className="inline-flex items-center gap-1 px-2.5 h-7 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-white text-[11px] font-medium transition-colors"
                          >
                            <span>Live</span>
                            <ArrowUpRight className="size-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="text-xs sm:text-[13.5px] text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-zinc-100 dark:border-zinc-800/70">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md border border-zinc-200/80 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/80 text-[10px] font-mono text-zinc-600 dark:text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
