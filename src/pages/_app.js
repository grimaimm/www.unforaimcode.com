import AOS from 'aos';
import 'aos/dist/aos.css';
import 'tailwindcss/tailwind.css';
import '@/styles/Animation.css';
import '@/styles/globals.css';
import '@/styles/App.css';

import * as React from 'react';
import dynamic from 'next/dynamic';
import { SessionProvider } from 'next-auth/react';
import { useMediaQuery } from 'react-responsive';
import { ArticleJsonLd, DefaultSeo } from 'next-seo';
import { firaCode, jakartaSans, onestSans, soraSans } from '@/styles/fonts';
import { ThemeProvider } from '@/common/context/ThemeContext';
import { CommandPaletteProvider } from '@/common/context/CommandPaletteContext';
import { useRouter } from 'next/router';
import { LayoutProvider, useLayout } from '@/common/context/LayoutContext';
import CommandPalette from '@/common/components/elements/CommandPalette';
import LayoutWithSidebar from '@/common/components/layouts/LayoutWithSidebar';
import LayoutWithoutSidebar from '@/common/components/layouts/LayoutWithoutSidebar';
import NowPlayingCard from '@/common/components/partials/spotify/NowPlayingCard';
import NowPlayingBar from '@/common/components/partials/spotify/NowPlayingBar';
import defaultSEOConfig from '../../next-seo.config';

const ProgressBar = dynamic(
  () => import('@/common/components/elements/ProgressBar'),
  { ssr: false },
);

const Notification = dynamic(
  () => import('@/common/components/elements/Notification'),
  {
    ssr: false,
  },
);

function AppLayout({ children }) {
  const { layout, setLayout, loading } = useLayout();
  const router = useRouter();

  React.useEffect(() => {
    if (router.pathname.includes('slug') || router.pathname.includes('/blog')) {
      setLayout('withoutSidebar');
    } else {
      setLayout('withSidebar');
    }
  }, [router.pathname, setLayout]);

  if (loading) {
    return null;
  }

  return layout === 'withoutSidebar' ? (
    <LayoutWithoutSidebar>{children}</LayoutWithoutSidebar>
  ) : (
    <LayoutWithSidebar>{children}</LayoutWithSidebar>
  );
}

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 50,
    });
  }, []);

  const isMobile = useMediaQuery({ query: '(max-width: 1023px)' });

  React.useEffect(() => {
    document.querySelectorAll('meta[data-next-head]').forEach((meta) => {
      meta.removeAttribute('data-next-head');
    });
  }, []);

  return (
    <>
      <style jsx global>
        {`
          html {
            --jakartaSans-font: ${jakartaSans.style.fontFamily};
            --soraSans-font: ${soraSans.style.fontFamily};
            --firaCode-font: ${firaCode.style.fontFamily};
            --onestSans-font: ${onestSans.style.fontFamily};
          }
        `}
      </style>
      <DefaultSeo {...defaultSEOConfig} />
      {/* <ArticleJsonLd
        type='Person'
        url='https://aimdev.xyz'
        title='Web Developer'
        images={[
          'https://res.cloudinary.com/aiiimmmm/image/upload/v1722931611/metaImage-unforaimcode_o8qyur.png',
        ]}
        authorName='Muhammad Rahim'
        description='Next SEO packages simplifies the SEO management in Next Apps with less configurations'
      /> */}
      <SessionProvider session={session}>
        <LayoutProvider>
          <ThemeProvider>
            <CommandPaletteProvider>
              <AppLayout>
                <CommandPalette />
                <ProgressBar />
                <Component {...pageProps} />
                {isMobile ? <NowPlayingCard /> : <NowPlayingBar />}
                <Notification />
              </AppLayout>
            </CommandPaletteProvider>
          </ThemeProvider>
        </LayoutProvider>
      </SessionProvider>
    </>
  );
}
