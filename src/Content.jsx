import { motion } from 'motion/react';
import About from './About';
import Projects from './Projects/Projects';
import Skills from './Skills';
import Intro from './Intro';
import Music from './Music';

const Content = () => {
  return (
    <motion.div className='w-full flex flex-col items-center justify-center px-4'>
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Music />
    </motion.div>
  );
};

export default Content;
