import * as React from 'react';

const StatusAnimation = () => {
  return (
    <div className='relative flex items-center gap-1.5 rounded-full border border-zinc-300 px-1.5 py-1 dark:border-zinc-700'>
      <div className='animated-online h-2 w-2 rounded-full bg-green-400'></div>
      <span className='text-xs tracking-tight text-zinc-700 dark:text-zinc-400'>
        Hire me.
      </span>
    </div>
  );
};

export default StatusAnimation;
