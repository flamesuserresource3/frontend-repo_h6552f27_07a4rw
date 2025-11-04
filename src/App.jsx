import React from 'react';
import SceneManager from './components/SceneManager';
import UIOverlay from './components/UIOverlay';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#000814] text-white">
      {/* Global UI overlay effects (non-blocking) */}
      <UIOverlay />

      {/* Multi-scene manager with cinematic 3D-feel transitions */}
      <SceneManager />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
