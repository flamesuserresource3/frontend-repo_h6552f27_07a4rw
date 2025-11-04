import React from 'react';
import { Home, Telescope } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative z-10 w-full px-6 py-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-xl bg-black/30 px-4 py-3 backdrop-blur">
        <div className="flex items-center gap-2">
          <Home className="h-5 w-5 text-white/80" />
          <span className="font-semibold tracking-wide text-white">NovaEra Hub</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-white/80">
          <Telescope className="h-4 w-4" />
          <span className="hidden sm:block">Future Vision</span>
        </div>
      </div>
    </header>
  );
}
