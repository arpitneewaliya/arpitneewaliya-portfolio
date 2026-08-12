"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sun,
  Moon,
  Menu,
  X
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/data";

const emptySubscribe = () => () => { };
function useHasMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

export function Navbar() {
  const mounted = useHasMounted();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const sections = [
      { id: "home" },
      { id: "projects" },
      { id: "skills" },
      { id: "experience" },
      { id: "blog" },
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sec.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleThemeToggle = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    if (typeof document !== "undefined" && "startViewTransition" in document) {
      (document as unknown as { startViewTransition: (cb: () => void) => void }).startViewTransition(() => {
        setTheme(nextTheme);
      });
    } else {
      setTheme(nextTheme);
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(id);
      window.history.pushState(null, "", `#${id}`);
    }
  };

  const dockLinks = [
    { name: "Home", href: "/#home", id: "home" },
    { name: "Projects", href: "/#projects", id: "projects" },
    { name: "Skills", href: "/#skills", id: "skills" },
    { name: "Experience", href: "/#experience", id: "experience" },
    { name: "Blogs", href: "/#blog", id: "blog" },
  ];

  return (
    <header className="sticky top-3 z-50 w-full px-4 flex items-center justify-center">
      <div className="w-full max-w-4xl mx-auto flex items-center justify-between gap-3 px-4 py-3 rounded-full border border-zinc-300/80 dark:border-zinc-800/80 bg-background/85 backdrop-blur-xl shadow-xl shadow-black/5 dark:shadow-black/40 transition-colors duration-200">

        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-2.5 pl-2 group">
          <div className="size-8 rounded-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 flex items-center justify-center font-bold text-sm shadow-sm transition-transform duration-300 group-hover:scale-105">
            AN
          </div>
          <span className="font-bold text-base tracking-tight text-foreground hidden sm:inline-block">
            {PORTFOLIO_DATA.nickname}
          </span>
          <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
        </Link>

        {/* Floating Command Dock (Desktop) - Text Only */}
        <nav className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full border border-zinc-300/60 dark:border-zinc-800/60 bg-zinc-200/50 dark:bg-zinc-900/60 shadow-inner">
          {dockLinks.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <motion.a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.id)}
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${isActive
                    ? "text-zinc-950 dark:text-white bg-white dark:bg-zinc-800 shadow-sm font-semibold"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-300/50 dark:hover:bg-zinc-800/50"
                  }`}
              >
                <span>{item.name}</span>

                {/* Active Indicator Glow Dot */}
                {isActive && (
                  <motion.span
                    layoutId="activeDockDot"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 size-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_#10b981]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </motion.a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 pr-1">
          {mounted && (
            <motion.button
              onClick={handleThemeToggle}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              type="button"
              aria-label="Toggle theme"
              className="p-2.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-zinc-200/80 dark:hover:bg-zinc-800/80 transition-all border border-transparent hover:border-zinc-300 dark:hover:border-zinc-800 cursor-pointer"
            >
              {theme === "dark" ? <Sun className="size-5" /> : <Moon className="size-5" />}
            </motion.button>
          )}

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            type="button"
            aria-label="Toggle menu"
            className="md:hidden p-2.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-zinc-200/80 dark:hover:bg-zinc-800/80 transition-all cursor-pointer"
          >
            {isMobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Floating Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed top-16 left-4 right-4 z-50 rounded-2xl border border-zinc-300 dark:border-zinc-800 bg-background/95 backdrop-blur-2xl shadow-2xl p-3 overflow-hidden"
          >
            <div className="grid grid-cols-2 gap-2">
              {dockLinks.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`flex items-center justify-center px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${isActive
                        ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-semibold"
                        : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900"
                      }`}
                  >
                    <span>{item.name}</span>
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
