import { useRef } from 'react';
import { useEffect } from 'react';
import { motion } from 'motion/react';

// eslint-disable-next-line react/prop-types
const CTA = ({ children, scrollToElement }) => {
  const boxRef = useRef(null);

  const handleClickScroll = () => {
    const element = document.getElementById(scrollToElement);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const boxElement = boxRef.current;

    if (!boxElement) {
      return;
    }

    const updateAnimation = () => {
      const angle =
        (parseFloat(boxElement.style.getPropertyValue('--angle')) + 0.5) % 360;
      boxElement.style.setProperty('--angle', `${angle}deg`);
      requestAnimationFrame(updateAnimation);
    };

    requestAnimationFrame(updateAnimation);
  }, []);

  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.3, ease: 'easeInOut' },
      }}
      whileTap={{ scale: 0.9 }}
      className='w-full [background:linear-gradient(45deg,theme(colors.cyan.800),theme(colors.slate.950)_50%,theme(colors.slate.800))_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.pink.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] rounded-full border border-transparent animate-border p-0.5'
    >
      <button
        onClick={handleClickScroll}
        className='w-full rounded-full py-1 bg-slate-950'
      >
        {children}
      </button>
    </motion.div>
  );
};

export default CTA;
