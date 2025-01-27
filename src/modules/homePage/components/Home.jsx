import React from 'react';
// import LayoutWithSidebar from "@/common/components/layouts/LayoutWithSidebar";
import { Container } from '@/common/components/elements/Container';
import Introduction from './Introduction';
import { PageBreakline } from '@/common/components/elements/Breakline';
import { ServiceSection, ServiceSectionContactMe } from './ServiceSection';
import SkillSection from '@/common/components/partials/skills/components/SkillSection';
import LatestArticlesSection from './LatestArticlesSection';
import Iklan from './Iklan';

const Home = () => {
  return (
    <>
      <Container data-aos='fade-up'>
        <Introduction />
        <PageBreakline className='my-6' />
        <Iklan />
        <LatestArticlesSection />
        <PageBreakline className='my-6' />
        <SkillSection />
        <PageBreakline className='my-6' />
        <ServiceSection />
        <ServiceSectionContactMe />
      </Container>
    </>
  );
};

export default Home;
