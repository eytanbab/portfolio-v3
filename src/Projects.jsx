import { AnimatePresence, motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [hovered, setHovered] = useState(false);

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
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const hoverVariants = {
    hidden: { x: '-300px' },
    visible: { x: '0' },
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
        {/* Projects section */}
        <motion.div
          variants={childVariants}
          className='flex flex-col items-center justify-center rounded-md'
        >
          {/* Project */}
          <motion.div
            className='relative group overflow-hidden'
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <motion.h1 className='text-4xl'>Markdown Editor</motion.h1>
            {/* Underline */}
            <AnimatePresence>
              {hovered && (
                <motion.div
                  variants={hoverVariants}
                  initial='hidden'
                  animate={hovered ? 'visible' : 'hidden'} // can work without it idk how lol
                  exit={{ x: '300px' }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className='hidden xl:block absolute w-full left-0 bottom-0 h-0.5 rounded-full bg-pink-500 '
                />
              )}
            </AnimatePresence>
          </motion.div>
          <div className='mt-1 w-full flex gap-4 text-slate-300 '>
            <p className='hover:text-pink-500 transition-colors duration-300 ease-in-out'>
              Live site
            </p>
            <p className='hover:text-pink-500 transition-colors duration-300 ease-in-out'>
              github
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
