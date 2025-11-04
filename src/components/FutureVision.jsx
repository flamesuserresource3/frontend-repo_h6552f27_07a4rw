import React from 'react';
import Spline from '@splinetool/react-spline';
import { Atom, Leaf, MessageSquare, Telescope } from 'lucide-react';
import { motion } from 'framer-motion';
import RealmCard from './RealmCard';

export default function FutureVision({ onNavigate }) {
  return (
    <section className="relative h-full w-full overflow-hidden bg-[#000814] text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/q8hSewXf7K3XjTci/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-[#000814]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl"
          >
            Future Vision
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mx-auto mt-2 max-w-2xl text-sm text-white/80"
          >
            A roadmap hub with quick access to new realms. Choose a card to jump directly into the immersive scene.
          </motion.p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
          <RealmCard
            title="Quantum & Nano Realm"
            description="Entanglement visuals, qubits in motion, and nano-scale innovation."
            Icon={Atom}
            cta="Enter Realm"
            accent="from-fuchsia-500/20 to-fuchsia-500/0"
            onClick={() => onNavigate && onNavigate('quantum')}
          />
          <RealmCard
            title="Sustainability Realm"
            description="Emerald KPIs, circular systems, and regenerative design metrics."
            Icon={Leaf}
            cta="Explore Metrics"
            accent="from-emerald-500/20 to-emerald-500/0"
            onClick={() => onNavigate && onNavigate('sustainability')}
          />
          <RealmCard
            title="Future Vision"
            description="Roadmap, milestones, and directional bets. You are here."
            Icon={Telescope}
            cta="View Roadmap"
            accent="from-cyan-500/20 to-cyan-500/0"
            onClick={() => onNavigate && onNavigate('future')}
          />
          <RealmCard
            title="Contact & Live Feed"
            description="Reach out, get updates, and follow the build-in-public feed."
            Icon={MessageSquare}
            cta="Connect"
            accent="from-violet-500/20 to-violet-500/0"
            onClick={() => onNavigate && onNavigate('contact')}
          />
        </div>
      </div>
    </section>
  );
}
