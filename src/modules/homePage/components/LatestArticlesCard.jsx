import React from 'react';
import { formatDate } from '@/common/utils/Date';
import Link from 'next/link';
import CloudinaryImage from '@/common/components/elements/CloudinaryImage';

const LatestArticlesCard = ({ blog }) => {
  const trimmedTitle =
    blog.title.slice(0, 30) + (blog.title.length > 30 ? '...' : '');

  return (
    <Link href={`/blog/${blog.slug}`} aria-label={`View blog: ${blog.title}`}>
      <div className='animate-slide-card relative duration-500 hover:scale-95'>
        <div className='relative z-0 flex h-max min-w-[270px] flex-col items-start space-y-1'>
          <CloudinaryImage
            publicId={`w_384/${blog.cloudinary}`}
            // src={blog.image}
            alt={blog.title}
            width={384}
            height={216}
            className='h-[110px] w-full rounded-xl object-cover'
          />
          <p className='text-sm text-neutral-800 dark:text-neutral-300'>
            {trimmedTitle}
          </p>
          <div className='flex gap-4'>
            <span className='text-[10px] text-neutral-600 dark:text-neutral-400'>
              {formatDate(blog.published)}
            </span>
            <div className='flex items-center justify-center gap-1 text-[10px] text-neutral-600 dark:text-neutral-400'>
              <svg
                stroke='currentColor'
                fill='currentColor'
                strokeWidth='0'
                viewBox='0 0 576 512'
                height='10'
                width='14'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z'></path>
              </svg>
              <div className='flex gap-1'>
                <span>{blog.total_views}</span>
                <span>Views</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LatestArticlesCard;
