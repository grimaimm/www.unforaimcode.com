import * as React from 'react';
import { buildUrl } from 'cloudinary-build-url';
import clsx from 'clsx';
import Image from 'next/image';

export default function CloudinaryImage({
  publicId,
  height,
  width,
  alt,
  title,
  className,
  preview = true,
  noStyle = false,
  mdx = false,
  style,
  aspect,
  rounded,
  priority = false,
  ...rest
}) {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [isLoading, setLoading] = React.useState(true);

  const urlBlurred = buildUrl(publicId, {
    cloud: {
      cloudName: 'aiiimmmm',
    },
    transformations: {
      effect: {
        name: 'blur:1000',
      },
      quality: 1,
      rawTransformation: aspect
        ? `c_fill,ar_${aspect.width}:${aspect.height},w_${width}`
        : undefined,
    },
  });

  const url = buildUrl(publicId, {
    cloud: {
      cloudName: 'aiiimmmm',
    },
    transformations: {
      rawTransformation: aspect
        ? `c_fill,ar_${aspect.width}:${aspect.height},w_${width}`
        : undefined,
    },
  });

  const aspectRatio = aspect ? aspect.height / aspect.width : undefined;

  const RESIZE_MAX_WIDTH = 1000;
  const resizedToMaxWidth = mdx && +width >= RESIZE_MAX_WIDTH;

  return (
    <figure
      className={clsx(className, {
        'overflow-hidden': !noStyle,
        'mx-auto w-full': mdx && +width <= 800,
        'animate-pulse': isLoading,
      })}
      style={{
        ...(mdx && +width <= 800 ? { maxWidth: width } : {}),
        ...style,
      }}
      {...rest}
    >
      <div
        style={{
          position: 'relative',
          height: 0,
          paddingTop: aspectRatio
            ? `${aspectRatio * 100}%`
            : `${(+height / +width) * 100}%`,
          cursor: preview ? 'zoom-in' : 'default',
        }}
        className="img-blur"
      >
        <style jsx>{`
          .img-blur::before {
            content: '';
            position: absolute;
            inset: 0;
            filter: blur(20px);
            z-index: 0;
            background-image: url(${urlBlurred});
            background-position: center center;
            background-size: 100%;
            transition: opacity 1s ease-out;
            opacity: ${isLoaded ? 0 : 1};
          }
        `}</style>
        <div className="absolute left-0 top-0 w-full h-full duration-700 ease-in-out">
          <Image
            className={clsx(
              'duration-700 ease-in-out',
              isLoading
                ? 'scale-[1.02] blur-xl'
                : 'scale-100 blur-0',
              rounded
            )}
            width={
              resizedToMaxWidth ? Math.min(+width, RESIZE_MAX_WIDTH) : width
            }
            height={
              resizedToMaxWidth
                ? (RESIZE_MAX_WIDTH * +height) / +width
                : height
            }
            unoptimized
            src={url}
            alt={alt}
            title={title || alt}
            onLoad={() => {
              setIsLoaded(true);
              setLoading(false);
            }}
            priority={priority} // Menambahkan prop priority
            {...rest}
          />
        </div>
      </div>
    </figure>
  );
}
