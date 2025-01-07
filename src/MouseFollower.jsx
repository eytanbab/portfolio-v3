import { motion } from 'motion/react';

// eslint-disable-next-line react/prop-types
const MouseFollower = ({ cursorPosition }) => {
  console.log( cursorPosition );
  return (
    <motion.div
      className='pointer-events-none absolute z-50 mix-blend-difference'
      animate={{
        x: cursorPosition.x - 12, // Center horizontally
        y: cursorPosition.y - 12, // Center vertically
      }}
      transition={{
        type: 'tween',
        duration: 0.1,
      }}
      style={{
        width: '24px',
        height: '24px',
        borderRadius: '50%',
        backgroundColor: 'white',
      }}
    />
  );
};

export default MouseFollower;
