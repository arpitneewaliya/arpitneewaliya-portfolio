"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/data";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-8 border-b border-dashed border-zinc-300 dark:border-zinc-800">
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
          <span>Work Experience</span>
        </h2>

        <div className="flex flex-col divide-y divide-dashed divide-zinc-300 dark:divide-zinc-800/80">
          {PORTFOLIO_DATA.experiences.map((exp, idx) => (
            <motion.div
              key={exp.role + exp.company}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="py-5 first:pt-0 last:pb-0 flex flex-col gap-2 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div className="flex items-baseline gap-2">
                  <h3 className="font-bold text-base text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                    {exp.role}
                  </h3>
                  <span className="text-zinc-500 italic text-sm">@</span>
                  <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                    {exp.company}
                  </span>
                </div>

                <span className="text-xs text-zinc-600 dark:text-zinc-400 font-mono tabular-nums shrink-0 font-medium">
                  {exp.period}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-zinc-800 dark:text-zinc-200 leading-relaxed max-w-3xl">
                {exp.description}
              </p>

              {exp.tags && exp.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md border border-zinc-300 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/60 text-[10px] font-mono text-zinc-800 dark:text-zinc-300 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
