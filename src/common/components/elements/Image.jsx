import * as React from 'react';
import NextImage from 'next/image';
import clsx from 'clsx';

const Image = (props) => {
  const { alt, src, className, rounded, ...rest } = props;
  const [isLoading, setLoading] = React.useState(true);

  return (
    <div
      className={clsx(
        'overflow-hidden',
        isLoading ? 'animate-pulse' : '',
        rounded,
      )}
    >
      <NextImage
        data-testid='image'
        className={clsx(
          'duration-700 ease-in-out',
          isLoading
            ? 'scale-[1.02] blur-xl grayscale'
            : 'scale-100 blur-0 grayscale-0',
          rounded,
          className,
        )}
        src={src}
        alt={alt}
        loading='lazy'
        quality={100}
        onLoad={() => setLoading(false)}
        {...rest}
      />
    </div>
  );
};
export default Image;
