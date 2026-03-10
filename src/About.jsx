import { motion, useInView } from 'motion/react';
import { useEffect } from 'react';
import CTA from './CTA';
import { education, experience } from '../data';

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
      className='min-h-screen w-full flex flex-col items-center justify-center scroll-mt-20'
    >
      {/* Wrapper */}
      <motion.div
        variants={parentVariants}
        initial='hidden'
        animate={isInView ? 'visible' : 'hidden'}
        className='w-full max-w-96 flex flex-col items-start gap-2'
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
        {/* About Me Section */}
        <motion.div
          variants={aboutParentVariants}
          className='flex flex-col gap-2'
        >
          <motion.div
            variants={childVariants}
            className='flex flex-col gap-2 text-slate-300'
          >
            <motion.p>
              Hi, I’m Ethan, a Frontend Developer with a BSc in Software
              Engineering.
            </motion.p>
            <motion.p>
              I focus on frontend development, building web apps using
              TypeScript, React, and Next.js, with a background in backend
              technologies like Express and PostgreSQL.
            </motion.p>
            <motion.p>
              When I’m not coding, I’m working on music production, a passion
              I’ve had for 12 years.
            </motion.p>
            <motion.p>
              I’m currently seeking a frontend-oriented role where I can
              contribute, continue learning, and collaborate with a team.
            </motion.p>
          </motion.div>

          {/* Divider */}
          <motion.div
            variants={childVariants}
            className='my-1 flex gap-1 w-full items-center'
          >
            <div className='bg-slate-600/75 flex-1 h-px' />
            <div className='bg-slate-600 size-1 rounded-full' />
            <div className='bg-slate-600/75 flex-1 h-px' />
          </motion.div>

          {/* Work Experience */}
          <motion.div
            variants={childVariants}
            key='button'
            className='flex flex-col items-start gap-1 w-full'
          >
            {experience.map((exp) => (
              <motion.div key={exp.title} className='text-slate-50 w-full'>
                <motion.h1 className='font-medium'>{exp.title}</motion.h1>
                <motion.div className='flex justify-between w-full text-slate-300'>
                  <p className='text-sm'>{exp.company}</p>
                  <p className='text-xs font-light'>
                    {exp.from} – {exp.to}
                  </p>
                </motion.div>
                <motion.ul className='text-sm space-y-2 text-slate-300 mt-2'>
                  {exp.responsibilities.map((resp) => (
                    <li key={resp} className='ml-4 list-disc'>
                      {resp}
                    </li>
                  ))}
                </motion.ul>
                <motion.div />
              </motion.div>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div
            variants={childVariants}
            className='my-1 flex gap-1 w-full items-center'
          >
            <div className='bg-slate-600/75 flex-1 h-px' />
            <div className='bg-slate-600 size-1 rounded-full' />
            <div className='bg-slate-600/75 flex-1 h-px' />
          </motion.div>

          {/* Education */}
          <motion.div variants={childVariants} className='w-full mt-1'>
            <motion.div className='flex flex-col gap-2'>
              {education.map((edu) => (
                <motion.div key={edu.title} className='text-slate-50 w-full'>
                  <motion.h1 className='font-medium'>{edu.title}</motion.h1>
                  <motion.div className='flex justify-between w-full text-slate-300'>
                    <p className='text-xs'>{edu.constitute}</p>
                    <p className='text-xs font-light'>
                      {edu.from} – {edu.to}
                    </p>
                  </motion.div>
                  <p className='text-sm font-light mt-1'>{edu.place}</p>
                </motion.div>
              ))}
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
