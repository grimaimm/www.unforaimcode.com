import * as React from 'react';
import { NextSeo } from 'next-seo';
import { FetchProjects } from '../api/projects';
import { Container } from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import Projects from '@/modules/projectPage';

const PAGE_TITLE = 'Projects';
const PAGE_DESCRIPTION =
  'Several projects that I have worked on, both private and open source.';

const ProjectsPage = ({ initialProjects }) => {
  const [visibleProjects, setVisibleProjects] = React.useState(6);
  const loadMore = () => setVisibleProjects((prev) => prev + 2);
  const hasMore = visibleProjects < initialProjects.length;

  return (
    <>
      <NextSeo title={`${PAGE_TITLE} - Muhammad Rahim`} />
      <Container data-aos='fade-up'>
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <Projects
          projects={initialProjects.slice(0, visibleProjects)}
          loadMore={loadMore}
          hasMore={hasMore}
        />
      </Container>
    </>
  );
};
export async function getServerSideProps() {
  try {
    const projects = await FetchProjects();
    return { props: { initialProjects: projects } };
  } catch (error) {
    console.error('Error fetching projects:', error);
    return { props: { initialProjects: [] } };
  }
}

export default ProjectsPage;
