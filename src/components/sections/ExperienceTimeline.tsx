"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/data";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-10 sm:py-12 scroll-mt-24">
      <div className="flex flex-col gap-6">
        {/* Section Header */}
        <div className="flex items-baseline justify-between gap-4">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
              03
            </span>
            <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
              Work Experience
            </h2>
          </div>
          <span className="text-xs text-zinc-400 dark:text-zinc-500 font-mono">
            0{PORTFOLIO_DATA.experiences.length} / ROLES
          </span>
        </div>

        {/* Connected Vertical Architectural Timeline */}
        <div className="relative pl-6 sm:pl-7 before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-px before:bg-zinc-200 dark:before:bg-zinc-800 flex flex-col gap-8">
          {PORTFOLIO_DATA.experiences.map((exp, idx) => {
            const isCurrent = exp.period.toLowerCase().includes("present");

            return (
              <motion.div
                key={exp.role + exp.company}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.35,
                  delay: idx * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative flex flex-col gap-2.5 group"
              >
                {/* Timeline Node Marker */}
                <span
                  aria-hidden="true"
                  className={`absolute -left-6 sm:-left-7 top-1.5 flex size-3.5 items-center justify-center rounded-full border bg-background transition-colors ${
                    isCurrent
                      ? "border-zinc-900 dark:border-zinc-100"
                      : "border-zinc-300 dark:border-zinc-700 group-hover:border-zinc-500 dark:group-hover:border-zinc-500"
                  }`}
                >
                  <span
                    className={`size-1.5 rounded-full ${
                      isCurrent
                        ? "bg-emerald-500"
                        : "bg-zinc-400 dark:bg-zinc-600"
                    }`}
                  />
                </span>

                {/* Header Row: Role, Company & Period */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                    <h3 className="font-semibold text-base text-zinc-950 dark:text-zinc-50">
                      {exp.role}
                    </h3>
                    <span className="text-zinc-400 dark:text-zinc-600 font-mono text-xs">
                      /
                    </span>
                    <span className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
                      {exp.company}
                    </span>
                  </div>

                  <span className="text-xs text-zinc-500 dark:text-zinc-400 font-mono tabular-nums shrink-0">
                    {exp.period}
                  </span>
                </div>

                {/* Role Description */}
                <p className="text-xs sm:text-[13.5px] text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-2xl">
                  {exp.description}
                </p>

                {/* Tech Tags */}
                {exp.tags && exp.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md border border-zinc-200/80 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/70 text-[10px] font-mono text-zinc-600 dark:text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
