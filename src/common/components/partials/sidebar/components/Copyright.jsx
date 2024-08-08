import * as React from 'react';

const Copyright = () => {
  return (
    <div className="hidden lg:flex items-center justify-center gap-1 text-sm text-zinc-600 px-5 my-5">
      <span>©</span>
      <span>2024</span>
      <span>with</span>
      <span className="text-red-500 animate-pulse">❤</span>
      <span>by</span>
      <a href="/" target="_blank" rel="noopener noreferrer">
        <span className="hover:dark:text-zinc-400 cursor-pointer">
          aiiimmmm._
        </span>
      </a>
    </div>
  );
};

export default Copyright;
