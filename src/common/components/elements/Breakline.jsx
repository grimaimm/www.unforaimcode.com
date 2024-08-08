import * as React from 'react';

export const PageBreakline = ({ className = '', ...others }) => {
  return (
    <div
      className={`my-4 border-t border-zinc-300 dark:border-zinc-700 ${className}`}
      data-testid="breakline"
      {...others}
    />
  );
};

export const Breakline = () => {
  return (
    <div
      className="border-t border-zinc-200 pt-0 mx-4 pb-1 hidden lg:block dark:border-zinc-700"
      data-testid="breakline"
    />
  );
};



