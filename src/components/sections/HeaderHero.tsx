"use client";

import Image from "next/image";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode as LeetcodeIcon, SiCodeforces as CodeforcesIcon } from "react-icons/si";
import { Mail, MapPin } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/data";

export function HeaderHero() {
  return (
    <section id="home" className="pt-8 pb-10 border-b border-dashed border-zinc-300 dark:border-zinc-800">
      <div className="flex flex-col gap-6">
        
        {/* Profile Card Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6">
          {/* Avatar Container */}
          <div className="relative shrink-0 group">
            <div className="size-24 sm:size-28 rounded-2xl border border-dashed border-zinc-400 dark:border-zinc-700 p-1 bg-zinc-200/80 dark:bg-zinc-900 shadow-md transition-all duration-300 group-hover:-translate-y-1">
              <div className="relative size-full rounded-xl overflow-hidden bg-zinc-300 dark:bg-zinc-800">
                <Image
                  src="/images/photo.jpeg"
                  alt={PORTFOLIO_DATA.name}
                  fill
                  priority
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
            {/* Status Pulse Badge */}
            <span 
              className="absolute -bottom-1 -right-1 flex size-4 items-center justify-center rounded-full bg-background p-0.5 border border-zinc-400 dark:border-zinc-800"
              title={PORTFOLIO_DATA.status}
            >
              <span className="size-2.5 rounded-full bg-emerald-500 animate-pulse" />
            </span>
          </div>

          {/* Divider line for desktop */}
          <div className="hidden sm:block w-px h-16 border-r border-dashed border-zinc-300 dark:border-zinc-800 self-center" />

          {/* Title & Headline Info */}
          <div className="flex flex-col justify-center min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                {PORTFOLIO_DATA.name}
              </h1>
              <span className="text-xs px-2 py-0.5 rounded-md border border-zinc-300 dark:border-zinc-800 bg-zinc-200/80 dark:bg-zinc-900/80 text-zinc-700 dark:text-zinc-400 font-mono font-medium">
                IND
              </span>
            </div>

            <p className="text-sm sm:text-base font-semibold text-zinc-700 dark:text-zinc-300 mt-1">
              {PORTFOLIO_DATA.title}
            </p>

            <div className="flex items-center gap-2 mt-2 text-xs text-zinc-600 dark:text-zinc-400 font-medium">
              <MapPin className="size-3.5 shrink-0 text-zinc-600 dark:text-zinc-400" />
              <span>{PORTFOLIO_DATA.location}</span>
              <span>•</span>
              <span className="text-emerald-700 dark:text-emerald-400 font-bold">{PORTFOLIO_DATA.status}</span>
            </div>
          </div>
        </div>

        {/* Bio Highlights */}
        <div id="about" className="space-y-2.5 text-sm sm:text-base leading-relaxed pt-2">
          {PORTFOLIO_DATA.bio.map((paragraph, idx) => (
            <div key={idx} className="flex items-start gap-2.5">
              <span className="text-zinc-400 dark:text-zinc-500 select-none pt-0.5">•</span>
              <span className="text-zinc-800 dark:text-zinc-200 font-normal">{paragraph}</span>
            </div>
          ))}
        </div>

        {/* Quick Social & Contact Bar */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          <a
            href={PORTFOLIO_DATA.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg border border-dashed border-zinc-300 dark:border-zinc-800 bg-zinc-200/80 dark:bg-zinc-900/60 hover:bg-zinc-300 dark:hover:bg-zinc-800 text-xs text-zinc-900 dark:text-zinc-100 font-medium flex items-center gap-2 transition-all group"
          >
            <FaGithub className="size-3.5 text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-950 dark:group-hover:text-white" />
            <span>GitHub</span>
          </a>

          <a
            href={PORTFOLIO_DATA.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg border border-dashed border-zinc-300 dark:border-zinc-800 bg-zinc-200/80 dark:bg-zinc-900/60 hover:bg-zinc-300 dark:hover:bg-zinc-800 text-xs text-zinc-900 dark:text-zinc-100 font-medium flex items-center gap-2 transition-all group"
          >
            <FaLinkedinIn className="size-3.5 text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-950 dark:group-hover:text-white" />
            <span>LinkedIn</span>
          </a>

          <a
            href={PORTFOLIO_DATA.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg border border-dashed border-zinc-300 dark:border-zinc-800 bg-zinc-200/80 dark:bg-zinc-900/60 hover:bg-zinc-300 dark:hover:bg-zinc-800 text-xs text-zinc-900 dark:text-zinc-100 font-medium flex items-center gap-2 transition-all group"
          >
            <FaXTwitter className="size-3.5 text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-950 dark:group-hover:text-white" />
            <span>Twitter</span>
          </a>

          <a
            href={`mailto:${PORTFOLIO_DATA.socials.email}`}
            className="px-3 py-1.5 rounded-lg border border-dashed border-zinc-300 dark:border-zinc-800 bg-zinc-200/80 dark:bg-zinc-900/60 hover:bg-zinc-300 dark:hover:bg-zinc-800 text-xs text-zinc-900 dark:text-zinc-100 font-medium flex items-center gap-2 transition-all group"
          >
            <Mail className="size-3.5 text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-950 dark:group-hover:text-white" />
            <span>Mail</span>
          </a>

          <a
            href={PORTFOLIO_DATA.socials.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg border border-dashed border-zinc-300 dark:border-zinc-800 bg-zinc-200/80 dark:bg-zinc-900/60 hover:bg-zinc-300 dark:hover:bg-zinc-800 text-xs text-zinc-900 dark:text-zinc-100 font-medium flex items-center gap-2 transition-all group"
          >
            <LeetcodeIcon className="size-3.5 text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-950 dark:group-hover:text-white" />
            <span>LeetCode</span>
          </a>

          <a
            href={PORTFOLIO_DATA.socials.codeforces}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg border border-dashed border-zinc-300 dark:border-zinc-800 bg-zinc-200/80 dark:bg-zinc-900/60 hover:bg-zinc-300 dark:hover:bg-zinc-800 text-xs text-zinc-900 dark:text-zinc-100 font-medium flex items-center gap-2 transition-all group"
          >
            <CodeforcesIcon className="size-3.5 text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-950 dark:group-hover:text-white" />
            <span>Codeforces</span>
          </a>
        </div>

      </div>
    </section>
  );
}
