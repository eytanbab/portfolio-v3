import { motion } from 'motion/react';
import About from './About';
import Projects from './Projects/Projects';
import Intro from './Intro';
import Music from './Music';
import Scrollbar from './Scrollbar';
import { useRef, useState } from 'react';
import Nav from './nav';

const Content = () => {
  const introRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const musicRef = useRef(null);

  const [active, setActive] = useState('');

  return (
    <motion.div className='w-full flex flex-col items-center justify-center px-4'>
      <Nav active={active} />
      <Scrollbar />
      <Intro introRef={introRef} setActive={setActive} />
      <About aboutRef={aboutRef} setActive={setActive} />
      <Projects projectsRef={projectsRef} setActive={setActive} />
      <Music musicRef={musicRef} setActive={setActive} />
    </motion.div>
  );
};

export default Content;
