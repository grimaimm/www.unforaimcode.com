import React from 'react';
import Link from 'next/link';
import { AiFillPushpin as PinIcon } from 'react-icons/ai';
import { HiOutlineArrowSmRight as ViewIcon } from 'react-icons/hi';
import Card from '@/common/components/elements/Card';
import Tooltip from '@/common/components/elements/Tooltip';
import { STACKS } from '@/common/components/partials/skills/components/Stack';
import CloudinaryImage from '@/common/components/elements/CloudinaryImage';
import Image from '@/common/components/elements/Image';

const ProjectCard = ({ project }) => {
  return (
    <Link
      href={`/projects/${project.slug}`}
      aria-label={`View project: ${project.title}`}
    >
      <Card className='group relative cursor-pointer border border-zinc-200 bg-gradient-to-b dark:border-zinc-800 dark:from-zinc-800 dark:to-zinc-950 lg:hover:scale-[102%]'>
        {project.is_featured && (
          <div className='absolute right-0 top-0 z-[2] flex items-center gap-1 rounded-bl-xl rounded-tr-xl bg-lime-300 px-1.5 py-0.5 text-[12px] font-medium text-emerald-950'>
            <PinIcon size={14} />
            <span>Featured</span>
          </div>
        )}
        <div className='relative'>
          <Image
            src={project.original_image}
            alt={project.title}
            width={640}
            height={360}
            className='rounded-t-xl object-cover'
          />
          {/* <CloudinaryImage
            publicId={`w_1000/${project.image}`}
            alt={project.title}
            width={640}
            height={360}
            className='rounded-t-xl object-cover'
          /> */}
          <div className='absolute left-0 top-0 flex h-full w-full items-center justify-center gap-1 rounded-t-xl bg-black text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-80'>
            <span>View Project</span>
            <ViewIcon size={20} />
          </div>
        </div>
        <div className='space-y-2 p-5'>
          <div className='flex justify-between'>
            <div className='cursor-pointer text-lg font-medium text-zinc-700 transition-all duration-300 dark:text-zinc-300 dark:group-hover:text-indigo-400 lg:group-hover:text-indigo-600'>
              {project.title}
            </div>
          </div>
          <p className='text-[15px] leading-relaxed text-zinc-700 dark:text-zinc-400'>
            {project.description}
          </p>
          <div className='flex flex-wrap items-center gap-3 pt-2'>
            {project.stack.map((stack, index) => (
              <div key={stack || index} className='w-6'>
                <Tooltip title={stack}>{STACKS[stack]}</Tooltip>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ProjectCard;
