import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Github, Linkedin, Download } from 'lucide-react';

const skills = [
  'gen AI',
  'AI Agents',
  'Prompt Engineering',
  'Quantum Logic',
  'System Design',
];

export default function VisionaryChamber() {
  return (
    <section className="relative w-full bg-[#000814] py-16 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_20%_20%,rgba(0,255,255,0.06),transparent),radial-gradient(800px_400px_at_80%_80%,rgba(127,0,255,0.06),transparent)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <span className="rounded-xl bg-white/5 p-2 text-white/80">
            <User size={20} />
          </span>
          <h2 className="text-2xl font-semibold text-[#f5f5f5] sm:text-3xl" style={{ fontFamily: 'Orbitron, Inter, sans-serif' }}>The Visionary Chamber</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
          >
            <h3 className="mb-2 text-xl font-semibold text-white">Nilesh Singh — Deep‑Tech Visionary & Founder of NovaEra Hub</h3>
            <p className="text-white/80">
              Building autonomous systems and sustainable futures through AI, quantum intelligence, and innovation.
            </p>

            <a
              href="#"
              className="mt-5 inline-flex items-center gap-2 rounded-lg border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-cyan-200 hover:bg-cyan-400/20"
            >
              <Download size={18} /> Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
          >
            <h3 className="mb-3 text-xl font-semibold text-white">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="mailto:hello@novaerahub.ai"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white/80 hover:bg-white/10"
              >
                <Mail size={18} /> Email
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white/80 hover:bg-white/10"
              >
                <Github size={18} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white/80 hover:bg-white/10"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="mt-10 text-center text-sm text-white/60"
          style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
        >
          “Creating a new era of intelligence.”
        </motion.p>
      </div>
    </section>
  );
}
