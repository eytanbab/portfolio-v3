import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from 'framer-motion';
import { useState } from 'react';
import { FaArrowDown } from 'react-icons/fa6';

const Scrollbar = () => {
  const { scrollYProgress } = useScroll();
  const [text, setText] = useState('Scroll');

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    latest === 0 ? setText('Scroll') : setText('');
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 50,
    restDelta: 0.001,
  });

  return (
    <div className='hidden xl:block'>
      {/* Scroll text indicator*/}
      <AnimatePresence>
        {text && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              animate={{ opacity: [0.25, 1, 1, 0.25] }}
              transition={{
                duration: 2.5,
                ease: 'easeInOut',
                repeat: Infinity,
              }}
              className='fixed top-1/2 -translate-y-1/2 right-12 text-slate-500 flex flex-col items-center animate-pulse font-light'
            >
              <motion.span>{text}</motion.span>
              <FaArrowDown />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scrollbar background */}
      <motion.div
        style={{ borderRadius: '9999px' }}
        className={`fixed bg-slate-800
           w-2 h-96 top-1/2 -translate-y-1/2 right-8 overflow-hidden`}
      >
        {/* Scrollbar filler */}
        <motion.div
          style={{
            scaleY: scaleY,
            borderRadius: '9999px',
            originY: 0,
          }}
          className={`absolute h-96 bg-pink-500 w-2 top-0 -translate-y-1/2 right-0 `}
        />
      </motion.div>
    </div>
  );
};

export default Scrollbar;
