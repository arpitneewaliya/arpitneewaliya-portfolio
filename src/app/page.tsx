import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { TechStack } from "@/components/sections/TechStack";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white relative">
      <Navbar />
      
      {/* Sections */}
      <Hero />
      <About />
      <TechStack />

      <footer className="py-8 text-center border-t border-white/5 bg-[#050505] text-xs tracking-widest text-gray-600 uppercase mt-24">
        © {new Date().getFullYear()} Monolith Editorial. All Rights Reserved.
      </footer>
    </main>
  );
}
