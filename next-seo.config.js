const canonicalUrl = 'htts://www.aimdev.xyz';
const metaImage =
  'https://res.cloudinary.com/aiiimmmm/image/upload/v1722931611/metaImage-unforaimcode_o8qyur.png';
const metaDescription =
  'Experienced Web Developer skilled in ReactJS, TailwindCSS, JavaScript, and proficient in Flask and Python.';
const metaKeywords =
  'aimdev, aimdev.xyz, aimdev xyz, unforaimcode, webdev, aiiimmmm, muhammad rahim, web developer, belajar javascript, belajar flask python';

const defaultSEOConfig = {
  defaultTitle: 'Muhammad Rahim - Personal Website',
  description: metaDescription,
  canonical: canonicalUrl,
  openGraph: {
    canonical: canonicalUrl,
    title: 'Muhammad Rahim - Personal Website',
    description: metaDescription,
    type: 'website',
    images: [
      {
        url: metaImage,
        alt: 'www.aimdev.xyz og-image',
        width: 800,
        height: 600,
      },
      {
        url: metaImage,
        alt: 'www.aimdev.xyz og-image',
        width: 1200,
        height: 630,
      },
      {
        url: metaImage,
        alt: 'www.aimdev.xyz og-image',
        width: 1600,
        height: 900,
      },
    ],
    site_name: 'Aim Dev',
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
  metaKeywords: metaKeywords,
  jsonLD: `
    {
      "@context": "http://schema.org",
      "@type": "Person",
      "url": "${canonicalUrl}",
      "name": "Muhammad Rahim",
      "logo": "https://res.cloudinary.com/aiiimmmm/image/upload/v1723344881/logo_tey4em.png"
      "image": "${metaImage}"
    }
  `,
};

export default defaultSEOConfig;
