import React from 'react';
import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';

const Stat = ({ label, value }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-5 text-emerald-100 backdrop-blur-sm"
  >
    <div className="text-xs uppercase tracking-wide text-emerald-200/70">{label}</div>
    <div className="mt-1 text-2xl font-semibold">{value}</div>
  </motion.div>
);

export default function SustainabilityRealm() {
  return (
    <section className="relative w-full bg-[#00110c] py-16 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(1000px_500px_at_10%_10%,rgba(16,185,129,0.08),transparent),radial-gradient(1000px_500px_at_90%_90%,rgba(34,197,94,0.08),transparent)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-center gap-3">
          <span className="rounded-xl bg-emerald-400/10 p-2 text-emerald-300"><Leaf size={20} /></span>
          <h2 className="text-2xl font-semibold sm:text-3xl" style={{ fontFamily: 'Orbitron, Inter, sans-serif' }}>Sustainability Realm</h2>
        </div>

        <p className="mb-8 max-w-3xl text-emerald-100/80">Designing AI-driven ecosystems that balance growth with planetary health — energy-aware agents, circular systems, and measurable impact.</p>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <Stat label="Energy Saved" value="31%" />
          <Stat label="Carbon Offset" value="12.4t" />
          <Stat label="Water Efficiency" value="+18%" />
          <Stat label="Regen Score" value="92/100" />
        </div>
      </div>
    </section>
  );
}
