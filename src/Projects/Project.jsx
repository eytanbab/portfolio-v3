/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa6';

const Project = ({ project }) => {
  const [hovered, setHovered] = useState(false);

  const underlineVariants = {
    hidden: { x: '-384px', opacity: 0.8 },
    visible: { x: '0', opacity: 1 },
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
      variants={childVariants}
      className='relative group flex flex-col items-start overflow-hidden text-left'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Project name wrapper */}
      <div className='flex items-center gap-4 justify-start relative group'>
        {/* Project name */}
        <motion.a
          href={project.link}
          target='_blank'
          className='text-slate-300 text-4xl group-hover:text-slate-50 duration-500 ease-in-out self-start'
          whileTap={{ scale: 0.95 }}
        >
          {project.projectName}
        </motion.a>
        <AnimatePresence>
          {hovered && (
            <>
              {/* Arrow */}
              <motion.div
                href={project.link}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0, rotate: -45 }}
                exit={{ opacity: 0, x: 20, rotate: -90 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <FaArrowRight size={24} />
              </motion.div>
              {/* Underline */}
              <motion.div
                variants={underlineVariants}
                initial='hidden'
                animate={hovered ? 'visible' : 'hidden'} // can work without it idk how lol
                exit={{ x: '384px', opacity: 0.5 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className='hidden xl:block absolute w-full left-0 bottom-0 h-0.5 rounded-full bg-pink-500 '
              />
            </>
          )}
        </AnimatePresence>
      </div>
      {/* Tech used */}
      <div className='flex gap-2'>
        {project.techUsed.map((tech) => {
          return (
            <div
              key={tech}
              className='flex text-slate-300 group-hover:text-slate-50 transition-colors duration-300 ease-in-out group/tech gap-2'
            >
              <span>{tech}</span>
              {/* Vertical divider */}
              <div className='h-full w-px bg-slate-500 group-last/tech:bg-transparent' />
            </div>
          );
        })}
      </div>
      {/* Github link */}
      <motion.a
        href={project.repo}
        target='_blank'
        className='hover:text-pink-500 group-hover:text-slate-50 transition-colors duration-500 ease-in-out text-slate-500'
        whileTap={{ scale: 0.95 }}
      >
        github
      </motion.a>
    </motion.div>
  );
};

export default Project;
