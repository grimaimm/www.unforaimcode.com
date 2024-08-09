import Image from '@/common/components/elements/Image';
import { ABOUT } from '@/common/constant/About';

const Story = () => {
  return (
    <div className='space-y-8'>
      <section
        className='space-y-4 leading-[1.8] text-zinc-800 dark:text-zinc-300 md:leading-loose'
        dangerouslySetInnerHTML={{ __html: ABOUT }}
      />

      <div className='space-y-4'>
        <span>Best Regards,</span>
        <Image
          src='/images/Me/signature.png'
          width={120}
          height={120}
          alt='Aim'
        />
      </div>
    </div>
  );
};

export default Story;
