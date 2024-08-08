import * as React from "react";
import { ButtonCollapse } from "@/common/components/elements/ButtonCollapse";
import { MdVerified as VerifiedIcon } from 'react-icons/md';
import Link from "next/link";
import Image from "@/common/components/elements/Image";
import ToggleThemeButton from "@/common/components/elements/ToggleThemeButton";

const Profile = ({ toggleOpen, isOpen }) => {
  return (
    <div className="px-2 py-4 flex flex-row items-center justify-between nav-header">
      <div className={`flex gap-3 flex-grow w-full left-navbar ${isOpen ? 'h-[125px] flex-col !items-start justify-between' : 'items-center flex-row'}`}>
        <Image
          alt="Muhammad Rahim"
          decoding="async"
          height={`${isOpen ? '80' : '48'}`}
          width={`${isOpen ? '80' : '48'}`}
          rounded='rounded-full'
          className="duration-700 ease-in-out scale-100 blur-0 grayscale-0 rounded-full lg:hover:scale-105 border-2 border-zinc-400 dark:border-zinc-700"
          src="/images/Me/profileImage.jpg"
        />
        <div className={`flex gap-2 items-center lg:mt-4 admin-icon ${isOpen ? 'fade-in-top' : ''}`}>
          <Link href="/">
            <h2 className="flex-grow text-lg font-medium lg:text-xl admin-name">
              Muhammad Rahim
            </h2>
          </Link>
          <VerifiedIcon size={18} className='text-blue-400' />
        </div>
      </div>
      <div className="flex lg:w-full lg:mt-4">
        <div className={`flex gap-2 ms-auto ${isOpen ? 'h-[120px] flex-col-reverse !items-end justify-between' : 'flex-row'}`}>
          <ToggleThemeButton className={`transition-opacity duration-300 ${isOpen ? 'fade-in-top max-[376px]:opacity-100' : 'max-[376px]:hidden mr-10'}`} />
          {/* <ButtonSwitchThemeNavbar className={`${isOpen ? 'block max-[375px]:block min-[376px]:hidden' : 'max-[376px]:hidden min-[375px]:hidden'}`} /> */}
        </div>
      </div>
      <div className="fixed top-[1.48rem] right-3 z-50">
        <ButtonCollapse toggleOpen={toggleOpen} className={`${isOpen ? '' : ''}`} />
      </div>
    </div>
  );
};

export default Profile;
