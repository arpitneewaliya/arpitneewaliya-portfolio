import { Navbar } from "@/components/Navbar";
import { Experience } from "@/components/sections/Experience";

export default function ExperiencePage() {
  return (
    <main className="bg-black min-h-screen text-white relative flex flex-col">
      <Navbar />
      
      <div className="pt-24 flex-grow">
        <Experience />
      </div>

      <footer className="py-8 text-center border-t border-white/5 bg-[#050505] text-xs tracking-widest text-gray-600 uppercase w-full">
        © {new Date().getFullYear()} Monolith Editorial. All Rights Reserved.
      </footer>
    </main>
  );
}
