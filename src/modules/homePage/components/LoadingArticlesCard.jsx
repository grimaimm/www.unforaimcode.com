import React from 'react';

const LoadingArticlesCard = () => {
  return (
    <div className='flex h-max min-w-[272px] flex-col space-y-2 pb-[3px]'>
      <div className='h-[110px] w-full animate-pulse overflow-hidden rounded-xl bg-neutral-300 dark:bg-neutral-700'></div>
      <div className='h-4 w-[90%] animate-pulse rounded bg-neutral-300 dark:bg-neutral-700'></div>
      <div className='h-2 w-24 animate-pulse rounded bg-neutral-300 dark:bg-neutral-700'></div>
    </div>
  );
};

export default LoadingArticlesCard;
