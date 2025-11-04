import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MessageSquare } from 'lucide-react';

export default function ContactFeed() {
  return (
    <section className="relative w-full bg-[#000814] py-16 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(900px_450px_at_15%_20%,rgba(0,255,255,0.05),transparent),radial-gradient(900px_450px_at_85%_80%,rgba(127,0,255,0.05),transparent)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-center gap-3">
          <span className="rounded-xl bg-white/5 p-2 text-white/80"><MessageSquare size={20} /></span>
          <h2 className="text-2xl font-semibold sm:text-3xl" style={{ fontFamily: 'Orbitron, Inter, sans-serif' }}>Contact & Live Feed</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
          >
            <div className="grid grid-cols-1 gap-4">
              <input className="rounded-lg border border-white/10 bg-black/30 px-3 py-2 outline-none placeholder:text-white/40" placeholder="Your name" />
              <input type="email" className="rounded-lg border border-white/10 bg-black/30 px-3 py-2 outline-none placeholder:text-white/40" placeholder="Email" />
              <textarea rows={4} className="rounded-lg border border-white/10 bg-black/30 px-3 py-2 outline-none placeholder:text-white/40" placeholder="Your message" />
              <button className="inline-flex justify-center rounded-lg border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-cyan-200 hover:bg-cyan-400/20">Send</button>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
          >
            <h3 className="mb-4 text-lg font-semibold">Connect</h3>
            <div className="flex flex-wrap items-center gap-3">
              <a href="mailto:hello@novaerahub.ai" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white/80 hover:bg-white/10"><Mail size={18} /> Email</a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white/80 hover:bg-white/10"><Github size={18} /> GitHub</a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white/80 hover:bg-white/10"><Linkedin size={18} /> LinkedIn</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
