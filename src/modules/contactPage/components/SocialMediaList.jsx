import clsx from 'clsx';

import ButtonSocialMedia from '@/common/components/elements/ButtonSocialMedia';
import { SOCIAL_MEDIA } from '@/common/constant/SocialMedia';

const SocialMediaList = () => {
  const handleAction = (link) => window.open(link, '_blank');

  return (
    <div className='space-y-5 pb-2'>
      <h3 className='text-lg font-medium'>Find me on social media</h3>
      <div className='flex flex-row justify-between gap-4 md:flex-row md:gap-3'>
        {SOCIAL_MEDIA?.map((item, index) => (
          <ButtonSocialMedia
            className={clsx(
              'group flex h-12 w-1/5 items-center justify-center transition-all duration-300 md:h-full md:w-1/5',
            )}
            key={index}
            onClick={() => handleAction(item?.href)}
            data-umami-event={item?.eventName}
          >
            <span className={clsx('svgContainer gap-2 p-2', item?.classIcon)}>
              {item?.icon}
              <span className='hidden md:block'>{item?.title}</span>
            </span>
            <span className={clsx('BG', item?.className)}></span>
          </ButtonSocialMedia>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaList;
