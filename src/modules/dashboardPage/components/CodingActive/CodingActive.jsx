import { DateTime } from 'luxon';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { SiWakatime as WakatimeIcon } from 'react-icons/si';
import useSWR from 'swr';

import {
  SectionHeading,
  SectionSubHeading,
} from '@/common/components/elements/SectionTitle';
import { fetcher } from '@/services/fetcher';

import CodingActiveList from './CodingActiveList';
import Overview from './Overview';

const CodingActive = ({ lastUpdate }) => {
  const { data } = useSWR('/api/read-stats', fetcher);
  const [formattedLastUpdate, setFormattedLastUpdate] = useState(null);

  useEffect(() => {
    const formatLastUpdate = () => {
      const lastUpdateDate = lastUpdate || data?.last_update;
      if (lastUpdateDate) {
        const zonedDate = DateTime.fromISO(lastUpdateDate, {
          zone: 'Asia/Jakarta',
        });
        const distance = zonedDate.setLocale('en').toRelative(); // Set locale to English
        setFormattedLastUpdate(distance);
      }
    };

    formatLastUpdate();
  }, [lastUpdate, data]);

  const renderLastUpdate = () => {
    if (formattedLastUpdate) {
      return <span>{formattedLastUpdate}</span>;
    }
    return null;
  };

  return (
    <section className='flex flex-col gap-y-2'>
      <SectionHeading
        title='Weekly Statistics'
        icon={<WakatimeIcon className='mr-1' />}
      />
      <SectionSubHeading>
        <div className='dark:text-zinc-400 md:flex-row md:items-center'>
          <span>My </span>
          <Link
            href='https://wakatime.com/@aulianza'
            className='hover:text-zinc-900 hover:underline dark:hover:text-zinc-100'
          >
            WakaTime
          </Link>
          <span> last 7 days stats.</span>
        </div>
        <div className='text-sm text-zinc-600 dark:text-zinc-500'>
          Last update: {renderLastUpdate()}
        </div>
      </SectionSubHeading>

      <Overview data={data} />
      <CodingActiveList data={data} />
    </section>
  );
};

export default CodingActive;
