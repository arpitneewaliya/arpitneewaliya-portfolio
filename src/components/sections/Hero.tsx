"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium tracking-widest text-gray-300 uppercase"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span>Open to internships</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold tracking-tighter"
        >
          Arpit Neewaliya.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-lg md:text-2xl text-gray-400 max-w-2xl"
        >
          Full-stack developer committed to building fast,
          {" "}
          <span className="text-white">maintainable code</span> and{" "}
          <span className="text-white">seamless user experiences.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <Button
            size="lg"
            className="rounded-full bg-white text-black hover:bg-gray-200 px-8 h-14 text-base mt-4 group"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Link href="/projects">View My Work</Link>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
