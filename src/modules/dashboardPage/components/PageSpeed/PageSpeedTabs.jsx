import React from 'react';

const PageSpeedTabs = ({ tabNames, activeTab, handleTabClick }) => {
  return (
    <div className="mt-4 flex space-x-2 pb-2 overflow-x-auto scrollbar-hide">
      {tabNames.map((tabName) => (
        <button
          key={tabName}
          className={`rounded-lg px-2 py-1 text-xs whitespace-nowrap ${tabName === activeTab
            ? "bg-zinc-800 text-zinc-200 dark:bg-zinc-200 dark:text-zinc-800"
            : "bg-zinc-200 dark:bg-zinc-800"
            }`}
          onClick={() => handleTabClick(tabName)}
        >
          {tabName}
        </button>
      ))}
    </div>
  );
};

export default PageSpeedTabs;
