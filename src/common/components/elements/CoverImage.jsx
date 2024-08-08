import * as React from 'react';
import NextImage from "next/image";
import clsx from 'clsx';
import StatusAnimation from './StatusAnimation';
import { ButtonSwitchTheme } from './ButtonSwitchTheme';

const CoverImage = ({ src, alt, className, ...rest }) => {
  const [isLoading, setLoading] = React.useState(true);

  return (
    <div
      className={clsx(
        'relative w-full h-[90px] rounded-tr-xl rounded-b-xl overflow-hidden',
        className
      )}
    >
      <div className={clsx(
        'duration-700 ease-in-out',
        isLoading ? 'animate-pulse scale-[1.02] blur-xl grayscale' : 'scale-100 blur-0 grayscale-0'
      )}>
        <NextImage
          className="w-full h-full object-cover"
          src={src}
          alt={alt}
          width={100}
          height={100}
          priority
          onLoad={() => setLoading(false)}
          {...rest}
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden dark:bg-zinc-950 bg-fixed opacity-60"></div>
      </div>
      <div className="absolute top-0 left-0 bg-zinc-50 dark:bg-zinc-950 pb-1.5 pr-1.5 rounded-br-xl cover-rounded dark:cover-rounded-dark">
        <StatusAnimation />
      </div>
      <div className="absolute right-0 bottom-0 py-1.5 px-1.5">
        <div className='relative flex items-center'>
          <ButtonSwitchTheme />
        </div>
      </div>
    </div>
  );
};

export default CoverImage;
