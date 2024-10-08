import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Calendar = ({ data }) => {
  const [selectContribution, setSelectContribution] = useState({
    count: null,
    date: null,
  });

  const weeks = data?.weeks ?? [];
  const months =
    data?.months?.map((month) => {
      const filterContributionDay = weeks
        .filter(
          (week) => week.firstDay.slice(0, 7) === month.firstDay.slice(0, 7),
        )
        .map((item) => item.contributionDays)
        .flat(1);
      const getContributionsByMonth = filterContributionDay.reduce(
        (previousValue, currentValue) =>
          previousValue + currentValue.contributionCount,
        0,
      );

      return {
        ...month,
        contributionsCount: getContributionsByMonth,
      };
    }) ?? [];

  // Define custom colors
  const CUSTOM_CONTRIBUTION_COLORS = [
    // '#eef2ff', // 50
    // '#e0e7ff', // 100
    '#c7d2fe', // 200
    // '#a5b4fc', // 300
    '#818cf8', // 400
    '#6366f1', // 500
    // '#4f46e5', // 600
    '#4338ca', // 700
    '#3730a3', // 800
    // '#312e81', // 900
  ];

  // Use custom colors instead of data colors
  const contributionColors = CUSTOM_CONTRIBUTION_COLORS;

  return (
    <>
      {/* <div className="overflow-x-auto w-full bg-red-400"> */}
      <div className='no-scrollbar relative flex max-w-full flex-col overflow-x-auto'>
        <ul className='flex gap-[3px] text-xs dark:text-zinc-400'>
          {months.map((month) => (
            <li
              key={month.firstDay}
              className={clsx(`${month.totalWeeks < 2 ? 'invisible' : ''}`)}
              style={{ minWidth: 15 * month.totalWeeks }}
            >
              {month.name}
            </li>
          ))}
        </ul>

        <div className='flex justify-start gap-[3px]'>
          {weeks?.map((week) => (
            <div key={week.firstDay}>
              {week.contributionDays.map((contribution) => {
                const backgroundColor =
                  contribution.contributionCount > 0 &&
                  CUSTOM_CONTRIBUTION_COLORS[
                    Math.min(
                      contribution.contributionCount,
                      CUSTOM_CONTRIBUTION_COLORS.length - 1,
                    )
                  ];

                const getRandomDelayAnimate =
                  Math.random() * week.contributionDays.length * 0.15;

                return (
                  <motion.span
                    key={contribution.date}
                    initial='initial'
                    animate='animate'
                    variants={{
                      initial: { opacity: 0, translateY: -20 },
                      animate: {
                        opacity: 1,
                        translateY: 0,
                        transition: { delay: getRandomDelayAnimate },
                      },
                    }}
                    className='my-[2px] block h-[13px] w-[13px] rounded-[3px] bg-zinc-300 dark:bg-zinc-800'
                    style={backgroundColor ? { backgroundColor } : undefined}
                    onMouseEnter={() =>
                      setSelectContribution({
                        count: contribution.contributionCount,
                        date: contribution.date,
                      })
                    }
                    onMouseLeave={() =>
                      setSelectContribution({ count: null, date: null })
                    }
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className='flex flex-wrap items-center justify-between gap-2'>
        <div className='flex items-center gap-2 text-sm'>
          <span className='dark:text-zinc-400'>Less</span>
          <ul className='flex gap-1'>
            <motion.li className='h-[10px] w-[10px] rounded-sm bg-zinc-300 dark:bg-zinc-800' />
            {contributionColors.map((item, index) => (
              <motion.li
                key={item}
                initial='initial'
                animate='animate'
                variants={{
                  initial: { opacity: 0 },
                  animate: {
                    opacity: 1,
                    transition: { delay: index * 0.3 },
                  },
                }}
                className='h-[10px] w-[10px] rounded-sm'
                style={{ backgroundColor: item }}
              />
            ))}
          </ul>
          <span>More</span>
        </div>

        <div
          className={clsx(
            `${selectContribution?.date ? 'opacity-100' : 'opacity-0'}`,
            'rounded bg-zinc-200 px-2 text-sm dark:bg-zinc-800',
          )}
        >
          {selectContribution?.count} contributions on{' '}
          {selectContribution?.date}
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Calendar;
