import * as React from 'react';
import { MdOutlineTranslate as Translate } from 'react-icons/md';
import { ImSpinner9 as Spinner } from 'react-icons/im';

const LanguageToggleButton = ({ isEnglish, isLoading, toggleLanguage }) => {
  return (
    <button
      onClick={toggleLanguage}
      className='relative rounded-md bg-indigo-200 px-2 py-1 text-xs font-medium text-indigo-700 hover:opacity-85 dark:bg-indigo-950 dark:text-indigo-200'
      disabled={isLoading}
    >
      {isLoading ? (
        <div className='flex items-center justify-center'>
          <Spinner className='mr-2 animate-spin' size={14} />
          <span className='animate-pulse'>Translating...</span>
        </div>
      ) : (
        <>
          <Translate className='mr-1 inline' size={14} />
          {isEnglish ? 'Read in Bahasa Indonesia' : 'Read in English'}
        </>
      )}
    </button>
  );
};

export default LanguageToggleButton;
