import * as React from 'react';

export const PageBreakline = ({ className = '', ...others }) => {
  return (
    <div
      className={`my-4 border-t border-zinc-300 dark:border-zinc-700 ${className}`}
      data-testid='breakline'
      {...others}
    />
  );
};

export const Breakline = () => {
  return (
    <div
      className='mx-4 hidden border-t border-zinc-200 pb-1 pt-0 dark:border-zinc-700 lg:block'
      data-testid='breakline'
    />
  );
};
