import Link from 'next/link';
import { BsGithub as GithubIcon } from 'react-icons/bs';
import { FiExternalLink as LinkIcon } from 'react-icons/fi';

const ProjectLink = ({ project }) => {
  const LinkComponent = ({ url, text, icon }) => {
    const eventName = `Click ${text} - Project ${project.title}`;

    return (
      <Link
        href={url}
        target='_blank'
        rel='noopener noreferrer'
        data-umami-event={eventName}
        className='flex items-center gap-2 font-medium text-zinc-700 transition-all duration-300 hover:text-indigo-500 dark:text-indigo-300 dark:hover:text-indigo-400'
      >
        {icon}
        <span className='text-[15px]'>{text}</span>
      </Link>
    );
  };

  return (
    <div className='flex items-center gap-4'>
      {project.link_github && (
        <LinkComponent
          url={project.link_github}
          text='Source Code'
          icon={<GithubIcon size={22} />}
        />
      )}
      {project.link_github && project.link_demo && (
        <span className='text-zinc-400 dark:text-zinc-600'>|</span>
      )}
      {project.link_demo && (
        <LinkComponent
          url={project.link_demo}
          text='Live Demo'
          icon={<LinkIcon size={22} />}
        />
      )}
    </div>
  );
};

export default ProjectLink;
