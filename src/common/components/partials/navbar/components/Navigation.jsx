import * as React from 'react';
import SearchBox from '@/common/components/elements/SearchBox';
import Menu from './Menu';
import { MENU_ITEMS } from '@/common/constant/Menu';
import { AnimatePresence } from 'framer-motion';

const Navigation = ({ isOpen }) => {
  const filteredMenu = MENU_ITEMS?.filter((item) => item?.isShow);

  return (
    <AnimatePresence>
      {isOpen && (
        <nav
          className={`flex-grow flex-col px-2 pb-4 max-[414px]:px-1 lg:pb-0 ${isOpen ? 'flex' : 'hidden'} max-md:min-h-screen lg:flex lg:flex-row`}
        >
          <div className='max-tabs:fade-in-top relative z-40'>
            <div className='space-y-5'>
              <SearchBox />
            </div>
            <div
              className='block border-t border-zinc-300 pb-2 dark:border-zinc-700 lg:hidden'
              data-testid='breakline'
            ></div>
            <Menu list={filteredMenu} />
          </div>
        </nav>
      )}
    </AnimatePresence>
  );
};

export default Navigation;
