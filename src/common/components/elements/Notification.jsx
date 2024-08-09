import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useNotifStore } from '@/common/stores/useNotifStore';

export default function Notification() {
  const { isOpen, text, hideNotif } = useNotifStore();

  useEffect(() => {
    const timeout = setTimeout(() => {
      hideNotif();
    }, 3000);

    return () => clearTimeout(timeout);
  }, [hideNotif, isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className='fixed right-2 top-[90px] z-10 rounded-sm bg-zinc-800 bg-opacity-80 px-2 py-1 font-sans text-xs text-zinc-100 lg:right-6 lg:top-6'
        >
          {text}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
