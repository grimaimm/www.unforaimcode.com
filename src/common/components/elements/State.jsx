import * as React from 'react';
import { HiOutlineSpeakerphone as CoomingSoonIcon } from 'react-icons/hi';

// Render the component with the message and the "Coming Soon" icon.
export default function CommingSoonState({ message }) {
  return (
    <div className='flex flex-col items-center justify-center space-y-3 py-5 text-zinc-400 dark:text-zinc-500'>
      <CoomingSoonIcon size={48} />
      <p>{message}</p>
    </div>
  );
}
