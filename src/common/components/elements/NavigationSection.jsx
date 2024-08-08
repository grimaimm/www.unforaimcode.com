import * as React from "react";
import ButtonNavigation from "./ButtonNavigation";

const NavigationSection = React.memo(
  ({
    currentIndex,
    totalItems,
    handleNext,
    handlePrevious,
    previousTitle,
    nextTitle
  }) => {
    return (
      <div className="mt-8 flex justify-between border-t border-zinc-300 py-5 dark:border-zinc-700">
        {previousTitle && currentIndex !== 0 && (
          <ButtonNavigation
            onClick={handlePrevious}
            action="previous"
            title={previousTitle}
          />
        )}
        <div className="flex-grow"></div>
        {nextTitle && currentIndex !== totalItems - 1 && (
          <ButtonNavigation
            onClick={handleNext}
            action="next"
            title={nextTitle}
          />
        )}
      </div>
    );
  }
);

// Explicitly set the display name
NavigationSection.displayName = "NavigationSection";

export default NavigationSection;
