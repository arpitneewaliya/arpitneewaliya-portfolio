import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { TechStack } from "@/components/sections/TechStack";

export default function Home() {
  return (
    <main className="min-h-screen text-white w-full">
      <Navbar />

      {/* Sections */}
      <Hero />
      <About />
      <TechStack />

      <footer className="py-6 sm:py-8 text-center border-t border-white/5 bg-transparent text-[10px] sm:text-xs tracking-widest text-gray-600 uppercase mt-16 sm:mt-24 px-4">
        © {new Date().getFullYear()} Arpit Neewaliya. All Rights Reserved.
      </footer>
    </main>
  );
}

