import * as React from 'react';

const SkillCard = ({ name, icon }) => {
  return (
    <div className='px-2'>
      <div className='flex w-full space-x-2 rounded-full px-4 py-2 shadow-[0_3px_10px_rgba(39,39,42,0.2)] dark:shadow-[0_2px_10px_rgb(39,39,42)]'>
        <div className='h-6 w-6'>{icon}</div>
        <div className='whitespace-nowrap'>{name}</div>
      </div>
    </div>
  );
};

export default SkillCard;
