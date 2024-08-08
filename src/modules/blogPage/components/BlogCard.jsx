import React from 'react';
import Link from 'next/link';
import { HiOutlineArrowSmRight as ViewIcon } from 'react-icons/hi';
import Card from '@/common/components/elements/Card';
import Image from '@/common/components/elements/Image';
import { formatDate } from '@/common/utils/Date';
import CloudinaryImage from '@/common/components/elements/CloudinaryImage';

const BlogCard = ({ blog }) => {

  const trimmedTitle = blog.title.slice(0, 50) + (blog.title.length > 50 ? '...' : '')
  const trimmedDescription = blog.description.slice(0, 80) + (blog.description.length > 80 ? '...' : '')

  return (
    <Link href={`/blog/${blog.slug}`} aria-label={`View blog: ${blog.title}`}>
      <Card className='group relative w-full h-full cursor-pointer border border-zinc-200 lg:hover:scale-[102%] bg-gradient-to-b dark:border-zinc-800 dark:from-zinc-800 dark:to-zinc-950'>
        <div className='relative'>
          {/* <Image
            src={blog.cloudinary}
            width={640}
            height={360}
            alt={blog.title}
            className='h-full w-full rounded-t-xl object-cover'
          /> */}
          <CloudinaryImage 
            publicId={blog.cloudinary}
            alt={blog.title}
            width={640}
            height={320}
            className='rounded-t-xl object-cover'
          />
          <div className='absolute left-0 top-0 flex h-full w-full items-center justify-center gap-1 rounded-t-xl bg-black text-sm font-medium text-zinc-50 opacity-0 transition-opacity duration-300 group-hover:opacity-80'>
            <span>View Project</span>
            <ViewIcon size={20} />
          </div>
        </div>
        <div className='space-y-2 p-5'>
          <div className='flex justify-between'>
            <h4 className='cursor-pointer text-lg font-medium text-zinc-700 transition-all duration-300 dark:text-zinc-300 dark:group-hover:text-indigo-400 lg:group-hover:text-indigo-600'>
              {trimmedTitle}
            </h4>
          </div>
          <div className="flex gap-4 text-zinc-600 dark:text-zinc-400">
            <div className="flex items-center gap-1">
            <span className="text-xs">{formatDate(blog.published)}</span>
            </div>
            <div className="flex items-center gap-1">
              <svg className="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
                <path d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"></path>
              </svg>
              <span className="text-xs">
                <div className="flex gap-1">
                  <span>{blog.total_views}</span>
                  <span>Views</span>
                </div>
              </span>
            </div>
          </div>
          <p className='text-sm leading-relaxed text-zinc-700 dark:text-zinc-400'>
            {trimmedDescription}
          </p>
        </div>
      </Card>
    </Link>
  );
};

export default BlogCard;