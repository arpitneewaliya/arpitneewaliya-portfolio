import { Navbar } from "@/components/Navbar";
import { Contact } from "@/components/sections/Contact";

export default function ContactPage() {
  return (
    <main className="bg-black min-h-screen text-white relative">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <Contact />
      </div>

      <footer className="py-8 text-center border-t border-white/5 bg-[#050505] text-xs tracking-widest text-gray-600 uppercase absolute bottom-0 w-full">
        © {new Date().getFullYear()} Monolith Editorial. All Rights Reserved.
      </footer>
    </main>
  );
}
