import * as React from 'react';
import { motion } from 'framer-motion';

const Tooltip = ({ title, children }) => {
  const [isTooltipVisible, setTooltipVisible] = React.useState(false);

  const handleMouseEnter = () => {
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  const tooltipVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className='relative inline-block'>
      <div
        className='relative'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
      {isTooltipVisible && (
        <motion.div
          className='absolute bottom-full mb-2 w-max max-w-xs rounded bg-zinc-500 px-2 py-1 text-xs font-medium text-zinc-100 dark:bg-zinc-100 dark:text-zinc-700'
          variants={tooltipVariants}
          initial='hidden'
          animate='visible'
          transition={{ duration: 0.2 }} // Optional: adds transition duration
        >
          {title}
        </motion.div>
      )}
    </div>
  );
};

export default Tooltip;
