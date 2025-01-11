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
        className='w-96 max-w-96 grid grid-cols-6 gap-6 place-items-center text-slate-50 mt-8'
      >
        <motion.div variants={childVariants}>
          <FaReact size={32} />
        </motion.div>
        <motion.div variants={childVariants}>
          <RiNextjsLine size={32} />
        </motion.div>
        <motion.div variants={childVariants}>
          <RiTailwindCssFill size={32} />
        </motion.div>
        <motion.div variants={childVariants}>
          <TbBrandFramerMotion size={32} />
        </motion.div>
        <motion.div variants={childVariants}>
          <TbBrandTypescript size={32} />
        </motion.div>
        <motion.div variants={childVariants}>
          <SiPostgresql size={32} />
        </motion.div>
        <motion.div variants={childVariants}>
          <SiExpress size={32} />
        </motion.div>
        <motion.div variants={childVariants}>
          <AiOutlinePython size={32} />
        </motion.div>
        <motion.div variants={childVariants}>
          <FaFigma size={32} />
        </motion.div>
        <motion.div variants={childVariants}>
          <FaGitAlt size={32} />
        </motion.div>
        <motion.div variants={childVariants}>
          <SiPostman size={32} />
        </motion.div>
        <motion.div variants={childVariants}>
          <LiaJira size={32} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
