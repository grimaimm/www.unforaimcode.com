import * as React from 'react';

const StatusAnimation = () => {
  return (
    <div className='relative flex items-center gap-1.5 border border-zinc-300 dark:border-zinc-700 rounded-full px-1.5 py-1'>
      <div className="h-2 w-2 rounded-full bg-green-400 animated-online"></div>
      <span className="text-xs text-zinc-700 dark:text-zinc-400 tracking-tight">Hire me.</span>
    </div>
  );
}

export default StatusAnimation;
