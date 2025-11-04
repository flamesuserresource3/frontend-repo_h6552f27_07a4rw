import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Brain, Atom, Leaf, Telescope, User, MessageSquare } from 'lucide-react';
import DomeIntro from './DomeIntro';
import AiRealm from './AiRealm';
import QuantumRealm from './QuantumRealm';
import SustainabilityRealm from './SustainabilityRealm';
import FutureVision from './FutureVision';
import VisionaryChamber from './VisionaryChamber';
import ContactFeed from './ContactFeed';

const scenes = [
  { id: 'genesis', label: 'Genesis Dome', icon: Home },
  { id: 'ai', label: 'AI Realm', icon: Brain },
  { id: 'quantum', label: 'Quantum', icon: Atom },
  { id: 'sustainability', label: 'Sustainability', icon: Leaf },
  { id: 'future', label: 'Future Vision', icon: Telescope },
  { id: 'visionary', label: 'Visionary', icon: User },
  { id: 'contact', label: 'Contact', icon: MessageSquare },
];

const transitionVariants = {
  initial: { opacity: 0, scale: 0.98, y: 20, filter: 'blur(6px)' },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    scale: 1.02,
    y: -10,
    filter: 'blur(6px)',
    transition: { duration: 0.45, ease: 'easeIn' },
  },
};

export default function SceneManager() {
  const [active, setActive] = useState('genesis');

  const Scene = useMemo(() => {
    switch (active) {
      case 'ai':
        return AiRealm;
      case 'quantum':
        return QuantumRealm;
      case 'sustainability':
        return SustainabilityRealm;
      case 'future':
        return FutureVision;
      case 'visionary':
        return VisionaryChamber;
      case 'contact':
        return ContactFeed;
      case 'genesis':
      default:
        return DomeIntro;
    }
  }, [active]);

  return (
    <div className="min-h-screen w-full bg-[#000814] text-white">
      {/* Neon glass navbar */}
      <div className="sticky top-0 z-40 w-full bg-[#000814]/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="text-sm uppercase tracking-widest text-cyan-300" style={{ fontFamily: 'Orbitron, Inter, sans-serif' }}>
            NovaEra Hub
          </div>
          <nav className="flex flex-wrap items-center gap-2">
            {scenes.map(({ id, label, icon: Icon }) => {
              const activeState = active === id;
              return (
                <button
                  key={id}
                  onClick={() => setActive(id)}
                  className={`group relative overflow-hidden rounded-xl border px-3 py-2 text-sm transition ${
                    activeState
                      ? 'border-cyan-300/50 bg-cyan-300/10 text-cyan-200'
                      : 'border-white/10 bg-white/5 text-white/70 hover:bg-white/10'
                  }`}
                  style={{ boxShadow: activeState ? '0 0 24px rgba(0,255,255,0.25)' : 'none' }}
                >
                  <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: 'radial-gradient(300px circle at var(--x,50%) var(--y,50%), rgba(0,255,255,0.12), transparent 60%)' }} />
                  <span className="relative z-10 inline-flex items-center gap-2">
                    <Icon size={16} /> {label}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Scene container with cinematic transitions */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div key={active} variants={transitionVariants} initial="initial" animate="animate" exit="exit">
            <Scene />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
