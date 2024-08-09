import * as React from 'react';

const NavbarLayout = ({ children, isOpen }) => {
  return (
    <div className='block lg:hidden'>
      <div className='w-full'>
        <div
          className={`navbar-layout fixed top-0 z-10 flex w-full flex-col justify-between border-b border-zinc-200 px-2 text-zinc-700 dark:border-zinc-800 dark:text-zinc-200 ${
            isOpen
              ? 'bg-zinc-50 backdrop-blur-none dark:bg-zinc-950'
              : 'bg-zinc-50/80 backdrop-blur-md dark:bg-zinc-950/80'
          } `}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default NavbarLayout;
