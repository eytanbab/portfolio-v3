import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { FaSoundcloud, FaYoutube } from 'react-icons/fa';

const Music = () => {
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
      id='music'
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
            music
          </motion.h1>
          <motion.div
            style={{
              width: isInView ? '100%' : '0%',
              transition: 'all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 1s',
            }}
            className='absolute bottom-0.5 w-full h-px rounded-full bg-pink-500'
          />
        </motion.div>
        <motion.p
          variants={childVariants}
          className='font-light text-slate-300'
        >
          I’ve been{' '}
          <span className='font-bold text-slate-50'>producing music</span> for
          over <span className='font-bold text-slate-50'>12 years,</span>{' '}
          starting with{' '}
          <span className='font-bold text-slate-50'>bigroom EDM</span> and later
          exploring <span className='font-bold text-slate-50'>psytrance</span>{' '}
          and <span className='font-bold text-slate-50'>techno.</span> While
          these are the main styles I create, I love{' '}
          <span className='font-bold text-slate-50'>experimenting</span> with
          different <span className='font-bold text-slate-50'>genres</span>{' '}
          depending on my mood. Exploring new sounds and ideas keeps me{' '}
          <span className='font-bold text-slate-50'></span> and helps inspired
          me grow as an <span className='font-bold text-slate-50'>artist.</span>
        </motion.p>

        {/* Links*/}
        <motion.div variants={childVariants} className='mt-4 w-full flex gap-4'>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href='https://soundcloud.com/7wells'
            target='_blank'
          >
            <FaSoundcloud
              size={40}
              className='fill-slate-300 hover:fill-orange-500 transition-colors duration-300 ease-in-out'
            />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href='https://youtube.com/@7wells323?si=zMIny7W6_Lss3ZbA'
            target='_blank'
          >
            <FaYoutube
              size={40}
              className='fill-slate-300 hover:fill-red-500 transition-colors duration-300 ease-in-out'
            />
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Music;
