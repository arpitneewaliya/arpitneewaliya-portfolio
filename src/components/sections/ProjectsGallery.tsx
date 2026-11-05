"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/data";

export function ProjectsGallery() {
  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 border-t border-white/5 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">My Projects</h2>
        </motion.div>

        <div className="space-y-16 sm:space-y-32">
          {PORTFOLIO_DATA.projects.map((project, index) => (
            <div key={index} className="grid md:grid-cols-12 gap-6 sm:gap-8 items-center group">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`md:col-span-7 ${index % 2 !== 0 ? 'md:order-2' : ''}`}
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-zinc-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: index % 2 !== 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`md:col-span-5 ${index % 2 !== 0 ? 'md:order-1' : ''}`}
              >
                <div className="space-y-4 sm:space-y-6 md:px-8">
                  <div className="flex gap-2 flex-wrap mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] tracking-widest px-2 py-1 border border-white/20 rounded-full text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold">{project.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-base sm:text-lg">{project.description}</p>
                  
                  <div className="pt-4 flex items-center gap-6">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-gray-200 transition-colors"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm font-medium hover:text-gray-300 transition-colors"
                      >
                        Source Code <ArrowUpRight className="ml-1 w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
