import * as React from 'react';

const Copyright = () => {
  return (
    <div className='my-5 hidden items-center justify-center gap-1 px-5 text-sm text-zinc-600 lg:flex'>
      <span>©</span>
      <span>2024</span>
      <span>with</span>
      <span className='animate-pulse text-red-500'>❤</span>
      <span>by</span>
      <a href='/' target='_blank' rel='noopener noreferrer'>
        <span className='cursor-pointer hover:dark:text-zinc-400'>
          aiiimmmm._
        </span>
      </a>
    </div>
  );
};

export default Copyright;
