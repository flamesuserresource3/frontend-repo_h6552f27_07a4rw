import React from 'react';

export default function Footer() {
  return (
    <div className="relative z-10 mx-auto my-6 w-full max-w-6xl rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center text-xs text-white/70 backdrop-blur">
      © {new Date().getFullYear()} NovaEra Hub — Immersive Portfolio
    </div>
  );
}
