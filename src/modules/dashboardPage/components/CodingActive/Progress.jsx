import { motion } from 'framer-motion';

import cn from '@/common/libs/cn';

const Progress = ({ data, className }) => {
  const { name, percent = 0 } = data;

  const progressVariants = {
    initial: { width: 0 },
    animate: {
      width: `${percent}%`,
      transition: { delay: 0.8 },
    },
  };

  return (
    <div className='flex items-center justify-between gap-3'>
      <div className='w-24'>{name}</div>
      <div className='relative flex h-3 flex-1 justify-center rounded-full bg-neutral-200 dark:bg-neutral-800'>
        <motion.span
          initial='initial'
          animate='animate'
          variants={progressVariants}
          className={cn(
            className,
            'absolute left-0 top-0 h-3 rounded-full px-3',
          )}
        >
          &ensp;
        </motion.span>
      </div>
      <div className='w-8 text-right text-neutral-600 dark:text-neutral-100'>
        {percent.toFixed(0)}%
      </div>
    </div>
  );
};

export default Progress;
