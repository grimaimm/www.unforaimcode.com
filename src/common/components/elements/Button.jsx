import * as React from 'react';

const Button = ({ children, isLoading, className = '', icon, ...rest }) => {
  return (
    <button
      className={`flex items-center gap-2 border border-zinc-300 bg-zinc-100 text-zinc-600 transition-all duration-300 hover:bg-zinc-200/80 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700/80 ${className}`}
      {...rest}
    >
      {isLoading ? (
        <>Loading...</>
      ) : (
        <>
          {icon && <>{icon}</>}
          {children}
        </>
      )}
    </button>
  );
};

export default Button;
