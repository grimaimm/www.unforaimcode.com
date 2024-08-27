import * as React from 'react';
import { NextSeo } from 'next-seo';
import { ContainerCenter } from '@/common/components/elements/Container';
import { FetchLearnBySlug } from '@/pages/api/learn';
import { promises as fs } from 'fs';
import BackButton from '@/common/components/elements/BackButton';
import LessonList from '@/modules/learnPage/components/LessonList';
import PageHeading from '@/common/components/elements/PageHeading';
import path from 'path';

// Function to analyze difficulty based on markdown content
function analyzeDifficulty(markdownContent) {
  const codeBlockCount = (markdownContent.match(/```[\s\S]*?```/g) || [])
    .length;

  if (codeBlockCount === 0) return 'easy';
  if (codeBlockCount <= 2) return 'easy';
  if (codeBlockCount <= 5) return 'medium';
  return 'hard';
}

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const learnArray = await FetchLearnBySlug(slug);
  const learn = learnArray.length > 0 ? learnArray[0] : null;

  if (learn && Array.isArray(learn.content)) {
    // Calculate difficulty for each content item
    for (const contentItem of learn.content) {
      const markdownFile = path.join(
        process.cwd(),
        'src',
        'contents',
        'learn',
        slug,
        'en',
        `${contentItem.slug}.md`,
      );
      let markdownContent = '';
      try {
        markdownContent = await fs.readFile(markdownFile, 'utf8');
        contentItem.difficulty = analyzeDifficulty(markdownContent);
      } catch (err) {
        console.error('Error reading markdown file:', err);
        contentItem.difficulty = 'unknown'; // Default value if there's an error
      }
    }
  } else {
    // Handle case where learn.content is not an array
    learn.content = [];
  }

  return {
    props: {
      learn,
    },
  };
}

const LearnSlug = ({ learn }) => {
  if (!learn) {
    return <div>No learn found</div>;
  }

  const PAGE_TITLE = learn.title || 'Learn Details';
  const PAGE_DESCRIPTION =
    learn.description || 'Details of the selected Learn post.';

  const canonicalUrl = `https://aimdev.xyz/learn/${learn?.slug || ''}`;

  return (
    <>
      <NextSeo
        title={`${learn?.title} - Project Muhammad Rahim`}
        description={learn?.description}
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
        <BackButton url='/learn' />
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <LessonList learn={learn} />
      </ContainerCenter>
    </>
  );
};

export default LearnSlug;
