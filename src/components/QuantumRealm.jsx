import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Atom } from 'lucide-react';

export default function QuantumRealm() {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden bg-[#000814] text-white">
      {/* 3D quantum background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/0U3m9JY7H7u1y8ki/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Non-blocking gradients */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-[#000814]" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-6 py-10">
        <div className="mb-4 inline-flex items-center gap-3 rounded-xl border border-cyan-400/30 bg-white/5 px-3 py-2 text-cyan-200 backdrop-blur-sm">
          <Atom size={18} />
          <span className="text-sm uppercase tracking-wide" style={{ fontFamily: 'Orbitron, Inter, sans-serif' }}>Quantum & Nano Realm</span>
        </div>
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl text-xl text-white/90 sm:text-2xl"
        >
          Exploring entanglement logic, nano-scale design, and probabilistic computation for breakthrough systems.
        </motion.h3>
      </div>
    </section>
  );
}
