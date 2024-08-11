import { Html, Head, Main, NextScript } from 'next/document';
import { onestSans } from '@/styles/fonts';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        {/* Icons and theme color */}
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicon/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#603cba' />
        <meta name='theme-color' content='#ffffff' />

        {/* Umami Analytics Script */}
        <script
          defer
          src='https://cloud.umami.is/script.js'
          data-website-id='781f8ae1-ebd5-4afa-b05c-fe36d9099c05'
        ></script>

        {/* SEO and Structured Data */}
        <meta
          name='keywords'
          content='unforaimcode, webdev, aiiimmmm, muhammad rahim, web developer, belajar javascript, belajar flask python'
        />
        <script type='application/ld+json'>
          {JSON.stringify({
            '@context': 'http://schema.org',
            '@type': 'Person',
            name: 'Muhammad Rahim',
            url: 'https://unforaimcode.vercel.app',
            image:
              'https://res.cloudinary.com/aiiimmmm/image/upload/v1722931611/metaImage-unforaimcode_o8qyur.png',
          })}
        </script>
      </Head>
      <body className={onestSans.className}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
