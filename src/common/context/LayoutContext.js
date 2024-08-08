import * as React from 'react';

const LayoutContext = React.createContext();

export const LayoutProvider = ({ children }) => {
  const [layout, setLayout] = React.useState('loading'); // Default is loading
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Set layout based on initial conditions
    // This can be enhanced based on your application logic
    setLoading(false);
  }, []);

  return (
    <LayoutContext.Provider value={{ layout, setLayout, loading }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = () => React.useContext(LayoutContext);
