import * as React from 'react';
import Sidebar from '../partials/sidebar';
import Navbar from '../partials/navbar';

const LayoutWithSidebar = ({ children }) => {
  return (
    <>
      <div className='lg:dark:bg-dark-wrapper--sidebar'></div>
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
