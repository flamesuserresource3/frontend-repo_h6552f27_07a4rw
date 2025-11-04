import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import DomeIntro from './DomeIntro';
import AiRealm from './AiRealm';
import VisionaryChamber from './VisionaryChamber';
import QuantumRealm from './QuantumRealm';
import SustainabilityRealm from './SustainabilityRealm';
import FutureVision from './FutureVision';
import ContactFeed from './ContactFeed';

const variants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

export default function SceneManager({ currentScene, onNavigate }) {
  const renderScene = () => {
    switch (currentScene) {
      case 'genesis':
        return <DomeIntro />;
      case 'ai':
        return <AiRealm />;
      case 'quantum':
        return <QuantumRealm />;
      case 'sustainability':
        return <SustainabilityRealm />;
      case 'future':
        return <FutureVision onNavigate={onNavigate} />;
      case 'visionary':
        return <VisionaryChamber />;
      case 'contact':
        return <ContactFeed />;
      default:
        return <DomeIntro />;
    }
  };

  return (
    <div className="relative h-[80vh] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/20 backdrop-blur">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScene}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.4 }}
          className="absolute inset-0"
        >
          {renderScene()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
