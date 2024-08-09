import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaRegEye as ViewIcon } from 'react-icons/fa';
import { HiOutlineClock as ClockIcon } from 'react-icons/hi';
import { formatDate } from '@/common/helpers';
import { FiArrowUpCircle as ArrowUpIcon } from 'react-icons/fi';

const titleVariants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
};

const transition = {
  duration: 0.3,
  ease: 'easeInOut',
};

// const bounceVariants = {
//   animate: {
//     y: [0, -5, 0],
//     transition: {
//       duration: 0.8,
//       repeat: Infinity,
//       repeatType: "loop",
//       ease: "easeInOut",
//     },
//   },
// };

const BlogHeader = ({
  title,
  total_views,
  published,
  reading_time_minutes,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLgScreen, setIsLgScreen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsLgScreen(true);
      } else {
        setIsLgScreen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Check initial screen size
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {!isScrolled ? (
        <motion.h1
          className='text-2xl font-semibold'
          initial='initial'
          animate='animate'
          variants={titleVariants}
          transition={transition}
        >
          {title}
        </motion.h1>
      ) : (
        isLgScreen && (
          <motion.div
            className='shadow-bottom header-title-sticky fixed left-0 right-0 top-0 z-10 mx-auto bg-zinc-50 pt-6 dark:bg-zinc-950'
            initial='initial'
            animate='animate'
            variants={titleVariants}
            transition={transition}
          >
            <div className='mx-auto flex items-center justify-between'>
              <h1 className='text-lg font-semibold lg:text-xl'>{title}</h1>
              <button
                id='Scroll to Top'
                type='button'
                aria-label='Scroll to Top'
                data-umami-event='Scroll to Top'
                className='justify-centeritems-center flex cursor-pointer rounded-full text-sm font-medium text-zinc-600 dark:text-zinc-400'
                onClick={scrollToTop}
              >
                <ArrowUpIcon size={24} />
                <span className='sr-only'>Scroll to Top</span>
              </button>
            </div>
            <div
              className='shadow-bottom mt-6 border-b border-zinc-300 dark:border-zinc-700'
              data-testid='breakline'
            />
          </motion.div>
        )
      )}
      <div className='mb-6 flex flex-col justify-between gap-2 border-b border-dashed border-zinc-600 pb-6 pt-5 text-[14px] text-zinc-600 dark:text-zinc-400 sm:flex-row'>
        <div>
          Published on
          <span className='px-1 font-medium'>
            {published ? formatDate(published) : ''}
          </span>
        </div>

        <div className='flex items-center gap-5'>
          <div className='flex items-center gap-1 font-medium'>
            <ViewIcon size={16} />
            <div className='ml-0.5 flex gap-1'>
              <span>{total_views?.toLocaleString() || '-'}</span>
              <span>Views</span>
            </div>
          </div>
          <div className='flex items-center gap-1 font-medium'>
            <ClockIcon size={16} />
            <div className='ml-0.5 flex gap-1'>
              <span>{reading_time_minutes}</span>
              <span>Minutes Read</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogHeader;
