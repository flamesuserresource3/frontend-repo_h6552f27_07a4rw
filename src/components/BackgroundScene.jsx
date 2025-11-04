import React from 'react';
import Spline from '@splinetool/react-spline';

export default function BackgroundScene() {
  return (
    <div className="absolute inset-0">
      <Spline
        scene="https://prod.spline.design/6L9pQ6y9b3lQy4p8/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/40" />
    </div>
  );
}
