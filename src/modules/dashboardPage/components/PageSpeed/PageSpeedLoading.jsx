import React from 'react';
import { BsThreeDots } from 'react-icons/bs';

export default function PageSpeedLoading({ className = '' }) {
  return (
    <div
      className={`relative flex flex-wrap items-center justify-center gap-6 md:gap-20${className}`}
    >
      {[1, 2, 3, 4].map((item) => (
        <div
          key={item}
          className='relative flex h-auto w-[60px] flex-col items-center gap-3 pb-1 pt-0.5 md:w-[70px]'
        >
          <div className='h-[58px] w-[58px] animate-pulse rounded-full bg-zinc-300 p-[6px] dark:bg-zinc-700 md:h-[68px] md:w-[68px] md:p-[6.5px]'>
            <div className='flex h-full w-full items-center justify-center rounded-full bg-white dark:bg-zinc-900'>
              <BsThreeDots />
            </div>
          </div>
          <div className='h-3 w-16 animate-pulse rounded-full bg-zinc-300 dark:bg-zinc-700 md:w-[82px]'></div>
        </div>
      ))}
    </div>
  );
}
