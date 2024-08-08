import * as React from 'react';
import Link from 'next/link';
import Image from '@/common/components/elements/Image';
import CoverImage from '@/common/components/elements/CoverImage';
import { MdVerified as VerifiedIcon } from 'react-icons/md';

const ProfileHeader = () => {
  return (
    <>
      <div className="flex p-4 flex-col items-center justify-center">
        <CoverImage
          src="/images/Me/cover-image.jpg"
          alt="Cover Image"
        />
        <div className="rounded-full border-2 border-zinc-50 dark:border-zinc-950 -mt-[44px] z-10">
          <Image
            src='/images/Me/profileImage.jpg'
            alt="MuhammadRahim"
            width={86}
            height={86}
            rounded='rounded-full'
            className="lg:hover:scale-105"
          />
        </div>
        <div className="flex gap-2 items-center lg:mt-4">
          <Link href='/' passHref>
            <h2 className="text-lg font-medium admin-name">
              Muhammad Rahim
            </h2>
          </Link>
          <VerifiedIcon size={18} className='text-blue-400' />
        </div>
        <div className="cursor-default flex text-sm text-zinc-600 hover:text-zinc-700 dark:text-zinc-500 dark:hover:text-zinc-400 transition-all duration-300">
          @aiiimmmm._
        </div>
      </div>
    </>
  );
}

export default ProfileHeader;
