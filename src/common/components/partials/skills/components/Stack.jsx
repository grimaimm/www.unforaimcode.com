import { BsFillBootstrapFill } from 'react-icons/bs';
import {
  SiCss3,
  SiExpress,
  SiFirebase,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiJupyter,
  SiPwa,
  SiFastapi,
  SiFlask,
  SiSocketdotio,
  SiPhp,
  SiLaravel,
} from 'react-icons/si';
import { FaRobot } from 'react-icons/fa';
import {
  PythonIcon,
  SQLiteIcon,
  MySQLIcon,
} from '@/common/components/elements/Icons';
import { PiLightbulbFilament as FilamentPHPIcon } from 'react-icons/pi';

const iconSize = '100%';

export const STACKS = {
  'Artificial Intelligence': (
    <FaRobot size={iconSize} className='text-pink-500' />
  ),
  Bootstrap: (
    <BsFillBootstrapFill size={iconSize} className='text-purple-500' />
  ),
  CSS: <SiCss3 size={iconSize} className='text-blue-500' />,
  ExpressJS: <SiExpress size={iconSize} />,
  FastAPI: <SiFastapi size={iconSize} className='text-teal-500' />,
  Firebase: <SiFirebase size={iconSize} className='text-yellow-500' />,
  Flask: <SiFlask size={iconSize} className='text-gray-500' />,
  GitHub: <SiGithub size={iconSize} className='text-[##2b3137]' />,
  HTML: <SiHtml5 size={iconSize} className='text-orange-500' />,
  JavaScript: <SiJavascript size={iconSize} className='text-yellow-400' />,
  'Jupyter Notebook': <SiJupyter size={iconSize} className='text-orange-500' />,
  MySQL: <MySQLIcon size={iconSize} />,
  NextJS: <SiNextdotjs size={iconSize} className='text-[#805ad5]' />,
  NodeJS: <SiNodedotjs size={iconSize} className='text-green-600' />,
  PWA: <SiPwa size={iconSize} className='text-blue-500' />,
  Python: <PythonIcon size={iconSize} />,
  ReactJS: <SiReact size={iconSize} className='text-sky-500' />,
  SASS: <SiSass size={iconSize} className='text-pink-600' />,
  SQLite: <SQLiteIcon size={iconSize} />,
  SocketIo: (
    <SiSocketdotio size={iconSize} className='text-black dark:text-white' />
  ),
  TailwindCSS: <SiTailwindcss size={iconSize} className='text-cyan-300' />,
  PHP: <SiPhp size={iconSize} className='text-[#484C89] dark:text-[#777BB3]' />,
  Laravel: <SiLaravel size={iconSize} className='text-[#fb503b]' />,
  Filament: <FilamentPHPIcon size={iconSize} className='text-[#ffa434]' />,
};
