import { motion } from 'motion/react';

const Lines = () => {
  return (
    <>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: '-250vh' }}
        transition={{ delay: 2, duration: 0.9, ease: 'easeInOut' }}
        className='w-full h-1/3 overflow-hidden z-10 flex items-center justify-center  text-center'
      >
        <h1 className='text-7xl font-bold'>Fullstack Developer</h1>
      </motion.div>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: '250vh' }}
        transition={{ delay: 2, duration: 1.1, ease: 'easeInOut' }}
        className='w-full h-1/3 overflow-hidden z-10 flex items-center justify-center text-center bg-slate-50 text-slate-950'
      >
        <h1 className='text-7xl font-bold '>UX/UI Designer</h1>
      </motion.div>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: '-250vh' }}
        transition={{ delay: 2, duration: 1, ease: 'easeInOut' }}
        className='w-full h-1/3 overflow-hidden z-10 flex items-center justify-center  text-center'
      >
        <h1 className='text-7xl font-bold'>Music Producer</h1>
      </motion.div>
    </>
  );
};

export default Lines;
