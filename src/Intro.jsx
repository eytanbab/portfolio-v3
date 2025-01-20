import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useInView } from 'motion/react';
import CTA from './CTA';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { PiReadCvLogo } from 'react-icons/pi';
import { MdAlternateEmail } from 'react-icons/md';

// eslint-disable-next-line react/prop-types
const Intro = ({ introRef, setActive }) => {
  const activeInView = useInView(introRef);
  const [currentIndex, setCurrentIndex] = useState(0);

  const titles = ['Fullstack Developer', 'UX/UI Designer', 'Music Producer'];

  useEffect(() => {
    activeInView ? setActive('intro') : null;
  }, [activeInView, setActive]);

  // Titles change every 3.5 seconds
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
        staggerChildren: 0.5,
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
      id='intro'
      className='h-screen w-full flex flex-col items-center justify-center oveflow-hidden relative'
    >
      {/* Wrapper */}
      <motion.div
        variants={parentVariants}
        initial='hidden'
        animate='visible'
        className='max-w-96 flex flex-col items-center gap-1  relative'
      >
        <motion.h1
          ref={introRef}
          variants={childVariants}
          className='text-4xl font-semibold '
        >
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
              ease: 'easeInOut',
              repeat: Infinity,
            }}
            className='px-2 py-1 rounded-md flex items-center justify-center gap-2 text-emerald-500 relative'
          >
            {/* Work status text */}
            <span className='before:content-[""] before:absolute before:inset-0 before:w-full before:bg-emerald-500/50 before:blur-2xl before:rounded-full'>
              Open to work
            </span>
            {/* Work status circle indicator */}
            <div className='size-2 bg-emerald-500 rounded-full' />
          </motion.div>
        </motion.div>
        {/* Links */}
        <motion.div
          className='mt-4 flex items-center justify-center gap-4'
          variants={childVariants}
        >
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href='https://github.com/eytanbab'
            target='_blank'
          >
            <FaGithub
              size={24}
              className='fill-slate-300 hover:fill-pink-500 transition-colors duration-300 ease-in-out'
            />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href='https://www.linkedin.com/in/ethan-babaev/'
            target='_blank'
          >
            <FaLinkedin
              size={24}
              className='fill-slate-300 hover:fill-pink-500 transition-colors duration-300 ease-in-out'
            />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href='https://drive.google.com/file/d/1yCg-B6YAWPD5iIJHXEJX32xnSSScFd9D/view?usp=sharing'
            target='_blank'
          >
            <PiReadCvLogo
              size={24}
              className='fill-slate-300 hover:fill-pink-500 transition-colors duration-300 ease-in-out'
            />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href='mailto:ethan.babaev@gmail.com'
          >
            <MdAlternateEmail
              size={24}
              className='fill-slate-300 hover:fill-pink-500 transition-colors duration-300 ease-in-out'
            />
          </motion.a>
        </motion.div>
        {/* CTA Button */}
        <motion.div variants={childVariants} className='mt-4 w-full'>
          <CTA scrollToElement='about'>Learn More</CTA>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Intro;
