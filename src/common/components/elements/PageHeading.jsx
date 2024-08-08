import * as React from 'react';

const PageHeading = ({ title, description }) => {
  return (
    <>
      <h1 className="text-2xl font-medium">{title}</h1>
      {description && (
        <p className="mb-6 border-b border-dashed border-zinc-600 pb-6 pt-2 text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
      )}
    </>
  );
};

export default PageHeading;
