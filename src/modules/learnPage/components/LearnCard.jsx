import React from 'react';
import Link from 'next/link';
import Card from '@/common/components/elements/Card';
import CloudinaryImage from '@/common/components/elements/CloudinaryImage';
import { HiOutlineArrowSmRight as ViewIcon } from 'react-icons/hi';
import { BiLabel as LevelIcon } from 'react-icons/bi';
import { MdLibraryBooks as LessonIcon } from 'react-icons/md';

const LearnCard = ({ learn }) => {
  // Calculate the total number of lessons
  const totalLessons = learn.content ? learn.content.length : 0;

  return (
    <Link
      href={`/learn/${learn.slug}`}
      aria-label={`View learn: ${learn.title}`}
    >
      <Card className='group relative h-full w-full cursor-pointer border border-zinc-200 bg-gradient-to-b dark:border-zinc-800 dark:from-zinc-800 dark:to-zinc-950 lg:hover:scale-[102%]'>
        <div className='relative'>
          <CloudinaryImage
            publicId={learn.cloudinary}
            alt={learn.title}
            width={1200}
            height={600}
            className='rounded-t-xl object-cover'
          />
          <div className='absolute left-0 top-0 flex h-full w-full items-center justify-center gap-1 rounded-t-xl bg-black text-sm font-medium text-zinc-50 opacity-0 transition-opacity duration-300 group-hover:opacity-80'>
            <span>View Lessons</span>
            <ViewIcon size={20} />
          </div>
        </div>
        <div className='flex flex-col justify-between space-y-3 p-5'>
          <div className='space-y-2'>
            <div className='flex justify-between'>
              <div className='cursor-pointer text-lg font-medium text-zinc-700 transition-all duration-300 dark:text-zinc-300 dark:group-hover:text-indigo-400 lg:group-hover:text-indigo-600'>
                {learn.title}
              </div>
            </div>
            <p className='text-[.9375rem] leading-relaxed text-zinc-700 dark:text-zinc-400'>
              {learn.description}
            </p>
          </div>
          <div className='flex gap-4 text-zinc-600 dark:text-zinc-400'>
            <div className='flex items-center gap-1'>
              <LessonIcon size={16} />
              <span className='ml-0.5 text-sm'>
                {totalLessons} {totalLessons === 1 ? 'Lesson' : 'Lessons'}
              </span>
            </div>
            <div className='flex items-center gap-1'>
              <LevelIcon size={16} />
              <span className='ml-0.5 text-sm'>{learn.level}</span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default LearnCard;
