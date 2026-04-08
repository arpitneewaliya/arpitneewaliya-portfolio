"use client";

import { motion } from "framer-motion";
import { Blocks, Code2, Database, Layout, Server, Sparkles, Terminal } from "lucide-react";

export function TechStack() {
  const technologies = [
    { name: "Next.js 15", icon: Layout },
    { name: "TypeScript", icon: Code2 },
    { name: "React", icon: Blocks },
    { name: "Tailwind CSS", icon: Sparkles },
    { name: "Node.js", icon: Server },
    { name: "PostgreSQL", icon: Database },
    { name: "System Design", icon: Terminal },
  ];

  return (
    <section id="techstack" className="py-24 px-6 border-t border-white/5 bg-[#030303]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs tracking-[0.2em] text-gray-500 mb-4 block uppercase">Tech Stack</span>
          <h2 className="text-3xl md:text-4xl font-bold">Tools & Architecture</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center p-8 border border-white/5 bg-white/5 rounded-2xl hover:bg-white/10 hover:border-white/10 transition-all group"
            >
              <tech.icon className="w-10 h-10 mb-4 text-gray-500 group-hover:text-white transition-colors" strokeWidth={1.5} />
              <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors tracking-wide">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
