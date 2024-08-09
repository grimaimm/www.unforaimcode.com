// components/partials/blockcode/MDXComponent.jsx
// import * as React from 'react';
// import Markdown from 'react-markdown';
// import remarkGfm from 'remark-gfm';
// import CodeBlock from './CodeBlock';
// import Image from '../../elements/Image';
// import { useRouter } from 'next/router';

// const MDXComponents = ({ children }) => {
//   return (
//     <Markdown
//       remarkPlugins={[remarkGfm]}
//       components={{
//         img: ({ node, ...props }) => {
//           const router = useRouter();
//           const isBlogRoute = router.pathname.startsWith('/blog');
//           return (
//             <Image
//               width={1920}
//               height={900}
//               alt="image"
//               className={`${isBlogRoute ? 'mt-1 mb-4' : ''
//               } rounded-xl`}
//               {...props}
//             />
//           );
//         },
//         a: ({ node, ...props }) => (
//           <a
//             className="cursor-pointer text-teal-500 hover:text-teal-400 hover:underline"
//             {...props}
//           />
//         ),
//         p: ({ node, ...props }) => <p {...props} />,
//         h2: ({ node, ...props }) => (
//           <h2 className="pt-5 text-xl font-medium dark:text-neutral-300" {...props} />
//         ),
//         h3: ({ node, ...props }) => {
//           const router = useRouter();
//           const isBlogRoute = router.pathname.startsWith('/blog');
//           return (
//             <h3
//               className={`${isBlogRoute ? 'mt-6 mb-2' : 'pt-4'
//                 } text-[18px] font-medium leading-snug dark:text-neutral-300`}
//               {...props}
//             />
//           );
//         },
//         ul: ({ node, ...props }) => (
//           <ul className="list-disc space-y-3 pt-4 pb-4 pl-10" {...props} />
//         ),
//         ol: ({ node, ...props }) => (
//           <ol className="list-decimal space-y-3 pt-4 pb-4 pl-10" {...props} />
//         ),
//         code: ({ node, inline, className, children, ...props }) => {
//           const match = /language-(\w+)/.exec(className || '');
//           return !inline && match ? (
//             <CodeBlock language={match[1]} value={String(children).replace(/\n$/, '')} />
//           ) : (
//             <code className="rounded-md bg-neutral-200 px-2 py-1 text-[14px] font-light text-sky-600 dark:bg-neutral-700 dark:text-sky-300">
//               {children}
//             </code>
//           );
//         },
//         blockquote: ({ node, ...props }) => {
//           // Create an ID based on the index
//           const index = node.position?.start.line || 0;
//           const id = `blockquote-${index}`;
//           const router = useRouter();
//           const isBlogRoute = router.pathname.startsWith('/blog');

//           return (
//             <blockquote
//               id={id} // Add the ID here
//               className={`${isBlogRoute ? 'my-6' : ''
//                 } rounded-br-2xl border-l-[5px] border-neutral-700 border-l-cyan-500 bg-neutral-200 py-3 pl-3 md:pl-6 font-sora text-lg font-medium text-cyan-800 dark:bg-neutral-800 dark:text-cyan-200`}
//               {...props}
//             />
//           );
//         },

//         table: ({ node, ...props }) => (
//           <div className="table-container">
//             <table className="table w-full" {...props} />
//           </div>
//         ),
//         th: ({ node, ...props }) => (
//           <th className="border px-3 py-1 text-left dark:border-neutral-600" {...props} />
//         ),
//         td: ({ node, ...props }) => (
//           <td className="border px-3 py-1 dark:border-neutral-600" {...props} />
//         ),
//       }}
//     >
//       {children}
//     </Markdown >
//   );
// };

// export default MDXComponents;

// components/partials/blockcode/MDXComponents.jsx
import * as React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import CodeBlock from './CodeBlock';
import Image from '../../elements/Image';
import { useRouter } from 'next/router';

// Define a component for the image element
const ImgComponent = ({ node, ...props }) => {
  const router = useRouter();
  const isBlogRoute = router.pathname.startsWith('/blog');
  return (
    <Image
      width={1920}
      height={900}
      alt='image'
      className={`${isBlogRoute ? 'mb-4 mt-1' : ''} rounded-xl`}
      {...props}
    />
  );
};

// Define a component for the h3 element
const H3Component = ({ node, ...props }) => {
  const router = useRouter();
  const isBlogRoute = router.pathname.startsWith('/blog');
  return (
    <h3
      className={`${isBlogRoute ? 'mb-2 mt-6' : 'pt-4'} text-[18px] font-medium leading-snug dark:text-neutral-300`}
      {...props}
    />
  );
};

// Define a component for the blockquote element
const BlockquoteComponent = ({ node, ...props }) => {
  const index = node.position?.start.line || 0;
  const id = `blockquote-${index}`;
  const router = useRouter();
  const isBlogRoute = router.pathname.startsWith('/blog');

  return (
    <blockquote
      id={id}
      className={`${isBlogRoute ? 'my-6' : ''} rounded-br-2xl border-l-[5px] border-neutral-700 border-l-cyan-500 bg-neutral-200 py-3 pl-3 font-sora text-lg font-medium text-cyan-800 dark:bg-neutral-800 dark:text-cyan-200 md:pl-6`}
      {...props}
    />
  );
};

// Main component
const MDXComponents = ({ children }) => {
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      components={{
        img: ImgComponent, // Use the ImgComponent
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
        h3: H3Component, // Use the H3Component
        ul: ({ node, ...props }) => (
          <ul className='list-disc space-y-3 pb-4 pl-10 pt-4' {...props} />
        ),
        ol: ({ node, ...props }) => (
          <ol className='list-decimal space-y-3 pb-4 pl-10 pt-4' {...props} />
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
        blockquote: BlockquoteComponent, // Use the BlockquoteComponent
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

export default MDXComponents;
