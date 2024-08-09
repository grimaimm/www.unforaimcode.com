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
      className={`flex items-center gap-2 bg-gradient-to-bl from-zinc-100 to-zinc-200 px-3 py-2 text-zinc-600 transition-all duration-300 hover:bg-gradient-to-b hover:text-zinc-700 dark:from-zinc-800 dark:to-zinc-900 dark:text-zinc-400 hover:dark:from-zinc-900 hover:dark:to-zinc-800 hover:dark:text-zinc-300 ${className}`}
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
