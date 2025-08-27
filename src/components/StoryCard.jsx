import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, MapPin } from 'lucide-react';

export default function StoryCard({ index, title, location, excerpt, body }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/60 backdrop-blur-sm"
    >
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'radial-gradient(600px 120px at 50% -40px, rgba(208,0,112,0.15), transparent)'}} />

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-medium text-zinc-100">{title}</h3>
            <div className="mt-1 flex items-center gap-2 text-xs text-zinc-500">
              <MapPin size={14} className="text-zinc-600" />
              <span>{location}</span>
            </div>
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="shrink-0 rounded-md border border-zinc-800 bg-zinc-900/50 px-2.5 py-2 text-xs text-zinc-300 hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-fuchsia-700/40"
            aria-expanded={open}
          >
            {open ? (
              <span className="inline-flex items-center gap-1"><EyeOff size={14}/> Close</span>
            ) : (
              <span className="inline-flex items-center gap-1"><Eye size={14}/> Read</span>
            )}
          </button>
        </div>

        {!open && (
          <p className="mt-4 text-sm text-zinc-400 leading-relaxed">
            {excerpt}
          </p>
        )}

        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="mt-4"
          >
            <p className="whitespace-pre-line text-[0.95rem] leading-relaxed text-zinc-300">
              {body}
            </p>
          </motion.div>
        )}
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="flex items-center justify-between px-5 py-3 text-[11px] text-zinc-500">
        <span className="uppercase tracking-widest">field note</span>
        <span className="rounded-full border border-zinc-800 bg-zinc-900/50 px-2 py-0.5">status: unverified</span>
      </div>
    </motion.article>
  );
}
