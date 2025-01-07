import Lines from './Lines';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { useState } from 'react';
import Content from './Content';
import { motion } from 'motion/react';

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
      className='h-screen w-full absolute inset-0 overflow-x-hidden text-slate-50 bg-slate-950 font-spaceGrotesk'
    >
      <AnimatePresence>
        <motion.div
          className='pointer-events-none z-50 mix-blend-difference'
          animate={{
            x: cursorPosition.x - 12, // Center horizontally
            y: cursorPosition.y - 12, // Center vertically
          }}
          transition={{
            type: 'tween',
            duration: 0.1,
          }}
          style={{
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            backgroundColor: 'white',
          }}
        />
        {showIntro ? <Lines /> : <Content />}
      </AnimatePresence>
    </div>
  );
}

export default App;
