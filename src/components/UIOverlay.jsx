import React, { useEffect, useState } from 'react';

// Subtle cursor-follow glow that never blocks interactions
export default function UIOverlay() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-30">
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          left: pos.x,
          top: pos.y,
          width: 260,
          height: 260,
          background: 'radial-gradient(circle, rgba(0,255,255,0.08), rgba(127,0,255,0.04) 60%, transparent 70%)',
          filter: 'blur(20px)',
          transition: 'left 100ms linear, top 100ms linear',
        }}
      />
    </div>
  );
}
