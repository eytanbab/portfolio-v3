import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { CTA } from './CTA';
import About from './About';
import Projects from './Projects/Projects';
import Skills from './Skills';

const Content = () => {
  const titles = ['Fullstack Developer', 'UX/UI Designer', 'Music Producer'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((cur) => (cur + 1) % titles.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [titles.length]);

  const container = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,

      transition: {
        duration: 2,
        ease: 'easeInOut',
      },
    },
  };

  const item = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={container}
      initial='initial'
      animate='animate'
      className='w-full h-full flex flex-col items-center justify-center px-4'
    >
      <motion.div className='flex h-screen justify-center flex-col text-left overflow-hidden'>
        <motion.h1
          variants={item}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className='text-4xl font-semibold '
        >
          I&apos;m Ethan.
        </motion.h1>

        {/* Titles */}
        <div className='overflow-hidden'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <AnimatePresence mode='wait'>
              <motion.p
                key={currentIndex}
                initial={{ x: '100%' }}
                variants={item}
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
        </div>

        {/* CTA Button */}
        <motion.div
          transition={{ duration: 0.5, delay: 3 }}
          variants={item}
          className='mt-8'
        >
          <CTA scrollToElement='about'>Learn More</CTA>
        </motion.div>
      </motion.div>
      <About />
      <Skills />
      <Projects />
    </motion.div>
  );
};

export default Content;
