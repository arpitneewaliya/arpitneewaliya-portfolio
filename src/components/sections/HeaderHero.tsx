"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  SiLeetcode as LeetcodeIcon,
  SiCodeforces as CodeforcesIcon,
} from "react-icons/si";
import { ArrowDownRight, Check, Copy, Mail, MapPin } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/data";

export function HeaderHero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO_DATA.socials.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${PORTFOLIO_DATA.socials.email}`;
    }
  };

  const socialItems = [
    {
      name: "GitHub",
      href: PORTFOLIO_DATA.socials.github,
      icon: FaGithub,
    },
    {
      name: "LinkedIn",
      href: PORTFOLIO_DATA.socials.linkedin,
      icon: FaLinkedinIn,
    },
    {
      name: "X (Twitter)",
      href: PORTFOLIO_DATA.socials.twitter,
      icon: FaXTwitter,
    },
    {
      name: "LeetCode",
      href: PORTFOLIO_DATA.socials.leetcode,
      icon: LeetcodeIcon,
    },
    {
      name: "Codeforces",
      href: PORTFOLIO_DATA.socials.codeforces,
      icon: CodeforcesIcon,
    },
  ];

  return (
    <section id="home" className="pt-8 pb-10 sm:pt-12 sm:pb-12 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col gap-7"
      >
        {/* Top Identity Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="flex items-center gap-4 sm:gap-5">
            {/* Framed Portrait */}
            <div className="relative shrink-0 group">
              <div className="size-20 sm:size-22 rounded-2xl p-1 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800/90 shadow-xs">
                <div className="relative size-full rounded-xl overflow-hidden bg-zinc-200 dark:bg-zinc-800 ring-1 ring-black/5 dark:ring-white/5">
                  <Image
                    src="/images/photo.jpeg"
                    alt={PORTFOLIO_DATA.name}
                    fill
                    priority
                    sizes="88px"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Name, Role & Location */}
            <div className="flex flex-col gap-1">
              <div className="flex flex-wrap items-center gap-2.5">
                <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                  {PORTFOLIO_DATA.name}
                </h1>
                <span className="text-[11px] px-2 py-0.5 rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-100/80 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 font-mono">
                  {PORTFOLIO_DATA. title}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                <span className="inline-flex items-center gap-1.5 font-mono">
                  <MapPin className="size-3.5 text-zinc-400 dark:text-zinc-500" />
                  {PORTFOLIO_DATA.location}
                </span>
              </div>
            </div>
          </div>

          {/* Single Refined Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200/90 dark:border-zinc-800/90 bg-zinc-100/70 dark:bg-zinc-900/70 text-xs font-mono text-zinc-700 dark:text-zinc-300 self-start sm:self-center">
            <span className="relative flex size-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full size-2 bg-emerald-500" />
            </span>
            <span>{PORTFOLIO_DATA.status}</span>
          </div>
        </div>

        {/* Editorial Lead Bio */}
        <div
          id="about"
          className="space-y-3 text-sm sm:text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-300 max-w-2xl"
        >
          <p className="text-zinc-900 dark:text-zinc-100 font-medium text-base sm:text-[17px] leading-snug">
            {PORTFOLIO_DATA.bio[0]}
          </p>
          <p>
            {PORTFOLIO_DATA.bio[1]} {PORTFOLIO_DATA.bio[2]}
          </p>
        </div>

        {/* Split Action Bar: Primary CTAs + Compact Social Dock */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
          {/* Primary CTAs */}
          <div className="flex flex-wrap items-center gap-2.5">
            <Link
              href="#projects"
              onClick={(event) => {
                event.preventDefault();
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
                window.history.pushState(null, "", "#projects");
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-white text-xs sm:text-sm font-medium transition-colors"
            >
              <span>Explore Work</span>
              <ArrowDownRight className="size-3.5" />
            </Link>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/70 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 text-xs sm:text-sm font-medium text-zinc-800 dark:text-zinc-200 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="size-3.5 text-emerald-500" />
                  <span className="font-mono text-xs">Copied email</span>
                </>
              ) : (
                <>
                  <Copy className="size-3.5 text-zinc-400" />
                  <span className="font-mono text-xs">
                    {PORTFOLIO_DATA.socials.email}
                  </span>
                </>
              )}
            </button>

            <a
              href={`mailto:${PORTFOLIO_DATA.socials.email}?subject=Portfolio%20Inquiry`}
              aria-label="Send email"
              title="Open in mail client"
              className="inline-flex items-center justify-center size-9 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/70 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors"
            >
              <Mail className="size-4" />
            </a>
          </div>

          {/* Compact Social Icon Dock with Tooltips */}
          <div className="flex items-center gap-1 p-1 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-100/60 dark:bg-zinc-900/50 self-start sm:self-auto">
            {socialItems.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="group relative flex items-center justify-center size-8 rounded-lg text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 hover:bg-white dark:hover:bg-zinc-800 transition-colors"
                >
                  <Icon className="size-4" />
                  <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 text-[10px] font-mono whitespace-nowrap opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-150 shadow-sm">
                    {social.name}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
