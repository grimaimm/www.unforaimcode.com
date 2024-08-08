import * as React from 'react';

const CustomButton = ({
  children,
  isLoading,
  className = '',
  icon,
  ...rest
}) => {
  return (
    <button
      className={`
        transition-all duration-300
        flex items-center gap-2 px-3 py-2 
        dark:text-zinc-400 text-zinc-600 hover:dark:text-zinc-300 hover:text-zinc-700
        bg-gradient-to-bl from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 
        hover:bg-gradient-to-b hover:dark:from-zinc-900 hover:dark:to-zinc-800 
        ${className}`}
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

export default CustomButton;
