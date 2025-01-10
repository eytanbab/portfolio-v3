import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { AiOutlinePython } from 'react-icons/ai';
import { DiPostgresql } from 'react-icons/di';
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
      className='w-full h-screen flex flex-col items-center justify-center'
    >
      {/* Wrapper */}
      <motion.div
        ref={ref}
        variants={parentVariants}
        initial='hidden'
        animate={isInView ? 'visible' : 'hidden'}
        className='w-96 grid grid-cols-4 gap-12 place-items-center text-slate-50 '
      >
        <motion.div>
          <FaReact size={40} />
        </motion.div>
        <motion.div variants={childVariants}>
          <RiNextjsLine size={40} />
        </motion.div>
        <motion.div variants={childVariants}>
          <RiTailwindCssFill size={40} />
        </motion.div>
        <motion.div variants={childVariants}>
          <TbBrandFramerMotion size={40} />
        </motion.div>
        <motion.div variants={childVariants}>
          <TbBrandTypescript size={40} />
        </motion.div>
        <motion.div variants={childVariants}>
          <DiPostgresql size={40} />
        </motion.div>
        <motion.div variants={childVariants}>
          <SiExpress size={40} />
        </motion.div>
        <motion.div variants={childVariants}>
          <AiOutlinePython size={40} />
        </motion.div>
        <motion.div variants={childVariants}>
          <FaFigma size={40} />
        </motion.div>
        <motion.div variants={childVariants}>
          <FaGitAlt size={40} />
        </motion.div>
        <motion.div variants={childVariants}>
          <SiPostman size={40} />
        </motion.div>
        <motion.div variants={childVariants}>
          <LiaJira size={40} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
