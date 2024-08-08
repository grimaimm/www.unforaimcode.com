import * as React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import HeaderLayout from './HeaderLayout';
import Tooltip from '@/common/components/elements/Tooltip';
import Image from '@/common/components/elements/Image';
import ToggleThemeButton from '@/common/components/elements/ToggleThemeButton';
import { useRouter } from 'next/router';
import { MdClose as CloseIcon, MdVerified as VerifiedIcon } from 'react-icons/md';
import { MENU_ITEMS } from '@/common/constant/Menu';
import { FiMenu as MenuIcon } from 'react-icons/fi';
import { BiCommand as CommandIcon } from 'react-icons/bi';
import { CommandPaletteContext } from '@/common/context/CommandPaletteContext';

const Header = () => {
  const { setIsOpen } = React.useContext(CommandPaletteContext);
  const [showMenu, setShowMenu] = React.useState(false);
  const router = useRouter();
  const location = router.pathname;

  return (
    <>
      <HeaderLayout>
        <div className="flex items-center gap-3">
          <Image
            src="/images/Me/profileImage.jpg"
            alt='Muhammad Rahim'
            height={48}
            width={48}
            rounded='rounded-full'
            className='border-2 border-zinc-400 dark:border-zinc-700 lg:hover:scale-105'
          />
          {!showMenu && (
            <div className='flex items-center gap-3'>
              <Link href="/">
                <h2 className="text-lg font-sora lg:font-medium font-bold admin-name dark:text-zinc-200">
                  Muhammad Rahim
                </h2>
              </Link>
              <Tooltip title='Verified'>
                <VerifiedIcon
                  size={18}
                  className='text-blue-400'
                  data-aos="flip-right"
                />
              </Tooltip>
            </div>
          )}
        </div>

        <div className='flex items-center justify-between gap-4'>
          {showMenu && (
            <div className='flex items-center gap-4' data-aos="flip-up">
              {MENU_ITEMS.map((menu, index) => (
                <Link
                  key={index}
                  href={menu.href}
                  className={clsx(
                    'text-zinc-700 hover:text-zinc-800 dark:text-zinc-400 hover:dark:text-zinc-100',
                    location === menu?.href &&
                    '!text-zinc-800 dark:!text-zinc-100'
                  )}
                >
                  <div>{menu.title}</div>
                </Link>
              ))}
            </div>
          )}

          {!showMenu && (
            <>
              <ToggleThemeButton />
              <CommandIcon
                onClick={() => setIsOpen(true)}
                className='cursor-pointer'
                size={20}
              />
            </>
          )}

          <button
            className='flex items-center gap-2 rounded-md border p-2 backdrop-blur dark:border-zinc-700 dark:bg-zinc-900'
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? <CloseIcon size={18} /> : <MenuIcon size={18} />}
          </button>
        </div>
      </HeaderLayout>
    </>
  );
}

export default Header;
