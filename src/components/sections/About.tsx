"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
  const technicalFoundations = [
    { category: "Core Design", skills: ["Figma", "UI/UX", "Design Systems"] },
    { category: "Interface Architecture", skills: ["React", "Next.js", "TypeScript"] },
    { category: "Systems", skills: ["Node.js", "PostgreSQL", "System Design"] },
  ];

  return (
    <section id="about" className="py-24 px-6 border-t border-white/5 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] overflow-hidden rounded-sm bg-zinc-900"
          >
            <Image
              src="/images/photo.png"
              alt="Arpit Neewaliya"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>
                  Based in India, I am a Full-Stack Engineer bridging the gap between rigorous technical infrastructure and human-centric interface design.
                </p>
                <p>
                  I operate under the philosophy that code should be as clean and expressive as a well-designed publication. Over my career, I've collaborated with global startups and enterprise teams to build robust, enduring digital experiences.
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10">
              <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-6">Technical Foundations</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {technicalFoundations.map((foundation, i) => (
                  <div key={i} className="space-y-3">
                    <h4 className="text-white text-sm font-medium">{foundation.category}</h4>
                    <ul className="space-y-2">
                      {foundation.skills.map((skill, j) => (
                        <li key={j} className="text-sm text-gray-500">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
