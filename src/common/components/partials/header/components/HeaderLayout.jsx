import * as React from 'react';
import { useRouter } from 'next/router';

const HeaderLayout = ({ children, className = '' }) => {
  const router = useRouter();

  const isBlogRoute = router.pathname.startsWith('/blog');

  const containerClass = isBlogRoute ? 'max-w-[1080px]' : 'max-w-[960px]';
  return (
    <div className='hidden lg:block'>
      <div className='w-full'>
        <div
          className={`header-top-layout mx-auto items-center justify-between gap-5 py-8 lg:flex ${containerClass} ${className}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default HeaderLayout;
