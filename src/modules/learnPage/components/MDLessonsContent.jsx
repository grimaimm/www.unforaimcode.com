// components/partials/blockcode/MDXComponent.jsx
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import CodeBlock from '@/common/components/partials/blockcode/CodeBlock';
import Image from '@/common/components/elements/Image';

const MDLessonsContent = ({ markdownContent }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]} // Memungkinkan HTML di-render
      components={{
        // ===== Image component ===== //
        img: ({ node, ...props }) => (
          <Image
            width={50}
            height={50}
            alt='image'
            className='rounded-xl'
            {...props}
          />
        ),

        // ===== Link component ===== //
        a: ({ node, ...props }) => (
          <a
            className='cursor-pointer text-teal-500 hover:text-teal-400 hover:underline'
            {...props}
          />
        ),

        // ===== Paragraf component ===== //
        p: ({ node, ...props }) => <p {...props} />,

        // ===== H2 component ===== //
        h2: ({ node, ...props }) => (
          <h2 className='text-xl font-medium dark:text-zinc-300' {...props} />
        ),

        // ===== H3 component ===== //
        h3: ({ node, ...props }) => (
          <h3
            className='pt-4 text-[18px] font-medium leading-snug dark:text-zinc-300'
            {...props}
          />
        ),

        // ===== List Disc component ===== //
        ul: ({ node, ...props }) => (
          <ul className='list-disc space-y-3 pb-2 pl-10' {...props} />
        ),

        // ===== List Decimal component ===== //
        ol: ({ node, ...props }) => (
          <ol className='list-decimal space-y-3 pb-2 pl-10' {...props} />
        ),

        // ===== Code component ===== //
        code: ({ node, inline, className, children, ...props }) => {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            <CodeBlock
              language={match[1]}
              value={String(children).replace(/\n$/, '')}
            />
          ) : (
            <code
              className='rounded-md bg-zinc-200 px-2 py-1 font-light text-sky-600 dark:bg-zinc-800 dark:text-indigo-300'
              {...props}
            >
              {children}
            </code>
          );
        },

        // ===== Blockquote component ===== //
        blockquote: ({ node, ...props }) => {
          const index = node.position?.start.line || 0;
          const id = `blockquote-${index}`;
          return (
            <blockquote
              id={id}
              className='rounded-br-2xl border-l-[5px] border-zinc-700 border-l-indigo-500 bg-zinc-200 py-3 pl-6 text-lg font-medium text-indigo-800 dark:bg-zinc-800 dark:text-indigo-300'
              {...props}
            />
          );
        },

        // ===== Table component ===== //
        table: ({ node, ...props }) => (
          <div className='table-container'>
            <table className='table w-full' {...props} />
          </div>
        ),

        // ===== Table Head component ===== //
        th: ({ node, ...props }) => (
          <th
            className='border px-3 py-1 text-left dark:border-zinc-600'
            {...props}
          />
        ),

        // ===== Table Data component ===== //
        td: ({ node, ...props }) => (
          <td className='border px-3 py-1 dark:border-zinc-600' {...props} />
        ),
      }}
    >
      {markdownContent}
    </ReactMarkdown>
  );
};

export default MDLessonsContent;
