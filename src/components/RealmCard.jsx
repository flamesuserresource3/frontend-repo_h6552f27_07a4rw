import React from 'react';
import { motion } from 'framer-motion';

export default function RealmCard({ title, description, Icon, accent = 'from-indigo-500/20 to-indigo-500/0', cta, onClick, disabled = false }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      disabled={disabled}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      className={`group relative w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 text-left transition ${disabled ? 'opacity-80 cursor-default' : 'hover:border-white/20'} backdrop-blur-md`}
    >
      <div className={`pointer-events-none absolute -inset-px bg-gradient-to-b ${accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

      <div className="relative z-10 flex items-start gap-4">
        <div className="rounded-xl bg-white/10 p-3">
          {Icon ? <Icon className="h-6 w-6 text-white" /> : null}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="mt-1 text-sm text-white/70">{description}</p>
          {cta ? (
            <div className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-white/90">
              <span>{cta}</span>
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </div>
          ) : null}
        </div>
      </div>
    </motion.button>
  );
}
