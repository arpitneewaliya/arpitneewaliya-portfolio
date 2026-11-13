"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/data";

const emptySubscribe = () => () => {};
function useHasMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

const dockLinks = [
  { name: "Home", href: "/#home", id: "home" },
  { name: "Projects", href: "/#projects", id: "projects" },
  { name: "Skills", href: "/#skills", id: "skills" },
  { name: "Experience", href: "/#experience", id: "experience" },
  { name: "Blogs", href: "/#blog", id: "blog" },
] as const;

export function Navbar() {
  const mounted = useHasMounted();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const NearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 60;

      if (NearBottom) {
        setActiveSection("blog");
        return;
      }

      const scrollPosition = window.scrollY + 180;
      for (let i = dockLinks.length - 1; i >= 0; i--) {
        const sec = dockLinks[i];
        const el = document.getElementById(sec.id);
        if (el && scrollPosition >= el.offsetTop) {
          setActiveSection(sec.id);
          break;
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
      (
        document as unknown as { startViewTransition: (cb: () => void) => void }
      ).startViewTransition(() => {
        setTheme(nextTheme);
      });
    } else {
      setTheme(nextTheme);
    }
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    setIsMobileMenuOpen(false);

    if (pathname !== "/") {
      return;
    }

    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -84;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(id);
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <header className="sticky top-3 z-50 w-full px-4 flex items-center justify-center">
      <div className="w-full max-w-3xl mx-auto flex items-center justify-between gap-2 px-3 py-2 rounded-full border border-zinc-200/90 dark:border-zinc-800/90 bg-background/80 backdrop-blur-xl shadow-[0_2px_20px_-4px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_24px_-4px_rgba(0,0,0,0.5)]">
        {/* Brand Identity */}
        <Link
          href="/"
          className="flex items-center gap-2.5 pl-1.5 pr-2 py-1 rounded-full group focus-visible:outline-none"
        >
          <div className="size-7 rounded-full bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-950 flex items-center justify-center font-mono font-semibold text-xs tracking-tighter transition-transform duration-200 group-hover:scale-105">
            AN
          </div>
          <span className="font-semibold text-sm tracking-tight text-foreground hidden sm:inline-block">
            {PORTFOLIO_DATA.nickname}
          </span>
        </Link>

        {/* Streamlined Desktop Navigation Links with Gliding Pill */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-0.5"
        >
          {dockLinks.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors duration-150 cursor-pointer select-none ${
                  isActive
                    ? "text-zinc-950 dark:text-zinc-50"
                    : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavPill"
                    className="absolute inset-0 rounded-full bg-zinc-200/80 dark:bg-zinc-800/90 border border-zinc-300/60 dark:border-zinc-700/60 -z-10"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Theme & Mobile Menu Controls */}
        <div className="flex items-center gap-1">
          {mounted ? (
            <button
              onClick={handleThemeToggle}
              type="button"
              aria-label="Toggle theme"
              className="size-8 rounded-full flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 hover:bg-zinc-200/60 dark:hover:bg-zinc-800/70 transition-colors cursor-pointer"
            >
              {theme === "dark" ? (
                <Sun className="size-4" />
              ) : (
                <Moon className="size-4" />
              )}
            </button>
          ) : (
            <div className="size-8" />
          )}

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            type="button"
            aria-label="Toggle menu"
            className="md:hidden size-8 rounded-full flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 hover:bg-zinc-200/60 dark:hover:bg-zinc-800/70 transition-colors cursor-pointer"
          >
            {isMobileMenuOpen ? (
              <X className="size-4" />
            ) : (
              <Menu className="size-4" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Floating Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            className="md:hidden fixed top-16 left-4 right-4 z-50 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-background/95 backdrop-blur-xl shadow-xl p-2 overflow-hidden"
          >
            <div className="grid grid-cols-2 gap-1.5">
              {dockLinks.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`flex items-center justify-center px-3 py-2.5 rounded-xl text-xs font-medium transition-colors ${
                      isActive
                        ? "bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900 font-semibold"
                        : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900"
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
