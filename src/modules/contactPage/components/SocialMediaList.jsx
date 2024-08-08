import clsx from "clsx";

import ButtonSocialMedia from "@/common/components/elements/ButtonSocialMedia";
import { SOCIAL_MEDIA } from "@/common/constant/SocialMedia";

const SocialMediaList = () => {
  const handleAction = link => window.open(link, "_blank")

  return (
    <div className="space-y-5 pb-2">
      <h3 className="text-lg font-medium">Find me on social media</h3>
      <div className="flex flex-row justify-between gap-4 md:gap-3 md:flex-row">
        {SOCIAL_MEDIA?.map((item, index) => (
          <ButtonSocialMedia
            className={clsx(
              "transition-all duration-300 group flex items-center justify-center md:w-1/5 md:h-full h-12 w-1/5"
            )}
            key={index}
            onClick={() => handleAction(item?.href)}
            data-umami-event={item?.eventName}
          >
            <span
              className={clsx(
                'gap-2 svgContainer p-2',
                item?.classIcon,
              )}
            >
              {item?.icon}
              <span className="md:block hidden">{item?.title}</span>
            </span>
            <span className={clsx('BG', item?.className)}></span>
          </ButtonSocialMedia>
        ))}
      </div>
    </div>
  )
}

export default SocialMediaList;
