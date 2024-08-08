import { NextSeo } from 'next-seo';
import Home from '@/modules/homePage';

const HomePage = () => {
  return (
    <>
      <NextSeo title='Muhammad Rahim - Personal Website' />
      <Home />
    </>
  );
};

export default HomePage;
