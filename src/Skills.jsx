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
        staggerChildren: 1,
        duration: 0.5,
        ease: 'easeInOut',
      },
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
        <FaReact size={40} />
        <RiNextjsLine size={40} />
        <RiTailwindCssFill size={40} />
        <TbBrandFramerMotion size={40} />
        <TbBrandTypescript size={40} />
        <DiPostgresql size={40} />
        <SiExpress size={40} />
        <AiOutlinePython size={40} />
        <FaFigma size={40} />
        <FaGitAlt size={40} />
        <SiPostman size={40} />
        <LiaJira size={40} />
      </motion.div>
    </motion.div>
  );
};

export default Skills;
