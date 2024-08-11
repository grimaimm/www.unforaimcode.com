import React, { useEffect, useState } from 'react';
import { STACKS } from '@/common/components/partials/skills/components/Stack';
import Tooltip from '@/common/components/elements/Tooltip';
import ProjectLink from './ProjectLink';
import CloudinaryImage from '@/common/components/elements/CloudinaryImage';
import MDProjectContent from './MDProjectContent';

const ProjectDetails = ({ project }) => {
  return (
    <div className='space-y-8'>
      <div className='flex flex-col items-start justify-between gap-5 sm:flex-row lg:flex-row lg:items-center'>
        <div className='flex flex-wrap items-center gap-2'>
          <span className='mb-1 text-[15px] text-zinc-700 dark:text-zinc-300'>
            Tech Stack :
          </span>
          <div className='flex flex-wrap items-center gap-3'>
            {project.stack.map((stack, index) => (
              <div key={stack || index} className='w-6'>
                <Tooltip title={stack}>{STACKS[stack]}</Tooltip>
              </div>
            ))}
          </div>
        </div>
        <ProjectLink project={project} />
      </div>
      <CloudinaryImage
        publicId={project.image}
        width={960}
        height={540}
        alt={project.title}
        className='rounded-xl'
      />
      {project.content ? (
        <div className='space-y-6 leading-[1.8] dark:text-zinc-300'>
          <MDProjectContent content={project.content} />
        </div>
      ) : (
        <p className='text-zinc-500 dark:text-zinc-400'>
          Content not available.
        </p>
      )}
    </div>
  );
};

export default ProjectDetails;
