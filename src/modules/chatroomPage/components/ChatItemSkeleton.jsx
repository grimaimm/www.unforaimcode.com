import * as React from 'react';

export default function ChatItemSkeleton() {
  return (
    <div id='chat-card' className='flex items-start space-x-3'>
      <div className='h-10 w-10 animate-pulse rounded-full bg-zinc-300 dark:bg-zinc-700' />
      <div className='flex w-[80%] flex-col space-y-1'>
        <div className='flex items-center space-x-3'>
          <div className='flex items-center space-x-1'>
            <span className='h-3 w-36 animate-pulse rounded bg-zinc-300 dark:bg-zinc-700' />
          </div>
          <span className='h-3 w-20 animate-pulse rounded bg-zinc-300 dark:bg-zinc-700' />
        </div>

        <div className='flex space-x-2'>
          <div className='h-14 w-full animate-pulse rounded-xl rounded-tl-none bg-zinc-300 font-sans dark:bg-zinc-800' />
        </div>
      </div>
    </div>
  );
}
