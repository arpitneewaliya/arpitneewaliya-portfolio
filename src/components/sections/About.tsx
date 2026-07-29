"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SiGithub, SiX, SiLeetcode, SiCodeforces } from "react-icons/si";
import { FaLinkedinIn, FaMedium } from "react-icons/fa";
import { BiLogoDevTo } from "react-icons/bi";

export function About() {
  const technicalFoundations = [
    { category: "Core Design", skills: ["Figma", "UI/UX", "Design Systems"] },
    { category: "Interface Architecture", skills: ["React", "Next.js", "TypeScript"] },
    { category: "Systems", skills: ["Node.js", "PostgreSQL", "System Design"] },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 border-t border-white/5 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] overflow-hidden rounded-sm bg-zinc-900"
          >
            <Image
              src="/images/photo.jpeg"
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
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">About Me</h2>
              <div className="space-y-4 sm:space-y-6 text-gray-400 text-base sm:text-lg leading-relaxed">
                <p>
                  Based in India, I am a Full-Stack Engineer bridging the gap between rigorous technical infrastructure and human-centric interface design.
                </p>
                <p>
                  I operate under the philosophy that code should be as clean and expressive as a well-designed publication. Over my career, I've collaborated with global startups and enterprise teams to build robust, enduring digital experiences.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8">
                <a href="https://x.com/arpitneewaliya" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 border border-white/5 bg-white/5 rounded-full hover:bg-white/10 hover:border-white/10 transition-all text-gray-400 hover:text-white">
                  <SiX className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/arpitneewaliya" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 border border-white/5 bg-white/5 rounded-full hover:bg-white/10 hover:border-white/10 transition-all text-gray-400 hover:text-white">
                  <FaLinkedinIn className="w-5 h-5" />
                </a>
                <a href="https://github.com/arpitneewaliya" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 border border-white/5 bg-white/5 rounded-full hover:bg-white/10 hover:border-white/10 transition-all text-gray-400 hover:text-white">
                  <SiGithub className="w-5 h-5" />
                </a>
                <a href="https://dev.to/arpitneewaliya" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 border border-white/5 bg-white/5 rounded-full hover:bg-white/10 hover:border-white/10 transition-all text-gray-400 hover:text-white">
                  <BiLogoDevTo className="w-5 h-5" />
                </a>
                <a href="https://medium.com/@arpitneewaliya" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 border border-white/5 bg-white/5 rounded-full hover:bg-white/10 hover:border-white/10 transition-all text-gray-400 hover:text-white">
                  <FaMedium className="w-5 h-5" />
                </a>
                <a href="https://leetcode.com/u/arpitneewaliya/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 border border-white/5 bg-white/5 rounded-full hover:bg-white/10 hover:border-white/10 transition-all text-gray-400 hover:text-white">
                  <SiLeetcode className="w-5 h-5" />
                </a>
                <a href="https://codeforces.com/profile/arpitneewaliya" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 border border-white/5 bg-white/5 rounded-full hover:bg-white/10 hover:border-white/10 transition-all text-gray-400 hover:text-white">
                  <SiCodeforces className="w-5 h-5" />
                </a>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
