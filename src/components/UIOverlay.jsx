import React from 'react';
import { Home, Brain, Atom, Leaf, Telescope, User, MessageSquare } from 'lucide-react';

const tabs = [
  { key: 'genesis', label: 'Genesis', Icon: Home },
  { key: 'ai', label: 'AI', Icon: Brain },
  { key: 'quantum', label: 'Quantum', Icon: Atom },
  { key: 'sustainability', label: 'Sustainability', Icon: Leaf },
  { key: 'future', label: 'Future Vision', Icon: Telescope },
  { key: 'visionary', label: 'Visionary', Icon: User },
  { key: 'contact', label: 'Contact', Icon: MessageSquare },
];

export default function UIOverlay({ currentScene, onNavigate }) {
  return (
    <div className="relative z-20 w-full">
      <div className="mx-auto mt-4 flex max-w-6xl flex-wrap items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-3 backdrop-blur">
        {tabs.map(({ key, label, Icon }) => {
          const active = key === currentScene;
          return (
            <button
              key={key}
              onClick={() => onNavigate(key)}
              className={`inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm transition ${active ? 'bg-white/20 text-white' : 'text-white/80 hover:bg-white/10 hover:text-white'}`}
            >
              <Icon className="h-4 w-4" />
              <span className="hidden sm:block">{label}</span>
            </button>
          );
        })}
        <div className="ml-auto hidden text-xs text-white/60 sm:block">NovaEra Hub</div>
      </div>
    </div>
  );
}
