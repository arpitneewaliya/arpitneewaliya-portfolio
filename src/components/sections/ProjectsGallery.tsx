"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Cerebral Earth",
    description: "A mapified news platform where you can visualize all the major events live on a world map.",
    tags: ["Web Application", "React", "API", "2026"],
    image: "/images/cerebral_earth.png",
    link: "#",
  },
  {
    title: "Monolith Editorial",
    description: "A digital publication platform that celebrates architectural minimalism and clean typography.",
    tags: ["WEB DESIGN", "DEVELOPMENT", "2023"],
    image: "/images/project_monolith.png",
    link: "#",
  },
  {
    title: "Signal Core",
    description: "Real-time data streaming engine optimized for high-concurrency IoT networks.",
    tags: ["NODE.JS", "POSTGRESQL", "PERFORMANCE"],
    image: "/images/project_signal.png",
    link: "#",
  },
];

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
          {projects.map((project, index) => (
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
                  
                  <div className="pt-4 flex items-center space-x-6">
                    <Link href={project.link}>
                      <Button className="rounded-full bg-white text-black hover:bg-gray-200">
                        Live Demo
                      </Button>
                    </Link>
                    <Link href={project.link} className="flex items-center text-sm font-medium hover:text-gray-300 transition-colors">
                      Source Code <ArrowUpRight className="ml-1 w-4 h-4" />
                    </Link>
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
