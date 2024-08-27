import * as React from 'react';
import { NextSeo } from 'next-seo';
import { ContainerCenter } from '@/common/components/elements/Container';
import BackButton from '@/common/components/elements/BackButton';
import { FetchLearnBySlug } from '@/pages/api/learn';
import LessonsHeader from '@/modules/learnPage/components/LessonsHeader';
import { promises as fs } from 'fs';
import path from 'path';
import CommingSoonState from '@/common/components/elements/State';
import LessonsDetail from '@/modules/learnPage/components/LessonsDetail';

const LessonSlug = ({
  lessonDetail,
  learn,
  initialMarkdownContent,
  currentIndex,
}) => {
  const [isEnglish, setIsEnglish] = React.useState(true);
  const [content, setContent] = React.useState(initialMarkdownContent);
  const [isLoading, setIsLoading] = React.useState(false);

  const toggleLanguage = () => {
    setIsLoading(true);
    const newLanguage = isEnglish ? 'id' : 'en';

    // Make sure learn.contents is defined
    const newContent =
      learn?.contents?.[newLanguage]?.[lessonDetail.subslug] || '';

    setTimeout(() => {
      setContent(newContent);
      setIsEnglish((prev) => !prev);
      setIsLoading(false);
    }, 2000); // 2 seconds delay
  };

  React.useEffect(() => {
    setContent(initialMarkdownContent);
  }, [initialMarkdownContent]);

  if (!lessonDetail) {
    return <CommingSoonState message='No Data' />;
  }

  const handleNext = () => {
    if (learn && currentIndex < learn.content.length - 1) {
      window.location.href = `/learn/${learn.slug}/${learn.content[currentIndex + 1].slug}`;
    }
  };

  const handlePrevious = () => {
    if (learn && currentIndex > 0) {
      window.location.href = `/learn/${learn.slug}/${learn.content[currentIndex - 1].slug}`;
    }
  };

  const nextTitle =
    learn && currentIndex < learn.content.length - 1
      ? learn.content[currentIndex + 1].title
      : '';
  const previousTitle =
    learn && currentIndex > 0 ? learn.content[currentIndex - 1].title : '';

  const PAGE_DESCRIPTION = `Details of the lesson: ${lessonDetail.title}`;
  const canonicalUrl = `https://aimdev.xyz/learn/${learn?.slug || ''}/${lessonDetail?.subslug || ''}`;

  return (
    <>
      <NextSeo
        title={`${lessonDetail?.title} - Project Muhammad Rahim`}
        description={PAGE_DESCRIPTION}
        canonical={canonicalUrl}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: 'Date not available',
            modifiedTime: 'Date not available',
            authors: ['Muhammad Rahim'],
          },
          url: canonicalUrl,
          images: [
            {
              url: learn?.original_image,
            },
          ],
          siteName: 'Learn Muhammad Rahim',
        }}
      />
      <ContainerCenter data-aos='fade-up'>
        <BackButton url={`/learn/${learn.slug}`} />
        <LessonsHeader
          learn={learn}
          contentItem={lessonDetail}
          markdownContent={content}
          isEnglish={isEnglish}
          toggleLanguage={toggleLanguage}
          isLoading={isLoading}
        />
        <LessonsDetail
          markdownContent={content}
          currentIndex={currentIndex}
          totalItems={learn ? learn.content.length : 0}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          previousTitle={previousTitle}
          nextTitle={nextTitle}
        />
      </ContainerCenter>
    </>
  );
};

export async function getServerSideProps(context) {
  const { slug, subslug } = context.params;
  const filePathEn = path.join(
    process.cwd(),
    'src',
    'contents',
    'learn',
    slug,
    'en',
    `${subslug}.md`,
  );
  const filePathId = path.join(
    process.cwd(),
    'src',
    'contents',
    'learn',
    slug,
    'id',
    `${subslug}.md`,
  );

  let initialMarkdownContent = '';
  let learn = null;

  try {
    initialMarkdownContent = await fs.readFile(filePathEn, 'utf8');
  } catch (err) {
    console.error('Error reading markdown file (English):', err);
  }

  // Fetch learn data to find the lesson
  const learnArray = await FetchLearnBySlug(slug);
  learn = learnArray.length > 0 ? learnArray[0] : null;

  if (learn) {
    // Find the specific lesson based on subslug
    const lessonDetail = learn.content.find((item) => item.subslug === subslug);
    const currentIndex = learn.content.findIndex(
      (item) => item.subslug === subslug,
    );
    const contents = {
      en: { [subslug]: initialMarkdownContent },
      id: {}, // Placeholder for other language content
    };

    // Fetch the content for the other language
    try {
      contents.id[subslug] = await fs.readFile(filePathId, 'utf8');
    } catch (err) {
      console.error('Error reading markdown file (Indonesian):', err);
    }

    return {
      props: {
        lessonDetail: lessonDetail || null,
        learn: { ...learn, contents },
        initialMarkdownContent: initialMarkdownContent || '',
        currentIndex: currentIndex >= 0 ? currentIndex : null,
      },
    };
  } else {
    return {
      props: {
        lessonDetail: null,
        learn: null,
        initialMarkdownContent: '',
        currentIndex: null,
      },
    };
  }
}

export default LessonSlug;
