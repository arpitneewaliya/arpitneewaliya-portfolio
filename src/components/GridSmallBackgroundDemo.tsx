import React from "react";

export function GridSmallBackgroundDemo() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 h-full w-full overflow-hidden bg-background"
    >
      {/* Subtle top-center ambient light for architectural depth without scroll repaint cost */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[420px] w-[960px] rounded-full bg-radial from-zinc-400/12 via-zinc-400/4 to-transparent dark:from-zinc-100/[0.045] dark:via-zinc-100/[0.015] dark:to-transparent blur-3xl" />
    </div>
  );
}
