import { useState, useEffect } from 'react';
import useSWR from 'swr';
import { fetcher } from '@/services/fetcher';
import { MdSpeed } from "react-icons/md";
import { SectionHeading, SectionSubHeading } from '@/common/components/elements/SectionTitle';
import Link from 'next/link';

import PageSpeedTabs from './PageSpeedTabs';
import PageSpeedContent from './PageSpeedContent';
import PageSpeedLoading from './PageSpeedLoading'; // Import your loading component

const tabNames = ['Home', 'Projects', 'Blog', 'Learn', 'About', 'Contact', 'Dashboard', 'Chat Room'];

const Pagespeeds = () => {
  const { data, error } = useSWR('/api/pagespeed', fetcher);
  const [activeTab, setActiveTab] = useState(tabNames[0]);
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Switch to showing actual data after 8 seconds
    }, 8000);

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  // Set a default empty object for contents if not defined
  const activePage = data?.find((page) => page.id.toLowerCase() === activeTab.toLowerCase()) || { contents: {} };

  return (
    <section className="flex flex-col gap-y-2">
      <SectionHeading
        title="Pagespeed Insight"
        icon={<MdSpeed className="mr-1" />}
      />
      <SectionSubHeading>
        <p className="dark:text-zinc-400">
          My pagespeed index by google APIs
        </p>
        <Link
          href=""
          target="_blank"
          passHref
          className="text-sm text-zinc-600 dark:text-zinc-500 hidden sm:block"
        >
          PageSpeed
        </Link>
      </SectionSubHeading>
      <PageSpeedTabs tabNames={tabNames} activeTab={activeTab} handleTabClick={handleTabClick} />

      <div className="tab-content mt-5">
        {error ? (
          <PageSpeedLoading />
        ) : loading ? ( // Display the loading component while loading is true
          <PageSpeedLoading />
        ) : (
          <>
            {Object.keys(activePage.contents || {}).length > 0 ? (
              <PageSpeedContent activePage={activePage} showActualValues={true} />
            ) : (
              <PageSpeedLoading />
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Pagespeeds;
