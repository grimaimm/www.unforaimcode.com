// Komponen SearchBox
import * as React from 'react';
import { BiCommand as CommandIcon } from 'react-icons/bi';
import { FiSearch } from 'react-icons/fi';

import { CommandPaletteContext } from '@/common/context/CommandPaletteContext';

const SearchBox = () => {
  const { setIsOpen } = React.useContext(CommandPaletteContext);

  const handleOpenCommandPalette = () => setIsOpen(true);

  return (
    <div className='mx-4 mb-3 flex items-center gap-3 rounded-lg border-[1.8px] border-zinc-300 bg-zinc-100 px-3 py-1 text-zinc-500 backdrop-blur dark:border-zinc-700 dark:bg-zinc-900 max-lg:mx-0'>
      <FiSearch size={28} />
      <span
        onClick={() => handleOpenCommandPalette()}
        className='w-full text-[15px] hover:cursor-text'
      >
        Search
      </span>
      <div className='flex items-center gap-0.5 rounded bg-zinc-200 px-1 py-0.5 text-xs dark:bg-zinc-800'>
        <CommandIcon className='mt-0.5' />
        <span>k</span>
      </div>
    </div>
  );
};

export default SearchBox;
