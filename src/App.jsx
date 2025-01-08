import Lines from './Lines';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { useState } from 'react';
import Content from './Content';
import { motion } from 'motion/react';
import ScrollToTop from './ScrollToTop';
function App() {
  const [showIntro, setShowIntro] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Update cursor position on mouse move
  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    setTimeout(() => setShowIntro(false), 3100);
  }, []);

  return (
    <div
      onMouseMove={handleMouseMove}
      className='w-full min-h-screen overflow-x-hidden text-slate-50 bg-slate-950 font-spaceGrotesk'
    >
      {/* Mouse Follower */}
      <motion.div
        className='pointer-events-none fixed z-50 mix-blend-difference hidden xl:block'
        animate={{
          x: cursorPosition.x - 8, // Center horizontally
          y: cursorPosition.y - 8, // Center vertically
        }}
        transition={{
          type: 'tween',
          duration: 0.1,
        }}
        style={{
          width: '16px',
          height: '16px',
          borderRadius: '50%',
          backgroundColor: 'white',
        }}
      />
      <AnimatePresence>{showIntro ? <Lines /> : <Content />}</AnimatePresence>

      <ScrollToTop />
    </div>
  );
}

export default App;
