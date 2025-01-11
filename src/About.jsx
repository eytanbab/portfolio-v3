import { motion, useInView } from 'motion/react';
import { useEffect } from 'react';
import CTA from './CTA';

// eslint-disable-next-line react/prop-types
const About = ({ aboutRef, setActive }) => {
  const activeInView = useInView(aboutRef);
  const isInView = useInView(aboutRef, { once: true });

  useEffect(() => {
    activeInView ? setActive('about') : null;
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

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeInOut' },
    },
  };

  const aboutParentVariants = {
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

  return (
    <motion.div
      id='about'
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
        <motion.div className='relative' variants={childVariants}>
          <motion.h1 ref={aboutRef} className='text-2xl'>
            about
          </motion.h1>
          <motion.div
            style={{
              width: isInView ? '100%' : '0%',
              transition: 'all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 1s',
            }}
            className='absolute bottom-0.5 w-full h-px rounded-full bg-pink-500'
          />
        </motion.div>
        {/* About me section */}
        <motion.div variants={aboutParentVariants}>
          <motion.div variants={childVariants}>
            <motion.p className='font-light text-slate-300'>
              Hi, I’m <span className='font-medium text-slate-50'>Ethan</span> -{' '}
              <span className='font-medium text-slate-50'>
                a Fullstack developer
              </span>{' '}
              with a{' '}
              <span className='font-medium text-slate-50'>
                BSc in Software Engineering.
              </span>{' '}
            </motion.p>
            <motion.p className='font-light text-slate-300'>
              I build{' '}
              <span className='font-medium text-slate-50'>
                user-friendly web applications
              </span>{' '}
              starting from{' '}
              <span className='font-medium text-slate-50'>
                UX/UI design in Figma,
              </span>{' '}
              to development with{' '}
              <span className='font-medium text-slate-50'>
                Typescript, React, and Next.js.
              </span>
            </motion.p>

            <motion.p className='font-light text-slate-300'>
              I have been also passionate about{' '}
              <span className='font-medium text-slate-50'>music</span> for as
              long as I can remember, and I’ve been{' '}
              <span className='font-medium text-slate-50'>producing music</span>{' '}
              for the past{' '}
              <span className='font-medium text-slate-50'>12 years.</span>
            </motion.p>

            <motion.p className='font-light text-slate-300'>
              I’m currently{' '}
              <span className='font-medium text-slate-50'>
                looking for a job
              </span>{' '}
              where I can apply my{' '}
              <span className='font-medium text-slate-50'>skills </span> and{' '}
              <span className='font-medium text-slate-50'>passion</span> to
              create{' '}
              <span className='font-medium text-slate-50'>
                impactful digital experiences.
              </span>
            </motion.p>

            {/* Divider */}
            <motion.div className='mt-1 flex gap-1 w-full items-center'>
              <div className='bg-slate-600/75 flex-1 h-px' />
              <div className='bg-slate-600 size-1 rounded-full' />
              <div className='bg-slate-600/75 flex-1 h-px' />
            </motion.div>
          </motion.div>

          {/* Work experience */}
          <motion.div
            variants={childVariants}
            className='flex flex-col items-start gap-2 w-full'
          >
            {/* Job title */}
            <motion.div className='text-slate-50 w-full'>
              <motion.h1 className='font-medium'>
                LLM Code Refactoring Engineer
              </motion.h1>
              <motion.div className='flex justify-between w-full'>
                <p className='text-sm'>MLG International</p>
                <p className='text-xs font-light '>Apr. 2024 - current</p>
              </motion.div>
            </motion.div>
            {/* Job description */}
            <motion.ul className='text-sm space-y-1 text-slate-200'>
              <li className='ml-4 list-disc font-light'>
                <span className='text-slate-50 font-medium'>Review</span> and{' '}
                <span className='text-slate-50 font-medium'>
                  correct code generated by LLMs
                </span>{' '}
                across multiple <span></span>
                <span className='text-slate-50 font-medium'>
                  programming languages and frameworks,
                </span>{' '}
                including{' '}
                <span className='text-slate-50 font-medium'>
                  Python, JavaScript, React,
                </span>{' '}
                and more.
              </li>
              <li className='ml-4 list-disc'>
                <span className='text-slate-50 font-medium'>Ensure</span> the
                <span className='text-slate-50 font-medium'>
                  {' '}
                  accuracy, efficiency, and functionality
                </span>{' '}
                of{' '}
                <span className='text-slate-50 font-medium'>
                  LLM generated code
                </span>{' '}
                by <span className='text-slate-50 font-medium'>debugging</span>{' '}
                and{' '}
                <span className='text-slate-50 font-medium'>optimizing</span>{' '}
                it.
              </li>
            </motion.ul>
            {/* Divider */}
            <motion.div className='flex gap-1 w-full items-center'>
              <div className='bg-slate-600/75 flex-1 h-px' />
              <div className='bg-slate-600 size-1 rounded-full' />
              <div className='bg-slate-600/75 flex-1 h-px' />
            </motion.div>
          </motion.div>

          {/* College and courses */}
          {/* SCE */}
          <motion.div variants={childVariants} className='w-full'>
            <motion.div className='text-slate-50 w-full'>
              <motion.h1 className='font-medium'>
                BSc in Software Engineering
              </motion.h1>
              <motion.div className='flex justify-between w-full'>
                <p className='text-xs'>
                  SCE - Sami Shamoon College of Engineering
                </p>
                <p className='text-xs font-light'>Oct 2019 – Sep 2023</p>
              </motion.div>
              <p className='text-sm font-light mt-1'>
                Be&apos;er Sheva, Israel
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div variants={childVariants} className='mt-8 w-full'>
          <CTA scrollToElement={'projects'}>projects</CTA>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
