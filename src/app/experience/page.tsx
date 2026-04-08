import { Navbar } from "@/components/Navbar";
import { Experience } from "@/components/sections/Experience";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen text-white relative flex flex-col">
      <Navbar />
      
      <div className="pt-24 flex-grow">
        <Experience />
      </div>

      <footer className="py-6 sm:py-8 text-center border-t border-white/5 bg-transparent text-[10px] sm:text-xs tracking-widest text-gray-600 uppercase w-full px-4">
        © {new Date().getFullYear()} Arpit Neewaliya. All Rights Reserved.
      </footer>
    </main>
  );
}
