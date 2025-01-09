import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import CTA from './CTA';

const Intro = () => {
  const titles = ['Fullstack Developer', 'UX/UI Designer', 'Music Producer'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((cur) => (cur + 1) % titles.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [titles.length]);

  const parentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 1,
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeInOut' },
    },
  };

  return (
    <motion.div
      id='about'
      className='h-screen w-full flex flex-col items-center justify-center oveflow-hidden relative'
    >
      {/* Wrapper */}
      <motion.div
        variants={parentVariants}
        initial='hidden'
        animate='visible'
        className='max-w-96 flex flex-col items-center gap-1 relative'
      >
        <motion.h1 variants={childVariants} className='text-4xl font-semibold '>
          I&apos;m Ethan.
        </motion.h1>

        {/* Titles */}
        <motion.div variants={childVariants} className='overflow-hidden'>
          <motion.div>
            <AnimatePresence mode='wait'>
              <motion.p
                key={currentIndex}
                initial={{ x: '100%' }}
                variants={childVariants}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{
                  duration: 0.5,
                  ease: 'easeInOut',
                }}
              >
                {titles[currentIndex]}
              </motion.p>
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* Work status */}
        <motion.div variants={childVariants}>
          <motion.div
            animate={{ opacity: [0.25, 1, 1, 0.25] }}
            transition={{
              duration: 2.5,
              ease: 'ease-in-out',
              repeat: Infinity,
            }}
            className='mt-4 px-2 py-1 rounded-md flex items-center justify-center gap-2 text-emerald-500 relative'
          >
            <span className='before:content-[""] before:absolute before:inset-0 before:w-full before:bg-emerald-500/50 before:blur-2xl before:rounded-full'>
              Open to work
            </span>
            {/* Work status circle indicator */}
            <div className='size-2 bg-emerald-500 rounded-full' />
          </motion.div>
        </motion.div>
        {/* CTA Button */}
        <motion.div variants={childVariants} className='mt-8 w-full'>
          <CTA scrollToElement='about'>Learn More</CTA>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Intro;
