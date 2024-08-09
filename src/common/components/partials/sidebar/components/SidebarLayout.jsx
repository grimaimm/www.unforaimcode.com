import * as React from 'react';

const SidebarLayout = ({ children }) => {
  return (
    <div className='sidebar-view hidden lg:block'>
      <div className='w-full flex-col lg:flex lg:min-h-screen lg:flex-row'>
        <div className='fixed top-0 flex w-full flex-shrink-0 flex-col bg-zinc-50 text-zinc-700 shadow-[0_3px_10px_rgba(24,24,27,0.2)] dark:bg-zinc-950 dark:text-zinc-300 dark:shadow-[0_3px_10px_rgba(39,39,42)] lg:bottom-0 lg:left-0 lg:w-64 lg:rounded-r-3xl'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default SidebarLayout;
