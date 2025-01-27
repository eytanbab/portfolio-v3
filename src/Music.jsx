import {
  // AnimatePresence,
  motion,
  useInView,
} from 'motion/react';
import {
  useEffect,
  // useState
} from 'react';
import {
  // FaArrowLeft,
  // FaArrowRight,
  FaSoundcloud,
  FaYoutube,
} from 'react-icons/fa';
// import { tracks } from '../data';
// import Track from './Track';
// import { wrap } from 'motion';

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

// const variants = {
//   enter: (direction) => {
//     return {
//       x: direction > 0 ? 1000 : -1000,
//       opacity: 0,
//     };
//   },
//   center: {
//     zIndex: 1,
//     x: 0,
//     opacity: 1,
//   },
//   exit: (direction) => {
//     return {
//       zIndex: 0,
//       x: direction < 0 ? 1000 : -1000,
//       opacity: 0,
//     };
//   },
// };

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
// const swipeConfidenceThreshold = 10000;
// const swipePower = (offset, velocity) => {
//   return Math.abs(offset) * velocity;
// };

// eslint-disable-next-line react/prop-types
const Music = ({ musicRef, setActive }) => {
  const activeInView = useInView(musicRef);
  const isInView = useInView(musicRef, { once: true });
  // const [[page, direction], setPage] = useState([0, 0]);

  // const trackIndex = wrap(0, tracks.length, page);

  // const paginate = (newDirection) => {
  //   setPage([page + newDirection, newDirection]);
  // };

  useEffect(() => {
    activeInView ? setActive('music') : null;
  }, [activeInView, setActive]);

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
        className='w-96 max-w-96 flex flex-col items-start gap-2'
      >
        {/* Title */}
        <motion.div className='relative w-fit' variants={childVariants}>
          <motion.h1 ref={musicRef} className='text-2xl'>
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

        {/* Tracks carousel */}
        {/* <motion.div
          variants={childVariants}
          className='w-full relative h-[196px] flex items-center justify-center'
        > */}
        {/* <AnimatePresence initial={false} custom={direction}>
            <motion.div className='absolute w-72 flex items-center flex-col'>
              <motion.div
                key={tracks[trackIndex]}
                custom={direction}
                variants={variants}
                initial='enter'
                animate='center'
                exit='exit'
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag='x'
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
              >
                <Track track={tracks[trackIndex]} />
              </motion.div> */}

        {/* Track pagination indicator */}
        {/* <motion.div
                key={tracks}
                className='relative self-center flex items-center gap-2 justify-center'
              >
                {tracks.map((_, i) => (
                  <motion.div
                    key={i}
                    className='bg-slate-500 size-2 rounded-full'
                  />
                ))} */}
        {/* Current index indicator */}
        {/* <motion.div
                  layoutId='selected'
                  style={{ left: `${16 * trackIndex}px` }}
                  className={`
                    size-2 rounded-full bg-pink-500 absolute top-0 bottom-0 left-0`}
                />
              </motion.div>
            </motion.div>
          </AnimatePresence> */}

        {/* Left Arrow */}
        {/* <motion.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3, ease: 'easeInOut' },
            }}
            whileTap={{ scale: 0.9 }}
            className='absolute text-6xl bg-slate-800 rounded-full size-8 left-0 flex items-center justify-center hover:cursor-pointer hover:bg-pink-500 transition-colors duration-300 ease-in-out'
            onClick={() => paginate(-1)}
          >
            <FaArrowLeft size={16} />
          </motion.div> */}

        {/* Right Arrow */}
        {/* <motion.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3, ease: 'easeInOut' },
            }}
            whileTap={{ scale: 0.9 }}
            className='absolute text-6xl bg-slate-800 rounded-full size-8 right-0 flex items-center justify-center hover:cursor-pointer hover:bg-pink-500 transition-colors duration-300 ease-in-out'
            onClick={() => paginate(1)}
          >
            <FaArrowRight size={16} />
          </motion.div>
        </motion.div> */}

        {/* Links*/}
        <motion.div
          variants={childVariants}
          className='mt-8 w-full flex gap-4 items-center justify-center'
        >
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href='https://youtube.com/@7wells323?si=zMIny7W6_Lss3ZbA'
            target='_blank'
          >
            <FaYoutube
              size={40}
              className='fill-slate-300 hover:fill-[#FF0033] transition-colors duration-300 ease-in-out'
            />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href='https://soundcloud.com/7wells'
            target='_blank'
          >
            <FaSoundcloud
              size={40}
              className='fill-slate-300 hover:fill-[#FF6300] transition-colors duration-300 ease-in-out'
            />
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Music;
