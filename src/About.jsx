import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { CTA } from './CTA';

const About = () => {
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
      id='about'
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
        <motion.p
          variants={childVariants}
          className='font-light text-slate-300'
        >
          Hi, I’m Ethan, a{' '}
          <span className='font-bold text-slate-50'>software engineer</span>{' '}
          with a{' '}
          <span className='font-bold text-slate-50'>
            BSc in Software Engineering.
          </span>{' '}
          I’ve been building{' '}
          <span className='font-bold text-slate-50'>
            user-friendly web applications
          </span>{' '}
          with tools like{' '}
          <span className='font-bold text-slate-50'>
            React, Next.js, and TypeScript,
          </span>{' '}
          creating projects like a{' '}
          <span className='font-bold text-slate-50'>
            financial tracker, markdown editor
          </span>{' '}
          and a{' '}
          <span className='font-bold text-slate-50'>
            job application tracker
          </span>{' '}
          from scratch. I’m also exploring{' '}
          <span className='font-bold text-slate-50'>UX/UI design,</span> with
          recent work including a{' '}
          <span className='font-bold text-slate-50'>
            Spotify remake in Figma.
          </span>{' '}
          In addition to my technical skills, I’ve been{' '}
          <span className='font-bold text-slate-50'>producing music</span> for
          the past <span className='font-bold text-slate-50'>10 years.</span>{' '}
          I’m currently{' '}
          <span className='font-bold text-slate-50'>looking for a job</span>{' '}
          where I can apply my skills and passion to create{' '}
          <span className='font-bold text-slate-50'>
            impactful digital experiences.
          </span>
        </motion.p>
        <motion.div className='mt-8 w-full' variants={childVariants}>
          <CTA scrollToElement={'projects'}>projects</CTA>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
