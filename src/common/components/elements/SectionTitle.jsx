import * as React from 'react';

export function SectionHeading({ title, icon, className = '' }) {
  return (
    <div className={`flex items-center gap-1 text-xl font-medium text-zinc-800 dark:text-zinc-300 ${className}`}>
      {icon && <>{icon}</>}
      <h2 className="capitalize">{title}</h2>
    </div>
  );
}

export function SectionSubHeading({ children }) {
  return (
    <div className="flex flex-col justify-between gap-2 text-zinc-600 dark:text-zinc-400 md:flex-row lg:items-center">
      {children}
    </div>
  );
}