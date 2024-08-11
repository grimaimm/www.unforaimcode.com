import React from 'react';
import {
  SectionHeading,
  SectionSubHeading,
} from '@/common/components/elements/SectionTitle';
import { FaServicestack } from 'react-icons/fa';
import ServiceCard from './ServiceCard';
import { servicesMock } from '@/common/mocks/services';
import Card from '@/common/components/elements/Card';
import Button from '@/common/components/elements/Button';
import { BiRocket as RocketIcon } from 'react-icons/bi';
import { useRouter } from 'next/router';

export const ServiceSection = ({ services }) => {
  return (
    <section>
      <div className='space-y-2'>
        <SectionHeading
          title='Services'
          icon={<FaServicestack className='mr-1' />}
        />
        <SectionSubHeading>
          <p className='dark:text-zinc-400'>What can I do for you?</p>
        </SectionSubHeading>
      </div>
      <div className='my-4 grid gap-4 md:grid-cols-2'>
        {(services || servicesMock).map((item, index) => (
          <ServiceCard key={index} {...item} index={index} />
        ))}
      </div>
    </section>
  );
};

export const ServiceSectionContactMe = () => {
  const router = useRouter();
  return (
    <Card className='border border-zinc-200 bg-gradient-to-br from-white to-zinc-100 px-6 py-6 dark:border-zinc-700 dark:from-zinc-800 dark:to-zinc-900/50'>
      <div className='flex items-center space-x-2'>
        <RocketIcon size={20} />
        <h3>Lets work together!</h3>
      </div>
      <p className='mb-4 mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
        I&apos;m open for freelance projects, feel free to email me to see how
        can we collaborate.
      </p>
      <Button
        className='px-4 py-2 text-sm'
        data-umami-event='Click Contact Button'
        onClick={() => router.push('/contact')}
      >
        Contact me
      </Button>
    </Card>
  );
};
