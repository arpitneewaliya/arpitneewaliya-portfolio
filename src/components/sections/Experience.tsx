"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Founding Engineer",
    company: "Monolith Digital",
    period: "2021 — Present",
    description: "Leading the core engineering team. Architecting modular UI systems that bridge the gap between complex data and simple user experiences.",
    tags: ["DESIGN SYSTEMS", "REACT", "NODE.JS"],
  },
  {
    role: "Senior Interaction Designer",
    company: "Aether Media Group",
    period: "2019 — 2021",
    description: "Engineered scalable motion language and transition models for high-fidelity interactive media platforms.",
    tags: ["MOTION DESIGN", "USER EXPERIENCE"],
  },
  {
    role: "Interface Developer",
    company: "Stark Editorial Lab",
    period: "2016 — 2019",
    description: "Developed procedural UI components and frontend microservices for an architectural publication.",
    tags: ["FRONT-END", "PROCEDURAL UI"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 border-t border-white/5 bg-black">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-16">
        <div className="md:col-span-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="sticky top-32"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience <span className="text-gray-500 font-serif italic">&</span><br/>Narratives.</h2>
            <p className="text-gray-400">A chronological journey through professional challenges resolved.</p>
          </motion.div>
        </div>

        <div className="md:col-span-8 space-y-16">
          <h3 className="text-sm uppercase tracking-widest text-gray-500 border-b border-white/10 pb-4">Professional Path</h3>
          
          <div className="space-y-16 relative">
            {/* Timeline line */}
            <div className="absolute left-0 top-2 bottom-0 w-px bg-white/10 hidden md:block" />
            
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="relative md:pl-10 group"
              >
                {/* Timeline dot */}
                <div className="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full border border-gray-500 bg-black group-hover:bg-white group-hover:border-white transition-colors hidden md:block" />
                
                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                  <h4 className="text-2xl font-bold text-white">{exp.role}</h4>
                  <span className="text-sm text-gray-500 tracking-wider uppercase mt-1 md:mt-0">{exp.period}</span>
                </div>
                
                <div className="text-lg text-gray-300 font-medium mb-4">{exp.company}</div>
                
                <p className="text-gray-400 mb-6 leading-relaxed max-w-2xl">{exp.description}</p>
                
                <div className="flex gap-2 flex-wrap">
                  {exp.tags.map(tag => (
                    <span key={tag} className="text-[10px] tracking-widest px-2 py-1 bg-white/5 rounded-full text-gray-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
