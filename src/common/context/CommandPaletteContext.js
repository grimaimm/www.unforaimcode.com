// common/context/CommandPaletteContext.jsx
import * as React from 'react';

export const CommandPaletteContext = React.createContext({
  isOpen: false,
  setIsOpen: () => {},
});

export const CommandPaletteProvider = ({ children }) => {
  const [isOpen, setOpen] = React.useState(false);

  const setIsOpen = (open) => {
    setOpen(open);
  };

  return (
    <CommandPaletteContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </CommandPaletteContext.Provider>
  );
};
