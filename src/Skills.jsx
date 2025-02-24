import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { AiOutlinePython } from 'react-icons/ai';
import { SiPostgresql } from 'react-icons/si';
import { FaFigma, FaGitAlt, FaReact } from 'react-icons/fa6';
import { LiaJira } from 'react-icons/lia';
import { RiNextjsLine, RiTailwindCssFill } from 'react-icons/ri';
import { SiExpress, SiPostman } from 'react-icons/si';
import { TbBrandFramerMotion, TbBrandTypescript } from 'react-icons/tb';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const parentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      id='skills'
      className='w-full flex flex-col items-center justify-center'
    >
      {/* Wrapper */}
      <motion.div
        ref={ref}
        variants={parentVariants}
        initial='hidden'
        animate={isInView ? 'visible' : 'hidden'}
        className='w-96 max-w-96 grid grid-cols-4 gap-4 place-items-center text-slate-50 mt-8'
      >
        <motion.div
          variants={childVariants}
          className='flex flex-col gap-1 items-center'
        >
          <FaReact size={32} />
          <span className='text-sm'>React</span>
        </motion.div>
        <motion.div
          className='flex flex-col gap-1 items-center'
          variants={childVariants}
        >
          <RiNextjsLine size={32} />
          <span className='text-sm'>Next.js</span>
        </motion.div>
        <motion.div
          className='flex flex-col gap-1 items-center'
          variants={childVariants}
        >
          <RiTailwindCssFill size={32} />
          <span className='text-sm'>Tailwind</span>
        </motion.div>
        <motion.div
          className='flex flex-col gap-1 items-center'
          variants={childVariants}
        >
          <TbBrandFramerMotion size={32} />
          <span className='text-sm'>Framer</span>
        </motion.div>
        <motion.div
          className='flex flex-col gap-1 items-center'
          variants={childVariants}
        >
          <TbBrandTypescript size={32} />
          <span className='text-sm'>Typescript</span>
        </motion.div>
        <motion.div
          className='flex flex-col gap-1 items-center'
          variants={childVariants}
        >
          <SiPostgresql size={32} />
          <span className='text-sm'>PostgreSQL</span>
        </motion.div>
        <motion.div
          className='flex flex-col gap-1 items-center'
          variants={childVariants}
        >
          <SiExpress size={32} />
          <span className='text-sm'>Express</span>
        </motion.div>
        <motion.div
          className='flex flex-col gap-1 items-center'
          variants={childVariants}
        >
          <AiOutlinePython size={32} />
          <span className='text-sm'>Python</span>
        </motion.div>
        <motion.div
          className='flex flex-col gap-1 items-center'
          variants={childVariants}
        >
          <FaFigma size={32} />
          <span className='text-sm'>Figma</span>
        </motion.div>
        <motion.div
          className='flex flex-col gap-1 items-center'
          variants={childVariants}
        >
          <FaGitAlt size={32} />
          <span className='text-sm'>Git</span>
        </motion.div>
        <motion.div
          className='flex flex-col gap-1 items-center'
          variants={childVariants}
        >
          <SiPostman size={32} />
          <span className='text-sm'>Postman</span>
        </motion.div>
        <motion.div
          className='flex flex-col gap-1 items-center'
          variants={childVariants}
        >
          <LiaJira size={32} />
          <span className='text-sm'>Jira</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
