import React, { useEffect, useState } from 'react';
import {
  SectionHeading,
  SectionSubHeading,
} from '@/common/components/elements/SectionTitle';
import { HiOutlineNewspaper } from 'react-icons/hi';
import { BsArrowRightShort as ViewAllIcon } from 'react-icons/bs';
import Link from 'next/link';
import { FetchBlogs } from '@/pages/api/blog';
import LatestArticlesCard from './LatestArticlesCard';
import LoadingArticlesCard from './LoadingArticlesCard';

export async function getServerSideProps() {
  const blogs = await FetchBlogs();

  return {
    props: {
      blogs,
    },
  };
}

const LatestArticlesSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      setIsLoading(true);
      const fetchedBlogs = await FetchBlogs();
      setBlogs(fetchedBlogs);
      setIsLoading(false);
    };

    fetchBlogs();
  }, []);

  return (
    <section>
      <div className='space-y-2'>
        <div className='flex items-center justify-between'>
          <SectionHeading
            title='Latest Articles'
            icon={<HiOutlineNewspaper className='mr-1' />}
          />
          <SectionSubHeading>
            <Link href='/blog'>
              <div className='mt-1 flex cursor-pointer gap-1 text-sm text-neutral-700 transition-all duration-300 hover:gap-3 hover:text-neutral-700 dark:text-neutral-400 hover:dark:text-neutral-300'>
                <div className='flex'>
                  View All{' '}
                  <span className='ml-1 hidden sm:block'>Articles</span>
                </div>
                <ViewAllIcon size={22} />
              </div>
            </Link>
          </SectionSubHeading>
        </div>
      </div>
      <div className='latest-article-card scrollbar-hide no-scrollbar mt-2 flex flex-row space-x-3 overflow-y-hidden overflow-x-scroll pt-2'>
        {isLoading
          ? [1, 2].map((item) => <LoadingArticlesCard key={item} />)
          : blogs
              .slice(0, 2)
              .map((blog, index) => (
                <LatestArticlesCard key={index} blog={blog} />
              ))}
      </div>
    </section>
  );
};

export default LatestArticlesSection;
