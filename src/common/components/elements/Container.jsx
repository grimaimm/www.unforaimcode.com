import * as React from 'react';
import { useRouter } from 'next/router';

export const Container = ({ children, className = '', ...others }) => {
  return (
    <div className='flex justify-center'>
      <main className='flex w-full flex-col justify-center lg:flex-row lg:gap-5'>
        <div
          className={`container-layout mb-10 mt-24 p-4 lg:mt-10 ${className}`}
          {...others}
        >
          {children}
        </div>
      </main>
    </div>
  );
};

export const ContainerCenter = ({ children, className = '', ...others }) => {
  const router = useRouter();
  const isBlogRoute = router.pathname.startsWith('/blog');

  const containerClass = isBlogRoute ? 'max-w-[1080px]' : 'max-w-[960px]';

  return (
    <div className='flex justify-center'>
      <main className='flex w-full flex-col justify-center lg:flex-row lg:gap-5'>
        <div
          className={`container-center mb-10 mt-28 lg:mt-10 ${containerClass} ${className}`}
          {...others}
        >
          {children}
        </div>
      </main>
    </div>
  );
};
