import * as React from 'react';

const SidebarLayout = ({ children }) => {
  return (
    <div className="sidebar-view lg:block hidden">
      <div className="lg:flex flex-col lg:flex-row lg:min-h-screen w-full">
        <div className="fixed lg:left-0 top-0 lg:bottom-0 flex flex-col w-full lg:w-64 bg-zinc-50 dark:bg-zinc-950 text-zinc-700 dark:text-zinc-300 dark:shadow-[0_3px_10px_rgba(39,39,42)] flex-shrink-0 shadow-[0_3px_10px_rgba(24,24,27,0.2)] lg:rounded-r-3xl">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SidebarLayout;
