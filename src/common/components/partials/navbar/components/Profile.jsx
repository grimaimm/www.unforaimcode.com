import * as React from 'react';
import { useRouter } from 'next/router';
import { ButtonCollapse } from '@/common/components/elements/ButtonCollapse';
import { MdVerified as VerifiedIcon } from 'react-icons/md';
import Link from 'next/link';
import Image from '@/common/components/elements/Image';
import ToggleThemeButton from '@/common/components/elements/ToggleThemeButton';

const Profile = ({ toggleOpen, isOpen }) => {
  const [isClosed, setIsClosed] = React.useState(false);
  const router = useRouter();

  const handleToggleOpen = () => {
    setIsClosed(!isClosed);
    toggleOpen();
  };

  React.useEffect(() => {
    // Reset the state when the route changes
    const handleRouteChange = () => {
      setIsClosed(false);
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events]);

  return (
    <div className='nav-header flex flex-row items-center justify-between px-2 py-4'>
      <div
        className={`left-navbar flex w-full flex-grow gap-3 ${
          isOpen
            ? 'h-[125px] flex-col !items-start justify-between'
            : 'flex-row items-center'
        }`}
      >
        <Image
          alt='Muhammad Rahim'
          decoding='async'
          height={isOpen ? 80 : 48}
          width={isOpen ? 80 : 48}
          rounded='rounded-full'
          className='border-2 border-zinc-400 dark:border-zinc-700'
          src='/images/Me/profileImage.jpg'
        />
        <div
          className={`admin-icon flex items-center gap-2 lg:mt-4 ${
            isOpen ? 'fade-in-top' : ''
          }`}
        >
          <Link href='/'>
            <h2 className='admin-name flex-grow text-lg font-medium lg:text-xl'>
              Muhammad Rahim
            </h2>
          </Link>
          <VerifiedIcon size={18} className='text-blue-400' />
        </div>
      </div>
      <div className='flex lg:mt-4 lg:w-full'>
        <div
          className={`ms-auto flex gap-2 ${
            isOpen
              ? 'h-[120px] flex-col-reverse !items-end justify-between'
              : 'flex-row'
          }`}
        >
          <ToggleThemeButton
            className={`transition-opacity duration-300 ${
              isOpen
                ? 'fade-in-top max-[376px]:opacity-100'
                : 'mr-10 max-[376px]:hidden'
            }`}
          />
        </div>
      </div>
      <div className='fixed right-3 top-[1.48rem] z-50'>
        <ButtonCollapse
          isClosed={isClosed}
          toggleOpen={handleToggleOpen}
          className={`${isOpen ? '' : ''}`}
        />
      </div>
    </div>
  );
};

export default Profile;
