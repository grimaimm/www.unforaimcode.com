import * as React from 'react';
import MenuItem from './MenuItem';

const Menu = ({ title, list }) => {
  return (
    <div className='flex flex-grow flex-col space-y-1 px-0 pb-4 max-md:min-h-screen lg:overflow-y-auto lg:pb-0'>
      {title && (
        <div className='mb-2 ml-2 mt-1 hidden text-sm text-zinc-600 dark:text-zinc-500 lg:block'>
          {title}
        </div>
      )}
      {list?.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}
    </div>
  );
};

export default Menu;
