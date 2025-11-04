import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#000814] py-8 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-white/60">© {new Date().getFullYear()} NovaEra Hub — Nilesh Singh</p>
        <p className="text-sm text-white/50">Futuristic. Intelligent. Immersive.</p>
      </div>
    </footer>
  );
}
