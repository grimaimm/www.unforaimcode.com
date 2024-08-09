import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import CodeBlock from './CodeBlock';

const MarkdownRenderer = ({ content }) => {
  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw]}
      components={{
        // ===== Code component ===== //
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
        // ===== Blockquote component ===== //
        blockquote: ({ node, ...props }) => {
          const index = node.position?.start.line || 0;
          const id = `blockquote-${index}`;
          return (
            <blockquote
              id={id}
              className='rounded-br-2xl border-l-[5px] border-neutral-700 border-l-cyan-500 bg-neutral-200 py-3 pl-6 text-lg font-medium text-cyan-800 dark:bg-neutral-800 dark:text-cyan-200'
              {...props}
            />
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
