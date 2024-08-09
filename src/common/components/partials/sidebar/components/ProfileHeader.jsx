import * as React from 'react';
import Link from 'next/link';
import Image from '@/common/components/elements/Image';
import CoverImage from '@/common/components/elements/CoverImage';
import { MdVerified as VerifiedIcon } from 'react-icons/md';

const ProfileHeader = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center p-4'>
        <CoverImage src='/images/Me/cover-image.jpg' alt='Cover Image' />
        <div className='z-10 -mt-[44px] rounded-full border-2 border-zinc-50 dark:border-zinc-950'>
          <Image
            src='/images/Me/profileImage.jpg'
            alt='MuhammadRahim'
            width={86}
            height={86}
            rounded='rounded-full'
            className='lg:hover:scale-105'
          />
        </div>
        <div className='flex items-center gap-2 lg:mt-4'>
          <Link href='/' passHref>
            <h2 className='admin-name text-lg font-medium'>Muhammad Rahim</h2>
          </Link>
          <VerifiedIcon size={18} className='text-blue-400' />
        </div>
        <div className='flex cursor-default text-sm text-zinc-600 transition-all duration-300 hover:text-zinc-700 dark:text-zinc-500 dark:hover:text-zinc-400'>
          @aiiimmmm._
        </div>
      </div>
    </>
  );
};

export default ProfileHeader;
