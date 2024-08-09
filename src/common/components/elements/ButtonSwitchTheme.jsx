import * as React from 'react';
import { motion } from 'framer-motion';
import ThemeContext from '@/common/context/ThemeContext';
import { PiSunDuotone } from 'react-icons/pi';
import { PiMoonStarsDuotone } from 'react-icons/pi';
import useHasMounted from '@/common/hooks/useHasMounted';

export const ButtonSwitchTheme = () => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  const hasMounted = useHasMounted();

  if (!hasMounted) {
    return (
      <motion.button
        id='dark-mode-switcher'
        aria-label='Toggle Theme'
        className='rounded-xl bg-zinc-50 p-2 dark:bg-zinc-950'
      >
        <PiSunDuotone size={18} />
      </motion.button>
    );
  }

  return (
    <motion.button
      id='dark-mode-switcher'
      aria-label='Toggle Theme'
      onClick={toggleTheme}
      className='rounded-xl bg-zinc-50 p-1.5 dark:bg-zinc-950'
    >
      {theme === 'dark' ? (
        <PiMoonStarsDuotone size={18} />
      ) : (
        <PiSunDuotone size={18} />
      )}
    </motion.button>
  );
};

export const ButtonSwitchThemeNavbar = ({ className }) => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  const hasMounted = useHasMounted();

  if (!hasMounted) {
    return (
      <motion.button
        id='dark-mode-switcher'
        aria-label='Toggle Theme'
        className={`rounded-xl bg-zinc-50 p-2 dark:bg-zinc-950 ${className}`}
      >
        <PiSunDuotone />
      </motion.button>
    );
  }

  return (
    <motion.button
      id='dark-mode-switcher'
      aria-label='Toggle Theme'
      onClick={toggleTheme}
      className={`rounded-xl bg-zinc-50 p-2 dark:bg-zinc-950 ${className}`}
    >
      {theme === 'dark' ? <PiMoonStarsDuotone /> : <PiSunDuotone />}
    </motion.button>
  );
};
