"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    title: "The Philosophy of The Monolith",
    date: "April 2024",
    readTime: "5 min read",
    description: "An exploration into the intersection of physical architecture and digital front-end development, and why rigid structures create freedom.",
    link: "#"
  },
  {
    title: "The Art of Negative Space in Modern Interface Design",
    date: "March 2024",
    readTime: "8 min read",
    description: "Revisiting the decades of over-cluttered interfaces to find a new baseline of breathing room. How emptiness creates focus.",
    link: "#"
  },
  {
    title: "Procedural UI Engineering for Performant Apps",
    date: "January 2024",
    readTime: "6 min read",
    description: "Technical teardown of generating massive, complex user interfaces procedurally without dropping frames.",
    link: "#"
  }
];

export function Blog() {
  return (
    <section id="blog" className="py-24 px-6 border-t border-white/5 bg-[#050505]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex justify-between items-end"
        >
          <div>
            <span className="text-xs tracking-[0.2em] text-gray-500 mb-4 block uppercase">Writing</span>
            <h2 className="text-3xl md:text-4xl font-bold">Recent Writings</h2>
          </div>
          <Link href="#" className="hidden md:flex items-center text-sm font-medium hover:text-gray-300 transition-colors uppercase tracking-widest">
            All Posts <ArrowUpRight className="ml-1 w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group cursor-pointer flex flex-col h-full"
            >
              <div className="mb-4 flex items-center space-x-4 text-xs text-gray-500 uppercase tracking-widest">
                <span>{post.date}</span>
                <span className="w-1 h-1 rounded-full bg-gray-700"></span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:underline decoration-1 underline-offset-4">{post.title}</h3>
              <p className="text-gray-400 mb-6 flex-grow">{post.description}</p>
              <div className="pt-4 mt-auto border-t border-white/10 flex items-center text-sm font-medium text-gray-300">
                Read More
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
