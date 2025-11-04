import React, { useState } from 'react';
import SceneManager from './components/SceneManager';
import UIOverlay from './components/UIOverlay';
import Footer from './components/Footer';

export default function App() {
  const [currentScene, setCurrentScene] = useState('genesis');

  return (
    <div className="relative min-h-screen w-full bg-black text-white">
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-6">
        <UIOverlay currentScene={currentScene} onNavigate={setCurrentScene} />
        <div className="mt-4" />
        <SceneManager currentScene={currentScene} onNavigate={setCurrentScene} />
      </div>
      <Footer />
    </div>
  );
}
