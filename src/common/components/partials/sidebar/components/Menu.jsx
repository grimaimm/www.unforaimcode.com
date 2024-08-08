import * as React from 'react';
import MenuItem from './MenuItem';

const Menu = ({ title, list }) => {
  return (
    <div className='flex flex-col space-y-1 mb-5 px-4 flex-grow pb-4 lg:pb-0 lg:overflow-y-auto max-md:min-h-screen'>
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
