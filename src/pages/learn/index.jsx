
import { NextSeo } from 'next-seo';
import { FetchLearns } from '../api/learn';
import { Container } from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import Learn from '@/modules/learnPage';

const PAGE_TITLE = 'Learn';
const PAGE_DESCRIPTION = "It's not a course, it's my personal learning notes. But if you are interested, let's learn together.";

export async function getServerSideProps() {
  const learns = await FetchLearns();
  return { props: { learns } };
}
const LearnPage = ({ learns }) => {
  return (
    <>
      <NextSeo title={`${PAGE_TITLE} - Muhammad Rahim`} />
      <Container data-aos='fade-up'>
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <Learn learns={learns} />
      </Container>
    </>
  );
};

export default LearnPage;