"use client";

import { useState } from "react";
import { Check, Copy, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/data";

export function FooterCTA() {
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

  return (
    <section aria-label="Contact" className="py-10 sm:py-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 bg-zinc-100/50 dark:bg-zinc-900/40 p-6 sm:p-7">
        <div className="flex flex-col gap-1.5 max-w-md">
          <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
            05 / Contact
          </span>
          <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
            Let&apos;s build something together.
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Currently available for full-stack &amp; AI engineering roles,
            internships, and select collaborations.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-white text-xs font-medium transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="size-3.5 text-emerald-400 dark:text-emerald-600" />
                <span className="font-mono">Copied to clipboard</span>
              </>
            ) : (
              <>
                <Copy className="size-3.5 opacity-80" />
                <span className="font-mono">Copy Email</span>
              </>
            )}
          </button>

          <a
            href={`mailto:${PORTFOLIO_DATA.socials.email}?subject=Hello%20Arpit`}
            className="inline-flex items-center gap-1 px-3.5 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs font-medium text-zinc-800 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
          >
            <span>Send Message</span>
            <ArrowUpRight className="size-3.5 text-zinc-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
