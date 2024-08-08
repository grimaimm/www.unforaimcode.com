import React from 'react';
import Link from 'next/link';
import Card from '@/common/components/elements/Card';
import { BiFile as SubContentIcon } from "react-icons/bi";
import { STACKS } from '@/common/components/partials/skills/components/Stack';
import Tooltip from '@/common/components/elements/Tooltip';
import clsx from 'clsx';
import CommingSoonState from '@/common/components/elements/State';

// Function to determine the background color based on difficulty
const getDifficultyColor = (difficulty) => {
  switch (difficulty) {
    case 'easy':
      return 'bg-green-200 text-green-800 dark:bg-green-700 dark:text-green-200';
    case 'medium':
      return 'bg-yellow-200 text-yellow-800 dark:bg-yellow-700 dark:text-yellow-200';
    case 'hard':
      return 'bg-red-200 text-red-800 dark:bg-red-700 dark:text-red-200';
    default:
      return 'bg-zinc-200 text-zinc-800 dark:bg-zinc-700 dark:text-zinc-300';
  }
};

const LessonList = ({ learn }) => {
  if (!learn || !learn.content || learn.content.length === 0) {
    return <CommingSoonState message='We’re preparing new lessons. Check back soon!' />;
  }

  return (
    <>
      <div className="flex flex-col gap-3">
        {learn.content.map((contentItem, index) => (
          <Link key={contentItem.slug} href={`/learn/${learn.slug}/${contentItem.slug}`} aria-label={`View Lessons: ${contentItem.title}`}>
            <Card
              className={clsx(
                "flex w-full cursor-pointer flex-row transition-all duration-300 items-center justify-between px-5 py-4 bg-gradient-to-bl dark:from-zinc-900 dark:to-zinc-950 border border-zinc-300 dark:border-zinc-800 lg:hover:scale-[101%]"
              )}
            >
              <div className="flex items-center gap-3">
                <SubContentIcon size={18} className="hidden md:flex" />
                <h5 className="font-[15px]">Lessons {index + 0} : {contentItem.title}</h5>
              </div>
              <div className="hidden items-center gap-2 md:flex">
                <Tooltip title="Language: Indonesian and English">
                  <div className={clsx("rounded-full px-2 py-1 text-xs font-medium bg-indigo-200 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-200")}>
                    ID - EN
                  </div>
                </Tooltip>
                {contentItem.difficulty && (
                  <Tooltip title={`Difficulty: ${contentItem.difficulty}`}>
                    <div className={clsx(
                      "rounded-full px-2 py-1 text-xs font-medium",
                      getDifficultyColor(contentItem.difficulty)
                    )}>
                      {contentItem.difficulty}
                    </div>
                  </Tooltip>
                )}
                {learn.language && <Tooltip title={learn.language}>{STACKS[learn.language]}</Tooltip>}
              </div>
            </Card>
          </Link>
        ))}
      </div>

    </>
  );
};

export default LessonList;
