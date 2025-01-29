import * as React from 'react';

const NavbarLayout = ({ children, isOpen }) => {
  const [hasBorder, setHasBorder] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasBorder(true);
      } else {
        setHasBorder(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='block lg:hidden'>
      <div className='w-full'>
        <div
          className={`navbar-layout fixed top-0 z-10 flex w-full flex-col justify-between px-2 text-zinc-700 transition-[border] duration-300 dark:text-zinc-200 ${
            hasBorder
              ? 'border-b border-zinc-200 dark:border-zinc-800'
              : 'border-b border-transparent'
          } ${
            isOpen
              ? 'bg-zinc-50 backdrop-blur-none dark:bg-zinc-950'
              : 'bg-zinc-50/70 backdrop-blur-md dark:bg-zinc-950/70'
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default NavbarLayout;
