import clsx from 'clsx';
import * as React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  materialOceanic,
  coldarkCold,
} from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { useCopyToClipboard } from 'usehooks-ts';
import { BiCopy } from 'react-icons/bi';
import {
  TbTextWrapDisabled as NoWrap,
  TbTextWrap as Wrap,
} from 'react-icons/tb';
import { HiCheckCircle as CheckIcon } from 'react-icons/hi';
import ThemeContext from '@/common/context/ThemeContext';

const CodeBlock = ({ language, value }) => {
  const [isCopied, setIsCopied] = React.useState(false);
  const [isWrapped, setIsWrapped] = React.useState(false);
  const [, copy] = useCopyToClipboard();
  const { theme } = React.useContext(ThemeContext);

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

  const getBackgroundStyle = (theme) => {
    const backgroundColor = theme === 'dark' ? '#2d2d2d' : '#e4e4e7';
    const themeStyle = theme === 'dark' ? materialOceanic : coldarkCold;

    const gradientBackground =
      theme === 'dark'
        ? 'linear-gradient(to bottom right, rgba(39, 39, 42, 0.8), rgba(24, 24, 27, 0.5))'
        : 'linear-gradient(to bottom right, #f4f4f5, #e4e4e7)';

    const border = theme === 'dark' ? '1px solid #27272a' : '1px solid #e4e4e7';

    return Object.assign({}, themeStyle, {
      'pre[class*="language-"]': {
        ...themeStyle['pre[class*="language-"]'],
        background: gradientBackground,
        fontFamily: 'Roboto Mono, monospace',
        border: border,
      },
      'code[class*="language-"]': {
        ...themeStyle['code[class*="language-"]'],
        background: 'transparent',
        fontFamily: 'Roboto Mono, monospace',
      },
    });
  };

  return (
    <div className='group relative'>
      <div
        className={clsx(
          'opacity-0 transition-opacity duration-300 group-hover:opacity-100',
          'absolute right-0 top-0 m-2 flex gap-2',
          'z-[1]', // Ensure buttons are above other elements
        )}
        style={{ pointerEvents: 'auto' }} // Ensure pointer events are enabled
      >
        <button
          onClick={toggleWrap}
          title='Wrap Code'
          type='button'
          aria-label='Wrap Code'
          data-umami-event='Wrap Code'
          className={clsx(
            'block rounded-md p-1 text-lg transition-colors md:hidden',
            'border border-zinc-300 dark:border-zinc-700',
            'text-zinc-700 dark:text-neutral-300',
            'bg-zinc-50 dark:bg-zinc-800',
            'hover:bg-zinc-100 dark:hover:bg-zinc-900',
          )}
        >
          {!isWrapped ? <Wrap /> : <NoWrap />}
        </button>
        <button
          onClick={() => handleCopy(value)}
          title='Copy to Clipboard'
          type='button'
          aria-label='Copy to Clipboard'
          data-umami-event='Copy to Clipboard'
          className={clsx(
            'rounded-md p-1 text-lg transition-colors',
            'border border-zinc-300 dark:border-zinc-700',
            'text-zinc-700 dark:text-neutral-300',
            'bg-zinc-50 dark:bg-zinc-800',
            'hover:bg-zinc-100 dark:hover:bg-zinc-900',
          )}
        >
          {!isCopied ? <BiCopy /> : <CheckIcon className='text-green-600' />}
        </button>
      </div>

      <SyntaxHighlighter
        language={language}
        style={getBackgroundStyle(theme)}
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
