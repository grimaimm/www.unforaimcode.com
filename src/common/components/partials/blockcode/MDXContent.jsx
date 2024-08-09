// components/partials/blockcode/MDXComponent.jsx
import * as React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import CodeBlock from './CodeBlock';
import Image from '../../elements/Image';

const MDXContent = ({ children, className = {} }) => {
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      components={{
        img: ({ node, ...props }) => (
          <Image width={1920} height={900} alt='image' {...props} />
        ),
        a: ({ node, ...props }) => (
          <a
            className='cursor-pointer text-teal-500 hover:text-teal-400 hover:underline'
            {...props}
          />
        ),
        p: ({ node, ...props }) => <p {...props} />,
        h2: ({ node, ...props }) => (
          <h2
            className='pt-5 text-xl font-medium dark:text-neutral-300'
            {...props}
          />
        ),
        h3: ({ node, ...props }) => (
          <h3
            className='pt-4 text-[18px] font-medium leading-snug dark:text-neutral-300'
            {...props}
          />
        ),
        ul: ({ node, ...props }) => (
          <ul className='list-disc space-y-3 pb-2 pl-10' {...props} />
        ),
        ol: ({ node, ...props }) => (
          <ol className='list-decimal space-y-3 pb-2 pl-10' {...props} />
        ),
        code: ({ node, inline, className, children, ...props }) => {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            <CodeBlock
              language={match[1]}
              value={String(children).replace(/\n$/, '')}
            />
          ) : (
            <code className='rounded-md bg-neutral-200 px-2 py-1 text-[14px] font-light text-sky-600 dark:bg-neutral-700 dark:text-sky-300'>
              {children}
            </code>
          );
        },
        blockquote: ({ node, ...props }) => {
          const index = node.position?.start.line || 0;
          const id = `blockquote-${index}`;

          return (
            <blockquote
              id={id}
              className={`rounded-br-2xl border-l-[5px] bg-neutral-200 py-3 pl-3 font-sora text-lg font-medium dark:bg-neutral-800 md:pl-6 ${className.blockquote || ''}`}
              {...props}
            />
          );
        },
        table: ({ node, ...props }) => (
          <div className='table-container'>
            <table className='table w-full' {...props} />
          </div>
        ),
        th: ({ node, ...props }) => (
          <th
            className='border px-3 py-1 text-left dark:border-neutral-600'
            {...props}
          />
        ),
        td: ({ node, ...props }) => (
          <td className='border px-3 py-1 dark:border-neutral-600' {...props} />
        ),
      }}
    >
      {children}
    </Markdown>
  );
};

export default MDXContent;
