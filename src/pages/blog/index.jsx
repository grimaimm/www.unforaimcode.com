import { NextSeo } from 'next-seo';
import { ContainerCenter } from '@/common/components/elements/Container';
import { FetchBlogs } from '../api/blog';
import PageHeading from '@/common/components/elements/PageHeading';
import Blog from '@/modules/blogPage';
import BackButton from '@/common/components/elements/BackButton';

const PAGE_TITLE = 'Blog';
const PAGE_DESCRIPTION = "Exploring the world of code, creativity, and constant learning.";

export async function getServerSideProps() {
  const blogs = await FetchBlogs();

  return {
    props: {
      blogs,
    },
  };
}

const BlogPage = ({ blogs }) => {
  return (
    <>
      <NextSeo title={`${PAGE_TITLE} - Muhammad Rahim`} />
      <ContainerCenter data-aos='fade-up'>
        <BackButton url='/' />
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <Blog blogs={blogs} />
      </ContainerCenter>
    </>
  );
};

export default BlogPage;