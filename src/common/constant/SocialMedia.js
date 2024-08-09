import { BiRocket as ContactIcon } from 'react-icons/bi';
import {
  BsTiktok as TikTokIcon,
  BsEnvelopeAtFill as EmailIcon,
  BsGithub as GithubIcon,
  BsInstagram as InstagramIcon,
  BsLinkedin as LinkedinIcon,
  BsTwitter as TwitterIcon,
} from 'react-icons/bs';

const iconSize = 20;

export const SOCIAL_MEDIA = [
  {
    title: 'Github',
    href: 'https://github.com/aulianza',
    classIcon:
      'border border-slate-700/30 group-hover:bg-slate-700/30 text-slate-300 hover:text-slate-200',
    icon: <GithubIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Github',
    className: 'bg-slate-800',
    type: 'Link',
  },
  {
    title: 'LinkedIn',
    href: 'https://github.com/aulianza',
    classIcon:
      'border border-sky-700/30 group-hover:bg-sky-700/30 text-sky-300 hover:text-sky-200',
    icon: <LinkedinIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: LinkedIn',
    className: 'bg-sky-800',
    type: 'Link',
  },
  {
    title: 'Email',
    href: 'https://github.com/aulianza',
    classIcon:
      'border border-rose-700/30 group-hover:bg-rose-700/30 text-rose-300 hover:text-rose-200',
    icon: <EmailIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Email',
    className: 'bg-rose-800',
    type: 'Link',
  },
  {
    title: 'Instagram',
    href: 'https://github.com/aulianza',
    classIcon:
      'border border-purple-700/30 group-hover:bg-purple-700/30 text-purple-300 hover:text-purple-200',
    icon: <InstagramIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Instagram',
    className: 'bg-purple-800',
    type: 'Link',
  },
  {
    title: 'TikTok',
    href: 'https://github.com/aulianza',
    classIcon:
      'border border-cyan-700/30 group-hover:bg-cyan-700/30 text-cyan-300 hover:text-cyan-200',
    icon: <TikTokIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: TikTok',
    className: 'bg-cyan-800',
    type: 'Link',
  },
];
