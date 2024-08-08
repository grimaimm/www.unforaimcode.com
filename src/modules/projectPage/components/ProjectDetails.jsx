import React, { useEffect, useState } from 'react';
import { STACKS } from '@/common/components/partials/skills/components/Stack';
import Tooltip from '@/common/components/elements/Tooltip';
// import Image from '@/common/components/elements/Image';
import ProjectLink from './ProjectLink';
import CloudinaryImage from '@/common/components/elements/CloudinaryImage';
import MDXComponents from '@/common/components/partials/blockcode/MDXComponents';

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
              <div key={stack || index} className="w-6">
                <Tooltip title={stack}>{STACKS[stack]}</Tooltip>
              </div>
            ))}
          </div>
        </div>
        <ProjectLink
          project={project}
        />
      </div>
      <CloudinaryImage
        publicId={project.image}
        width={960}
        height={540}
        alt={project.title}
        className='rounded-xl'
      />
      <div className='space-y-2 leading-[1.8] dark:text-zinc-300'>
        <MDXComponents>{project.content}</MDXComponents>
      </div>
    </div>
  );
}

export default ProjectDetails;
