import { Html, Head, Main, NextScript } from 'next/document';
import { onestSans } from '@/styles/fonts';

import GoogleAdsense from '@/common/components/elements/GoogleAdsense';

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
        <link rel='icon' type='image/x-icon' href='/favicon/favicon.ico' />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#09090b' />
        <meta name='msapplication-TileColor' content='#09090b' />
        <meta name='theme-color' content='#09090b' />

        {/* Umami Analytics Script */}
        <script
          defer
          src='https://cloud.umami.is/script.js'
          data-website-id='781f8ae1-ebd5-4afa-b05c-fe36d9099c05'
        ></script>

        <meta
          name='keywords'
          content='aimdev, aimdev.xyz, aimdev xyz, unforaimcode, webdev, aiiimmmm, muhammad rahim, web developer, belajar javascript, belajar flask python'
        />

        <GoogleAdsense />
        <meta
          name='google-site-verification'
          content='vIlIkVTp8dFcPk9yxsUAMF2aJ7IqwD-HtbinaKc4UpA'
        />
      </Head>
      <body className={onestSans.className}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
