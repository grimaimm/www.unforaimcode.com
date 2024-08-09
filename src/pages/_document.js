import { Html, Head, Main, NextScript } from 'next/document';
import { onestSans } from '@/styles/fonts';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <script
          async
          defer
          src='https://cloud.umami.is/script.js'
          data-website-id='781f8ae1-ebd5-4afa-b05c-fe36d9099c05'
        ></script>
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
        <link rel='manifest' href='/favicon/site.webmanifest' />
        <link
          rel='mask-icon'
          href='/favicon/safari-pinned-tab.svg'
          color='#121212'
        />
        <meta name='theme-color' content='#121212' />
        <meta
          name='keywords'
          content='unforaimcode, aiiimmmm, muhammad rahim, web developer, belajar javascript, belajar flask python'
        />
        <meta
          name='google-site-verification'
          content='4UATjALUSEx0uYrFZkjp5F0jjuA_TXSHDjX3Jzpm-HQ'
        />
      </Head>
      <body className={onestSans.className}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
