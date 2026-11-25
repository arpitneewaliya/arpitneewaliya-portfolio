"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SiMedium } from "react-icons/si";
import { PORTFOLIO_DATA } from "@/data/data";

export function Blog() {
  return (
    <section id="blog" className="py-10 sm:py-12 scroll-mt-24">
      <div className="flex flex-col gap-6">
        {/* Unified Architectural Section Header */}
        <div className="flex items-baseline justify-between gap-4">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
              04
            </span>
            <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
              Writing & Notes
            </h2>
          </div>
          <span className="text-xs text-zinc-400 dark:text-zinc-500 font-mono">
            0{PORTFOLIO_DATA.blogs.length} / ARTICLES
          </span>
        </div>

        {/* Editorial Article Rows */}
        <div className="flex flex-col divide-y divide-zinc-200/80 dark:divide-zinc-800/80 border-y border-zinc-200/80 dark:border-zinc-800/80">
          {PORTFOLIO_DATA.blogs.map((post, idx) => (
            <motion.a
              key={post.title}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.3,
                delay: idx * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group py-5 px-3 -mx-3 rounded-xl hover:bg-zinc-100/70 dark:hover:bg-zinc-900/50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              {/* Left & Center: Metadata, Title & Excerpt */}
              <div className="flex flex-col gap-1.5 min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                  <span>{post.date}</span>
                  {post.readTime && (
                    <>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </>
                  )}
                  <span>·</span>
                  <span className="inline-flex items-center gap-1 text-zinc-600 dark:text-zinc-300">
                    <SiMedium className="size-3" />
                    <span>{post.platform}</span>
                  </span>
                </div>

                <h3 className="font-semibold text-sm sm:text-base text-zinc-950 dark:text-zinc-50 group-hover:text-zinc-700 dark:group-hover:text-white transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs sm:text-[13px] text-zinc-600 dark:text-zinc-400 line-clamp-2 leading-relaxed">
                  {post.description}
                </p>
              </div>

              {/* Right: Compact Framed Thumbnail & Animated Arrow */}
              <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
                <div className="relative w-28 sm:w-32 aspect-16/10 rounded-lg overflow-hidden border border-zinc-200/90 dark:border-zinc-800/90 bg-zinc-100 dark:bg-zinc-900">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="128px"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>

                <div className="size-8 rounded-full border border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-900 flex items-center justify-center text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-950 dark:group-hover:text-zinc-50 group-hover:border-zinc-300 dark:group-hover:border-zinc-700 transition-colors">
                  <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
