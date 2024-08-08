import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Tooltip from "@/common/components/elements/Tooltip";
import { STACKS } from "@/common/components/partials/skills/components/Stack";
import { FiArrowUpCircle as ArrowUpIcon } from "react-icons/fi";
import LanguageToggleButton from "@/common/components/elements/LanguageToggleButton";

const titleVariants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
};

const transition = {
  duration: 0.3,
  ease: "easeInOut",
};

const LessonsHeader = ({ learn, contentItem, markdownContent, isEnglish, toggleLanguage, isLoading }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLgScreen, setIsLgScreen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsLgScreen(true);
      } else {
        setIsLgScreen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Check initial screen size
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Check if markdownContent is available before using it
  const difficultyLevel = markdownContent ? analyzeDifficulty(markdownContent) : "unknown";

  return (
    <>
      {!isScrolled ? (
        <motion.h1
          className="text-2xl font-semibold"
          initial="initial"
          animate="animate"
          variants={titleVariants}
          transition={transition}
        >
          {contentItem.title}
        </motion.h1>
      ) : (
        isLgScreen && (
          <motion.div
            className="fixed mx-auto top-0 left-0 right-0 z-10 shadow-bottom pt-6 bg-zinc-50 dark:bg-zinc-950 header-title-sticky"
            initial="initial"
            animate="animate"
            variants={titleVariants}
            transition={transition}
          >
            <div className="mx-auto flex justify-between items-center">
              <h1 className="text-lg font-semibold lg:text-xl">{contentItem.title}</h1>
              <button
                id='Scroll to Top'
                type="button"
                aria-label="Scroll to Top"
                data-umami-event="Scroll to Top"
                className="flex justify-centeritems-center text-sm font-medium text-zinc-600 dark:text-zinc-400 cursor-pointer rounded-full"
                onClick={scrollToTop}
              >
                <ArrowUpIcon size={24} />
                <span className="sr-only">Scroll to Top</span>
              </button>
            </div>
            <div
              className="border-b mt-6 border-zinc-300 dark:border-zinc-700 shadow-bottom"
              data-testid="breakline"
            />
          </motion.div>
        )
      )}
      <div className="mb-6 flex flex-col items-start w-full justify-between gap-2 border-b border-dashed border-zinc-600 pb-6 pt-3 text-[14px] text-zinc-600 dark:text-zinc-400 sm:flex-row lg:items-center">
        <div># {learn.category}</div>
        <div className="mt-1 flex gap-4 max-sm:w-full">
          <div className="flex items-center">
            <LanguageToggleButton isEnglish={isEnglish} toggleLanguage={toggleLanguage} isLoading={isLoading} />
          </div>
          <div className="flex items-center gap-4 ms-auto">
            <Tooltip title={`Difficulty: ${difficultyLevel}`}>
              <div
                className={`rounded-full px-2 py-1 text-xs font-medium ${difficultyLevel === "easy"
                  ? "bg-green-200 text-green-700 dark:bg-green-700 dark:text-green-200"
                  : difficultyLevel === "medium"
                    ? "bg-yellow-200 text-yellow-700 dark:bg-yellow-700 dark:text-yellow-200"
                    : difficultyLevel === "hard"
                      ? "bg-red-200 text-red-700 dark:bg-red-700 dark:text-red-200"
                      : "bg-zinc-200 text-zinc-500 dark:bg-zinc-700 dark:text-zinc-400"
                  }`}
              >
                {difficultyLevel.charAt(0).toUpperCase() + difficultyLevel.slice(1)}
              </div>
            </Tooltip>
            {learn.language && <Tooltip title={learn.language}>{STACKS[learn.language]}</Tooltip>}
          </div>
        </div>
      </div>
    </>
  );
};

// Simple content analysis function
// Simple content analysis function to detect code blocks// Simple content analysis function to detect code blocks in raw markdown content
function analyzeDifficulty(markdownContent) {
  // Use regex to count the number of code blocks
  const codeBlockCount = (markdownContent.match(/```[\s\S]*?```/g) || []).length;

  // Determine difficulty level based on code block count
  if (codeBlockCount === 0) {
    return "easy";
  } else if (codeBlockCount <= 2) {
    return "easy";
  } else if (codeBlockCount <= 5) {
    return "medium";
  } else {
    return "hard";
  }
}

export default LessonsHeader;
