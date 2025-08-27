import React from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header className="relative">
      <div className="mx-auto max-w-6xl px-4 pt-14 pb-10">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-semibold tracking-tight text-zinc-100 drop-shadow-[0_0_12px_rgba(160,0,120,0.15)]"
        >
          The Quiet Departure
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-3 max-w-2xl text-zinc-400"
        >
          A cabinet of unsettling observations, experiments, and testimonies that suggest something leaves when the body stays.
        </motion.p>

        <div className="mt-6 flex items-center gap-3 text-xs text-zinc-500">
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/40 px-3 py-1">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fuchsia-600 opacity-25" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-fuchsia-500" />
            </span>
            monitoring room temperature
          </span>
          <span className="rounded-full border border-zinc-800 bg-zinc-900/40 px-3 py-1">unverified archives</span>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
    </header>
  );
}
