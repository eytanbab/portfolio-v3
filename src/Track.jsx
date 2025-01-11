/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from 'motion/react';

const Track = ({ track }) => {
  return (
    <AnimatePresence mode='wait'>
      <motion.div key={track.link}>
        <iframe
          className='-z-10'
          width='100%'
          height='180px'
          src={track.link}
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          allowFullScreen
        ></iframe>
      </motion.div>
    </AnimatePresence>
  );
};

export default Track;
