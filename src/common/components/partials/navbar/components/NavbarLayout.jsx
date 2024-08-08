import * as React from 'react';

const NavbarLayout = ({ children, isOpen }) => {
  return (
    <div className="lg:hidden block">
      <div className="w-full">
        <div className={`
          navbar-layout fixed z-10 top-0 flex flex-col w-full px-2 justify-between text-zinc-700 border-b dark:border-zinc-800 border-zinc-200 dark:text-zinc-200 
          ${isOpen 
            ? 'backdrop-blur-none dark:bg-zinc-950 bg-zinc-50' 
            : 'backdrop-blur-md dark:bg-zinc-950/80 bg-zinc-50/80'}
          `}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default NavbarLayout;
