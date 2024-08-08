import * as React from 'react';
import { SectionHeading, SectionSubHeading } from '@/common/components/elements/SectionTitle';
import { HiCode } from 'react-icons/hi';
import { STACKS } from './Stack';
import AutoScrollSkill from './AutoScrollSkill';
import SkillCard from './SkillCard';

const SkillSection = () => {
  const stackInArray = Object.entries(STACKS).sort(() => Math.random() - 0.5);
  return (
    <section className='space-y-2'>
      <div className='space-y-2'>
        <SectionHeading title="Skills" icon={<HiCode className='mr-1' />} />
        <SectionSubHeading>
          <p className='dark:text-zinc-400'>My coding and the tools I have used.</p>
        </SectionSubHeading>
      </div>
      <div className='flex flex-col overflow-x-hidden scroller'>
        {Array.from({ length: 2 }, (_, index) => {
          const slider = [...stackInArray].sort(() => Math.random() - 0.5);
          return (
            <AutoScrollSkill key={index} direction={index % 2 === 0 ? 'left' : 'right'}>
              {slider.map(([name, icon], index) => (
                <SkillCard key={index} name={name} icon={icon} />
              ))}
            </AutoScrollSkill>
          )
        })}
      </div>

    </section>
  );
}

export default SkillSection;
