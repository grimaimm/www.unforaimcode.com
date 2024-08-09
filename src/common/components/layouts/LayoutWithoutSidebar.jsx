import * as React from 'react';
import Navbar from '../partials/navbar';
import Header from '../partials/header';

const LayoutWithoutSidebar = ({ children }) => {
  return (
    <>
      <div className='lg:dark:bg-dark-wrapper--nosidebar'></div>
      <div className='layout flex flex-col items-stretch'>
        <header className='header'>
          <Navbar />
          <Header />
        </header>
        <main className='main'>{children}</main>
      </div>
    </>
  );
};

export default LayoutWithoutSidebar;
