import * as React from 'react';
import SidebarLayout from './SidebarLayout';
import { MENU_ITEMS } from '@/common/constant/Menu';
import Menu from './Menu';
// import Copyright from './Copyright';
import Profile from './Profile';
import SearchBox from '@/common/components/elements/SearchBox';

const Sidebar = () => {
  const filteredMenu = MENU_ITEMS?.filter((item) => item?.isShow);
  return (
    <SidebarLayout>
      <Profile />
      <SearchBox />
      {/* <Breakline /> */}
      <Menu list={filteredMenu} />
      {/* <Copyright /> */}
    </SidebarLayout>
  );
};

export default Sidebar;
