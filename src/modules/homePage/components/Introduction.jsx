import React from 'react'
import TypeAnimation from '@/common/components/elements/TypeAnimation';

const Introduction = () => {
  return (
    <section className="space-y-2 bg-cover bg-no-repeat">
      <div className="flex items-center justify-between">
        <div className="flex gap-2 text-2xl text-zinc-800 dark:text-zinc-300 font-medium lg:text-3xl" aria-live="polite">
          <TypeAnimation
            sequence={[
              "Hi, I'm Muhammad Rahim",
              1000,
              "Hi, I'm Web Developer",
              1000
            ]}
            speed={10}
            deletionSpeed={70}
            repeat={Infinity}
          />
        </div>
      </div>

      <div className="space-y-4">
        <ul className="ml-5 flex list-disc flex-col gap-1 text-zinc-600 dark:text-zinc-400 lg:flex-row lg:gap-8">
          <li>Remote worker</li>
          <li>
            Based in Yogyakarta <span className="ml-1">🇮🇩</span>
          </li>
        </ul>
        <p className="leading-[1.8] text-zinc-800 dark:text-zinc-300 md:leading-loose">
          Experienced Web Developer skilled in ReactJS,
          TailwindCSS, JavaScript, and proficient in
          Flask and Python. Collaborative team player
          dedicated to delivering efficient, scalable,
          and visually appealing web applications.
        </p>
      </div>
    </section>
  );
};

export default Introduction;