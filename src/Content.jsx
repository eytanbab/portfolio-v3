import { motion } from 'motion/react';
import About from './About';
import Projects from './Projects/Projects';
import Skills from './Skills';
import Intro from './Intro';

const Content = () => {
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

  return (
    <motion.div
      variants={container}
      initial='initial'
      animate='animate'
      className='w-full flex flex-col items-center justify-center px-4'
    >
      <Intro />
      <About />
      <Skills />
      <Projects />
    </motion.div>
  );
};

export default Content;
