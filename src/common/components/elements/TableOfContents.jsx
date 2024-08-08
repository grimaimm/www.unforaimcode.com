import * as React from "react";
import clsx from "clsx";
import { useScroll, motion } from "framer-motion";

const TableOfContents = ({ headings = [] }) => {
  const [activeSection, setActiveSection] = React.useState("");
  const tocRef = React.useRef(null);
  const { scrollY } = useScroll();
  const [isFixed, setIsFixed] = React.useState(false);

  React.useEffect(() => {
    const sections = document.querySelectorAll("blockquote");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  React.useEffect(() => {
    const unsubscribe = scrollY.onChange((y) => {
      setIsFixed(y > 655);
    });

    return () => {
      unsubscribe();
    };
  }, [scrollY]);

  const handleScrollToId = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const tocOffset = tocRef.current?.offsetTop || 0;
      window.scrollTo({
        top: element.offsetTop - tocOffset - 4.5, // Adjust the offset here if needed
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.div
      id="toc-container"
      className={clsx(
        "toc-container hidden max-h-[calc(100vh-9rem-113px)] lg:block lg:w-full lg:max-w-xs lg:overflow-auto lg:pb-4 mt-0.5",
        { fixed: isFixed, relative: !isFixed }
      )}
      ref={tocRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        top: isFixed ? "6rem" : "initial",
        maxWidth: isFixed ? "250px" : "initial"
      }}
    >
      <h3 className="text-zinc-900 dark:text-zinc-100 md:text-xl font-semibold">
        Table of Contents
      </h3>
      <div className="flex justify-start flex-col items-start mt-4 space-y-2 text-sm">
        {headings.map((heading, index) => (
          <button
            key={index}
            id={heading.id}
            onClick={() => handleScrollToId(heading.id)}
            className={clsx(
              "font-medium tracking-[-0.005rem] text-left hover:text-zinc-700 focus:outline-none dark:hover:text-zinc-200",
              "focus-visible:text-zinc-700 dark:focus-visible:text-zinc-200",
              activeSection === heading.id
                ? "text-indigo-800 dark:text-indigo-400"
                : "text-zinc-400 dark:text-zinc-500"
            )}
          >
            {heading.text}
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default TableOfContents;
