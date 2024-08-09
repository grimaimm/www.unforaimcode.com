import * as React from 'react';
import NextImage from 'next/image';
import clsx from 'clsx';
import StatusAnimation from './StatusAnimation';
import { ButtonSwitchTheme } from './ButtonSwitchTheme';

const CoverImage = ({ src, alt, className, ...rest }) => {
  const [isLoading, setLoading] = React.useState(true);

  return (
    <div
      className={clsx(
        'relative h-[90px] w-full overflow-hidden rounded-b-xl rounded-tr-xl',
        className,
      )}
    >
      <div
        className={clsx(
          'duration-700 ease-in-out',
          isLoading
            ? 'scale-[1.02] animate-pulse blur-xl grayscale'
            : 'scale-100 blur-0 grayscale-0',
        )}
      >
        <NextImage
          className='h-full w-full object-cover'
          src={src}
          alt={alt}
          width={100}
          height={100}
          priority
          onLoad={() => setLoading(false)}
          {...rest}
        />
        <div className='absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed opacity-60 dark:bg-zinc-950'></div>
      </div>
      <div className='cover-rounded dark:cover-rounded-dark absolute left-0 top-0 rounded-br-xl bg-zinc-50 pb-1.5 pr-1.5 dark:bg-zinc-950'>
        <StatusAnimation />
      </div>
      <div className='absolute bottom-0 right-0 px-1.5 py-1.5'>
        <div className='relative flex items-center'>
          <ButtonSwitchTheme />
        </div>
      </div>
    </div>
  );
};

export default CoverImage;
