import { useState } from 'react';
import Content from './Content';
import { motion } from 'motion/react';
import ScrollToTop from './ScrollToTop';
import './App.css';

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Update cursor position on mouse move
  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className='w-full min-h-screen text-slate-50 font-spaceGrotesk'
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
      <Content />

      <ScrollToTop />
    </div>
  );
}

export default App;
