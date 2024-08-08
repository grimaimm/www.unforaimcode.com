import React from 'react';
import MDLessonsContent from './MDLessonsContent';
import NavigationSection from '@/common/components/elements/NavigationSection';

const LessonsDetail = ({ markdownContent, currentIndex, totalItems, handleNext, handlePrevious, previousTitle, nextTitle }) => {
  return (
    <div className='space-y-6 leading-[1.8] dark:text-zinc-300'>
      {/* Render the markdown content */}
      <MDLessonsContent markdownContent={markdownContent} />
      
      {/* Navigation section for previous and next lessons */}
      <NavigationSection
        currentIndex={currentIndex}
        totalItems={totalItems}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        previousTitle={previousTitle}
        nextTitle={nextTitle}
      />
    </div>
  );
};

export default LessonsDetail;
