import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { TechStack } from "@/components/sections/TechStack";
import DotGrid from "@/components/DotGrid";

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 z-0 bg-black">
        <DotGrid
          className="opacity-60"
          baseColor="#363738"
          activeColor="#ffffff"
          gap={10}
          dotSize={2.5}
          proximity={100}
        />
      </div>
      
      <main className="relative z-10 min-h-screen text-white w-full">
        <Navbar />

        {/* Sections */}
        <Hero />
        <About />
        <TechStack />

        <footer className="py-8 text-center border-t border-white/5 bg-transparent text-xs tracking-widest text-gray-600 uppercase mt-24">
          © {new Date().getFullYear()} Arpit Neewaliya. All Rights Reserved.
        </footer>
      </main>
    </>
  );
}
