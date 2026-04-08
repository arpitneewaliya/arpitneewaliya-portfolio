import { Navbar } from "@/components/Navbar";
import { ProjectsGallery } from "@/components/sections/ProjectsGallery";

export default function ProjectsPage() {
  return (
    <main className="bg-black min-h-screen text-white relative">
      <Navbar />
      
      <div className="pt-24">
        <ProjectsGallery />
      </div>

      <footer className="py-8 text-center border-t border-white/5 bg-[#050505] text-xs tracking-widest text-gray-600 uppercase">
        © {new Date().getFullYear()} Monolith Editorial. All Rights Reserved.
      </footer>
    </main>
  );
}
