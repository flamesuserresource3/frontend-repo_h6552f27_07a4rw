import React from 'react';
import { motion } from 'framer-motion';
import { Telescope } from 'lucide-react';

const milestones = [
  { year: '2025', title: 'Autonomous Ventures', desc: 'Spin up AI-native micro‑ventures that self-operate with minimal human input.' },
  { year: '2026', title: 'Planet-Scale Orchestration', desc: 'Distributed agent networks coordinate energy, logistics, and urban flows.' },
  { year: '2027', title: 'Neuro‑Symbolic Fusion', desc: 'Hybrid reasoning systems align goals with human and ecological values.' },
];

export default function FutureVision() {
  return (
    <section className="relative w-full bg-[#0a0a12] py-16 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(700px_350px_at_20%_30%,rgba(56,189,248,0.06),transparent),radial-gradient(700px_350px_at_80%_70%,rgba(168,85,247,0.06),transparent)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-center gap-3">
          <span className="rounded-xl bg-white/5 p-2 text-white/80"><Telescope size={20} /></span>
          <h2 className="text-2xl font-semibold sm:text-3xl" style={{ fontFamily: 'Orbitron, Inter, sans-serif' }}>Future Vision</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {milestones.map((m) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <div className="text-sm text-white/60">{m.year}</div>
              <div className="mt-1 text-lg font-semibold text-white">{m.title}</div>
              <p className="mt-2 text-white/75">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
