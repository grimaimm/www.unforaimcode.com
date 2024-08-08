// // pages/learn/[slug]/[subslug].js

// import React from 'react';
// import { NextSeo } from 'next-seo';
// import { ContainerCenter } from '@/common/components/elements/Container';
// import BackButton from '@/common/components/elements/BackButton';
// import { FetchLearnBySlug } from '@/pages/api/learn';
// import LessonsHeader from '@/modules/learnPage/components/LessonsHeader';
// import { promises as fs } from 'fs';
// import path from 'path';
// import CommingSoonState from '@/common/components/elements/State';
// import LessonsDetail from '@/modules/learnPage/components/LessonsDetail';

// const LessonSlug = ({ lessonDetail, learn, markdownContent, currentIndex }) => {
//   if (!lessonDetail) {
//     return <CommingSoonState message='No Data' />;
//   }

//   const PAGE_TITLE = lessonDetail.title || 'Lesson Details';
//   const PAGE_DESCRIPTION = `Details of the lesson: ${lessonDetail.title}`;

//   const handleNext = () => {
//     if (learn && currentIndex < learn.content.length - 1) {
//       window.location.href = `/learn/${learn.slug}/${learn.content[currentIndex + 1].slug}`;
//     }
//   };

//   const handlePrevious = () => {
//     if (learn && currentIndex > 0) {
//       window.location.href = `/learn/${learn.slug}/${learn.content[currentIndex - 1].slug}`;
//     }
//   };

//   const nextTitle = learn && currentIndex < learn.content.length - 1
//     ? learn.content[currentIndex + 1].title
//     : '';
//   const previousTitle = learn && currentIndex > 0
//     ? learn.content[currentIndex - 1].title
//     : '';

//   return (
//     <>
//       <NextSeo title={`${PAGE_TITLE} - Muhammad Rahim`} description={PAGE_DESCRIPTION} />
//       <ContainerCenter data-aos="fade-up">
//         <BackButton url={`/learn/${learn.slug}`} />
//         <LessonsHeader learn={learn} contentItem={lessonDetail} markdownContent={markdownContent} />
//         <LessonsDetail
//           markdownContent={markdownContent}
//           currentIndex={currentIndex}
//           totalItems={learn ? learn.content.length : 0}
//           handleNext={handleNext}
//           handlePrevious={handlePrevious}
//           previousTitle={previousTitle}
//           nextTitle={nextTitle}
//         />
//       </ContainerCenter>
//     </>
//   );
// };

// export async function getServerSideProps(context) {
//   const { slug, subslug } = context.params;

//   // Construct file path
//   const filePath = path.join(process.cwd(), 'src', 'contents', 'learn', `${slug}`, `${subslug}.md`);

//   // Read the markdown file
//   let markdownContent = '';
//   try {
//     markdownContent = await fs.readFile(filePath, 'utf8');
//   } catch (err) {
//     console.error('Error reading markdown file:', err);
//   }

//   // Fetch learn data to find the lesson
//   const learnArray = await FetchLearnBySlug(slug);
//   const learn = learnArray.length > 0 ? learnArray[0] : null;

//   if (learn) {
//     // Find the specific lesson based on subslug
//     const lessonDetail = learn.content.find(item => item.subslug === subslug);
//     const currentIndex = learn.content.findIndex(item => item.subslug === subslug);
//     return {
//       props: {
//         lessonDetail: lessonDetail || null,
//         learn: learn || null,
//         markdownContent: markdownContent || '',
//         currentIndex: currentIndex >= 0 ? currentIndex : null,
//       },
//     };
//   } else {
//     return {
//       props: {
//         lessonDetail: null,
//         learn: null,
//         markdownContent: '',
//         currentIndex: null,
//       },
//     };
//   }
// }

// export default LessonSlug;


// pages/learn/[slug]/[subslug].js

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

const LessonSlug = ({ lessonDetail, learn, initialMarkdownContent, currentIndex }) => {
  const [isEnglish, setIsEnglish] = React.useState(true);
  const [content, setContent] = React.useState(initialMarkdownContent);
  const [isLoading, setIsLoading] = React.useState(false);

  const toggleLanguage = async () => {
    setIsLoading(true);
    const newLanguage = isEnglish ? 'id' : 'en';
    const newFilePath = path.join(process.cwd(), 'src', 'contents', 'learn', `${learn.slug}`, newLanguage, `${lessonDetail.subslug}.md`);

    // Simulate a delay for loading animation
    setTimeout(async () => {
      try {
        const response = await fetch(`/api/translate?file=${encodeURIComponent(newFilePath)}`);
        const newContent = await response.text();
        setContent(newContent);
        setIsEnglish(prev => !prev);
      } catch (err) {
        console.error('Error fetching translated content:', err);
      } finally {
        setIsLoading(false);
      }
    }, 3000); // 3 seconds delay
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

  const nextTitle = learn && currentIndex < learn.content.length - 1
    ? learn.content[currentIndex + 1].title
    : '';
  const previousTitle = learn && currentIndex > 0
    ? learn.content[currentIndex - 1].title
    : '';

  const PAGE_DESCRIPTION = `Details of the lesson: ${lessonDetail.title}`;
  const canonicalUrl = `${process.env.DOMAIN}/learn/${learn?.slug || ''}/${lessonDetail?.subslug || ''}`;

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
      <ContainerCenter data-aos="fade-up">
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

  // Construct file path for English content
  const filePath = path.join(process.cwd(), 'src', 'contents', 'learn', slug, 'en', `${subslug}.md`);

  // Read the markdown file
  let initialMarkdownContent = '';
  try {
    initialMarkdownContent = await fs.readFile(filePath, 'utf8');
  } catch (err) {
    console.error('Error reading markdown file:', err);
  }

  // Fetch learn data to find the lesson
  const learnArray = await FetchLearnBySlug(slug);
  const learn = learnArray.length > 0 ? learnArray[0] : null;

  if (learn) {
    // Find the specific lesson based on subslug
    const lessonDetail = learn.content.find(item => item.subslug === subslug);
    const currentIndex = learn.content.findIndex(item => item.subslug === subslug);
    return {
      props: {
        lessonDetail: lessonDetail || null,
        learn: learn || null,
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
