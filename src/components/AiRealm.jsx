import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Network } from 'lucide-react';

const Card = ({ icon: Icon, title, subtitle, description, glow }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    whileHover={{ y: -4, scale: 1.02 }}
    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
    style={{ boxShadow: `0 0 40px ${glow}` }}
  >
    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: `radial-gradient(600px circle at var(--x,50%) var(--y,50%), ${glow}, transparent 60%)` }} />
    <div className="relative z-10">
      <div className="mb-4 inline-flex items-center gap-3">
        <span className="rounded-lg bg-black/40 p-2 text-cyan-300">
          <Icon size={22} />
        </span>
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="text-xs uppercase tracking-wide text-white/60">{subtitle}</p>
        </div>
      </div>
      <p className="text-white/80">{description}</p>
    </div>
  </motion.div>
);

export default function AiRealm() {
  return (
    <section className="relative w-full bg-[#000814] py-16 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,255,255,0.08),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(127,0,255,0.08),transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-[#f5f5f5] sm:text-3xl" style={{ fontFamily: 'Orbitron, Inter, sans-serif' }}>The Autonomous Network</h2>
            <p className="mt-2 max-w-2xl text-white/70">A realm of glowing neural nodes connected by energy lines. Click into projects to dive deeper.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Card
            icon={Network}
            title="Novynex OS"
            subtitle="Autonomous Operating System"
            description="An autonomous operating system that builds and runs entire companies — no code, no team, pure AI orchestration."
            glow="rgba(0,255,255,0.15)"
          />
          <Card
            icon={Brain}
            title="Autonomous AI Minds"
            subtitle="Adaptive Agents"
            description="Agents that think, remember, and adapt — they learn like humans through examples and feedback."
            glow="rgba(127,0,255,0.15)"
          />
        </div>
      </div>
    </section>
  );
}
