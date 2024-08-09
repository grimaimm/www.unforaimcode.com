import { NextSeo } from 'next-seo';
import { SWRConfig } from 'swr';
import { Container } from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import Dashboard from '@/modules/dashboardPage';
import { getGithubUser } from '@/services/github';

const PAGE_TITLE = 'Dashboard';
const PAGE_DESCRIPTION =
  'This is my personal dashboard, built with Next.js API routes deployed as serverless functions.';

const DashboardPage = ({ fallback }) => {
  return (
    <SWRConfig value={{ fallback }}>
      <Container data-aos='fade-up'>
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <Dashboard />
      </Container>
    </SWRConfig>
  );
};

export default DashboardPage;

export const getStaticProps = async () => {
  const githubUserPersonal = await getGithubUser('personal');

  return {
    props: {
      fallback: {
        '/api/github?type=personal': githubUserPersonal?.data,
      },
    },
    revalidate: 1, // Revalidate every second
  };
};
