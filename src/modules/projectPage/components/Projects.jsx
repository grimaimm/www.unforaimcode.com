import React, { useEffect, useState } from 'react';
import { FetchProjects } from '@/pages/api/projects';
import { motion } from 'framer-motion';
import InfiniteScroll from 'react-infinite-scroll-component';
import EmptyState from '@/common/components/elements/EmptyState';
import ProjectCard from './ProjectCard';

export async function getServerSideProps() {
  const projects = await FetchProjects();

  return {
    props: {
      projects,
    },
  };
}

const Projects = ({ projects, loadMore, hasMore }) => {
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    setFilteredProjects(projects.filter(project => project.is_show));
  }, [projects]);

  if (filteredProjects.length === 0) {
    return <EmptyState message='No Data' />;
  }
  return (
    <InfiniteScroll
      dataLength={filteredProjects.length}
      next={loadMore}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      style={{ overflow: 'hidden' }}
    >
      <div className='grid gap-5 lg:px-2 pt-2 pb-5 sm:grid-cols-2'>
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id || index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </InfiniteScroll>
  );
}

export default Projects;
