const canonicalUrl = 'https://aimdev.xyz';
const metaImageV1 =
  'https://res.cloudinary.com/aiiimmmm/image/upload/v1725350270/Meta_Image_zhzivv.png';
const metaImageV2 = 'https://aimdev.xyz/images/Me/metaImage-aimdev.png';
const metaDescription =
  'Experienced Web Developer skilled in ReactJS, TailwindCSS, JavaScript, and proficient in Flask and Python.';

const defaultSEOConfig = {
  defaultTitle: 'Muhammad Rahim - Personal Website',
  description: metaDescription,
  canonical: canonicalUrl,
  openGraph: {
    canonical: canonicalUrl,
    title: 'Muhammad Rahim - Personal Website',
    description: metaDescription,
    type: 'website',
    locale: 'id-ID',
    images: [
      {
        url: metaImageV2,
        alt: 'aimdev.xyz og-image',
        width: 800,
        height: 600,
      },
      {
        url: metaImageV2,
        alt: 'aimdev.xyz og-image',
        width: 1200,
        height: 630,
      },
      {
        url: metaImageV2,
        alt: 'aimdev.xyz og-image',
        width: 1600,
        height: 900,
      },
    ],
    site_name: 'aimdev.xyz',
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
};

export default defaultSEOConfig;
