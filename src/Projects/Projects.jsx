import { motion, useInView } from 'motion/react';
import { projects } from '../../data';
import Project from './Project';
import CTA from '../CTA';
import Skills from '../Skills';
import { useEffect } from 'react';

// eslint-disable-next-line react/prop-types
const Projects = ({ projectsRef, setActive }) => {
  const activeInView = useInView(projectsRef);
  const isInView = useInView(projectsRef, { once: true });

  useEffect(() => {
    activeInView ? setActive('projects') : null;
  }, [activeInView, setActive]);

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

  const projectParentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      id='projects'
      className='h-screen w-full flex flex-col items-center justify-center'
    >
      {/* Wrapper */}
      <motion.div
        variants={parentVariants}
        initial='hidden'
        animate={isInView ? 'visible' : 'hidden'}
        className='w-96 max-w-96 flex flex-col items-start gap-2'
      >
        {/* Title */}
        <motion.div className='relative w-fit' variants={childVariants}>
          <motion.h1 ref={projectsRef} className='text-2xl'>
            projects
          </motion.h1>
          <motion.div
            style={{
              width: isInView ? '100%' : '0%',
              transition: 'all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 1s',
            }}
            className='absolute bottom-0.5 w-full h-px rounded-full bg-pink-500'
          />
        </motion.div>

        {/* Projects section wrapper */}
        <motion.div variants={childVariants}>
          {/* Project */}
          <motion.div
            className='flex flex-col items-start justify-center gap-4'
            variants={projectParentVariants}
          >
            {projects.map((project) => {
              return <Project key={project.link} project={project} />;
            })}
          </motion.div>
        </motion.div>
        {/* Skills */}
        <motion.div variants={childVariants}>
          <Skills />
        </motion.div>

        <motion.div variants={childVariants} className='mt-8 w-full'>
          <CTA scrollToElement='music'>music</CTA>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
