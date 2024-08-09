import { format } from 'date-fns';

export const formatBlogSlug = (slug) => slug?.slice(0, -5);

export const formatDate = (date) => {
  return format(new Date(date), 'MMMM dd, yyyy');
};

export const groupContentByChapter = (contents) => {
  return contents.reduce((acc, content) => {
    const { frontMatter } = content;

    const chapter_id = frontMatter.chapter_id ?? 0;
    const chapter_title = frontMatter.chapter_title || 'ungrouped';

    if (!acc[chapter_id]) {
      acc[chapter_id] = {
        chapter_id,
        chapter_title,
        contents: [],
      };
    }

    acc[chapter_id].contents.push(content);

    return acc;
  }, {});
};

export const parseUrl = (url) => {
  const parts = url.split('/');
  return {
    parentSlug: parts[2],
    contentSlug: parts[3],
  };
};

export const removeHtmlTags = (html) => {
  if (typeof DOMParser !== 'undefined') {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  } else {
    return html;
  }
};

export const formatExcerpt = (content, maxLength = 100) => {
  const cleanedContent = removeHtmlTags(content);

  if (cleanedContent.length <= maxLength) {
    return cleanedContent;
  }

  const trimmed = cleanedContent.substring(0, maxLength).replace(/\s+\S*$/, '');

  return trimmed + (cleanedContent.length > maxLength ? '...' : '');
};

// export const calculateReadingTime = (content, wordsPerMinute = 200) => {
//   const cleanedContent = removeHtmlTags(content);
//   const wordCount = cleanedContent.split(/\s+/).length;
//   const readingTimeMinutes = Math.ceil(wordCount / wordsPerMinute);
//   return readingTimeMinutes;
// };

export const calculateReadingTime = (content, wordsPerMinute = 200) => {
  if (!content) {
    // Jika content tidak ada, kembalikan waktu baca default
    return 0;
  }

  const cleanedContent = removeHtmlTags(content);
  const wordCount = cleanedContent.split(/\s+/).length;
  const readingTimeMinutes = Math.ceil(wordCount / wordsPerMinute);
  return readingTimeMinutes;
};

// Contoh penggunaan:
// const content = "<p>This is an example content with some HTML tags.</p>";
// const readingTime = calculateReadingTime(content);
// console.log(`Estimated reading time: ${readingTime} minute(s)`);
