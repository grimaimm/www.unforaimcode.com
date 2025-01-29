import * as React from 'react';
import Sidebar from '../partials/sidebar';
import Navbar from '../partials/navbar';

const LayoutWithSidebar = ({ children }) => {
  return (
    <>
      <div className='lg:dark:bg-dark-wrapper--sidebar'></div>
      <div className='absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808018_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_0%,#000_80%,transparent_100%)]'></div>
      <div className='layout flex flex-col items-stretch lg:flex-row'>
        <aside className='aside'>
          <Sidebar />
          <Navbar />
        </aside>
        <main className='main'>{children}</main>
      </div>
    </>
  );
};

export default LayoutWithSidebar;
