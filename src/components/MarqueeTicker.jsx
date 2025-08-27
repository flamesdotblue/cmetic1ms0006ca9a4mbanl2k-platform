import React from 'react';
import { motion } from 'framer-motion';

export default function MarqueeTicker({ items }) {
  const content = items.concat(items).concat(items); // duplicate for seamless loop

  return (
    <div className="relative mt-4 overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950/60">
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 12%, rgba(0,0,0,0) 88%, rgba(0,0,0,1) 100%)'}}/>
      <motion.div
        className="flex gap-8 whitespace-nowrap px-6 py-3 text-[12px] text-zinc-400"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
      >
        {content.map((t, i) => (
          <span key={i} className="inline-flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-fuchsia-600/70" />
            {t}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
