import { motion } from 'motion/react';

const Horizontal = () => {
  return (
    <>
      {/* Left */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: '-300vh' }}
        exit={{ opacity: 0 }}
        transition={{ delay: 1, duration: 1, ease: 'easeInOut' }}
        className='absolute top-0 w-full h-1/2 bg-slate-900 overflow-hidden z-10'
      >
        <h1 className='text-white text-7xl font-bold absolute bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2'>
          PORTFOLIO
        </h1>
      </motion.div>

      {/* Right */}
      <motion.div
        initial={{ x: '0vh' }}
        animate={{ x: '300vh' }}
        exit={{ opacity: 0 }}
        transition={{ delay: 1, duration: 1, ease: 'easeInOut' }}
        className='absolute bottom-0 w-full h-1/2 bg-slate-900 overflow-hidden z-10'
      >
        <h1 className='text-white text-7xl font-bold absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2'>
          PORTFOLIO
        </h1>
      </motion.div>
    </>
  );
};

export default Horizontal;
