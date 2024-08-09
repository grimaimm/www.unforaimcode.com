import clsx from 'clsx';
import * as React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { useCopyToClipboard } from 'usehooks-ts';
import { BiCopy } from 'react-icons/bi';
import {
  TbTextWrapDisabled as NoWrap,
  TbTextWrap as Wrap,
} from 'react-icons/tb';
import { HiCheckCircle as CheckIcon } from 'react-icons/hi';

const CodeBlock = ({ language, value }) => {
  const [isCopied, setIsCopied] = React.useState(false);
  const [isWrapped, setIsWrapped] = React.useState(false);
  const [, copy] = useCopyToClipboard();

  const handleCopy = (code) => {
    copy(code);
    setIsCopied(true);
  };

  const toggleWrap = () => {
    setIsWrapped(!isWrapped);
  };

  React.useEffect(() => {
    if (isCopied) {
      const timeout = setTimeout(() => {
        setIsCopied(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [isCopied]);

  return (
    <div className='group relative'>
      <div
        className={clsx(
          'opacity-0 transition focus-within:opacity-100 group-hover:opacity-100',
          'absolute right-0 top-0 m-[11px] flex gap-1',
        )}
      >
        <button
          onClick={toggleWrap}
          title='Wrap Code'
          type='button'
          aria-label='Wrap Code'
          data-umami-event='Wrap Code'
          className={clsx([
            'md:hidden',
            'rounded-md p-1 text-lg transition-colors md:block md:p-1.5',
            'border border-gray-300 dark:border-neutral-900 dark:hover:border-neutral-800',
            'text-neutral-700 dark:text-neutral-400',
            'dark:bg-charcoal-500 dark:hover:bg-charcoal-400 bg-[#ffffff] hover:bg-gray-100',
          ])}
        >
          {/* <BsTextWrap /> */}
          {!isWrapped ? <Wrap /> : <NoWrap />}
        </button>
        <button
          onClick={() => handleCopy(value)}
          title='Copy to Clipboard'
          type='button'
          aria-label='Copy to Clipboard'
          data-umami-event='Copy to Clipboard'
          className={clsx([
            'rounded-md p-1 text-lg transition-colors md:block md:p-1.5',
            'border border-gray-300 dark:border-neutral-900 dark:hover:border-neutral-800',
            'text-neutral-700 dark:text-neutral-400',
            'dark:bg-charcoal-500 dark:hover:bg-charcoal-400 bg-[#ffffff] hover:bg-gray-100',
          ])}
        >
          {!isCopied ? (
            <BiCopy className='text-neutral-700 dark:text-neutral-400' />
          ) : (
            <CheckIcon className='text-green-600' />
          )}
        </button>
      </div>

      <SyntaxHighlighter
        language={language}
        style={atomDark}
        wrapLongLines={isWrapped}
        customStyle={{
          padding: '20px',
          fontSize: '14px',
          borderRadius: '8px',
          paddingRight: '50px',
        }}
      >
        {value}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
