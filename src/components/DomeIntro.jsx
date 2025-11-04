import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const chips = [
  { label: 'AI' },
  { label: 'Quantum' },
  { label: 'Sustainability' },
  { label: 'Vision' },
];

export default function DomeIntro() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden bg-[#000814] text-white">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Non-blocking gradient overlays for depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#000814]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#000814] to-transparent" />

      {/* Foreground content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-4 text-3xl font-semibold leading-tight text-[#f5f5f5] sm:text-5xl"
          style={{ fontFamily: 'Orbitron, Inter, sans-serif' }}
        >
          Welcome to NovaEra Hub
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          className="mx-auto mb-8 max-w-3xl text-base text-white/80 sm:text-lg"
          style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
        >
          The living ecosystem of tomorrow’s innovations. I’m Nilesh Singh, Founder and Deep-Tech
          Visionary, building autonomous systems that think, evolve, and sustain the planet.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {chips.map((c) => (
            <motion.span
              key={c.label}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.98 }}
              className="pointer-events-auto rounded-full border border-cyan-400/40 bg-white/5 px-4 py-1.5 text-sm text-white/90 shadow-[0_0_20px_rgba(0,255,255,0.15)] backdrop-blur"
              style={{
                boxShadow: '0 0 24px rgba(0,255,255,0.15), inset 0 0 12px rgba(127,0,255,0.15)',
              }}
            >
              {c.label}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
