import { NextSeo } from 'next-seo';
import Home from '@/modules/homePage';
import StructuredData from '@/common/components/elements/StructuredData';

function generateStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Muhammad Rahim',
    url: 'htts://unforaimcode.vercel.app',
    image:
      'https://res.cloudinary.com/aiiimmmm/image/upload/v1722931611/metaImage-unforaimcode_o8qyur.png',
    jobTitle: 'Web Developer',
    gender: 'Male',
  };
}

const HomePage = () => {
  return (
    <>
      <StructuredData data={generateStructuredData()} />
      <NextSeo title='Muhammad Rahim - Personal Website' />
      <Home />
    </>
  );
};

export default HomePage;
