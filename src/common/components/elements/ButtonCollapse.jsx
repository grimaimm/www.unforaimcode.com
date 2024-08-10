import * as React from 'react';
import { useRouter } from 'next/router';

export const ButtonCollapse = ({ toggleOpen, className }) => {
  const [isClosed, setIsClosed] = React.useState(false);
  const router = useRouter();

  const handleClick = () => {
    setIsClosed(!isClosed);
    toggleOpen();
  };

  // Reset isClosed state on route change
  React.useEffect(() => {
    const handleRouteChange = () => {
      setIsClosed(false);
    };

    // Subscribe to route changes
    router.events.on('routeChangeStart', handleRouteChange);

    // Cleanup the subscription
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events]);

  return (
    <div>
      <button
        id='buttonToggleCollapse'
        aria-label='buttonToggleCollapse'
        onClick={handleClick}
        className={`buttonToggleCollapse h-[2.07rem] ${className}`}
      >
        <span className={`burger-5 ${isClosed ? 'is-closed' : ''}`}>
          <svg className='text-[#0f0f0f] dark:text-zinc-50' viewBox='0 0 32 32'>
            <path
              className='line line-top-bottom'
              d='M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22'
            ></path>
            <path className='line' d='M7 16 27 16'></path>
          </svg>
        </span>
      </button>
    </div>
  );
};
