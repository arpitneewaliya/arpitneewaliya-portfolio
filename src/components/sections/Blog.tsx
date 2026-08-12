"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { SiMedium } from "react-icons/si";
import { PORTFOLIO_DATA } from "@/data/data";

export function Blog() {
  return (
    <section id="blog" className="py-8 border-b border-dashed border-zinc-300 dark:border-zinc-800">
      <div className="flex flex-col gap-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-2 pb-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
            My Blogs
          </h2>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {PORTFOLIO_DATA.blogs.map((post, idx) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group flex flex-col overflow-hidden rounded-xl border border-dashed border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 hover:border-zinc-400 dark:hover:border-zinc-700 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              {/* Cover Image Container */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900 border-b border-dashed border-zinc-300 dark:border-zinc-800">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Blog Content Details */}
              <div className="flex flex-col flex-1 p-4 sm:p-5 gap-2.5">
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-base sm:text-lg text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-600 dark:text-zinc-400">
                    <span>{post.date}</span>
                    {post.readTime && (
                      <>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </>
                    )}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed flex-1">
                  {post.description}
                </p>

                {/* Platform Link Button */}
                <div className="pt-2 mt-auto">
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 border border-zinc-300 dark:border-zinc-800 text-xs font-semibold text-zinc-800 dark:text-zinc-200 transition-colors"
                  >
                    <SiMedium className="size-3.5 text-zinc-900 dark:text-zinc-100" />
                    <span>{post.platform}</span>
                    <ExternalLink className="size-3 text-zinc-600 dark:text-zinc-400 ml-0.5" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
