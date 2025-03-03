import { motion, useMotionValueEvent, useScroll } from 'motion/react';
import { useState } from 'react';

const ScrollToTop = () => {
  const [disabled, setDisabled] = useState(true);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    latest === 0 ? setDisabled(true) : setDisabled(false);
  });

  return (
    <motion.button
      disabled={disabled}
      whileHover={{
        scale: disabled ? 1 : 1.1,
        transition: { duration: 0.3, ease: 'easeInOut' },
      }}
      whileTap={{ scale: disabled ? 1 : 0.9 }}
      className='fixed right-4 bottom-4 rounded-full p-2 bg-slate-50 hover:bg-pink-500 transition-colors duration-300 ease-in-out disabled:bg-slate-600'
      onClick={() => {
        scrollTo({ top: 0, behavior: 'smooth' });
      }}
    >
      <motion.svg
        height='16px'
        width='16px'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 330 330'
      >
        <path
          id='XMLID_224_'
          d='M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394
	l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393
	C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z'
        />
      </motion.svg>
    </motion.button>
  );
};

export default ScrollToTop;
