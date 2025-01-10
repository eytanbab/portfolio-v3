import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { data } from '../../data';
import Project from './Project';
import CTA from '../CTA';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
        className='w-96 flex flex-col items-start gap-2'
      >
        {/* Title */}
        <motion.div className='relative w-fit' variants={childVariants}>
          <motion.h1 ref={ref} className='text-2xl'>
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
        <motion.div variants={childVariants} className=''>
          {/* Project */}
          <motion.div
            className='flex flex-col items-start justify-center gap-4'
            variants={projectParentVariants}
          >
            {data.map((project) => {
              return <Project key={project.link} project={project} />;
            })}
          </motion.div>
        </motion.div>
        <motion.div variants={childVariants} className='w-full'>
          <CTA scrollToElement='music'>music</CTA>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
