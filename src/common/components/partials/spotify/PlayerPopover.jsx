import * as React from 'react';
import { Popover, Transition } from '@headlessui/react';
import Image from 'next/image';

const PlayerPopover = ({ isShow, playing }) => {
  const { albumImageUrl, album, title, artist } = playing;

  return (
    <Transition
      as={React.Fragment}
      show={isShow}
      enter='transition ease-out duration-200'
      enterFrom='opacity-0 translate-y-1'
      enterTo='opacity-100 translate-y-0'
      leave='transition ease-in duration-150'
      leaveFrom='opacity-100 translate-y-0'
      leaveTo='opacity-0 translate-y-1'
    >
      <Popover.Panel className='absolute bottom-10 left-0 z-20 w-56'>
        <div className='flex flex-col gap-5 overflow-hidden rounded-lg bg-zinc-200 p-4 shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-zinc-800 dark:text-white'>
          {albumImageUrl && (
            <Image
              className='rounded-md'
              unoptimized
              alt={album}
              src={albumImageUrl}
              width={500}
              height={500}
            />
          )}

          <div className='space-y-2'>
            <div className='space-y-1'>
              <div className='text-[15px] text-green-500'>{title}</div>
              <div className='text-sm text-zinc-700 dark:text-zinc-300'>
                {artist}
              </div>
            </div>
            <div className='flex flex-col text-[13px]'>
              <span className='text-zinc-500 dark:text-zinc-500'>Album:</span>
              <span className='text-zinc-600 dark:text-zinc-400'>{album}</span>
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  );
};

export default PlayerPopover;
