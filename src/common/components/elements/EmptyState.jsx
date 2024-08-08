import { TbMoodSadSquint as MoodIcon } from 'react-icons/tb';

const EmptyState = ({ message }) => {
  return (
    <div className='flex flex-col items-center justify-center space-y-3 py-5 text-zinc-400 dark:text-zinc-500'>
      <MoodIcon size={48} />
      <p>{message}</p>
    </div>
  );
};

export default EmptyState;
