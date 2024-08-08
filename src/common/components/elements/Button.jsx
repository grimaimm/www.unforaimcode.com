import * as React from 'react';

const Button = ({
  children,
  isLoading,
  className = '',
  icon,
  ...rest
}) => {
  return (
    <button
      // className={`flex items-center gap-2 rounded-lg bg-zinc-500 text-zinc-50 transition-all duration-300 hover:bg-zinc-600 dark:bg-zinc-600 dark:hover:bg-zinc-700 ${className}`}
      className={`flex items-center gap-2 rounded-lg transition-all duration-300 
        dark:text-zinc-300 text-zinc-600 
        border dark:border-zinc-600 border-zinc-300
        dark:hover:bg-zinc-700/80 dark:bg-zinc-800 hover:bg-zinc-200/80 bg-zinc-100 ${className}`}
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
