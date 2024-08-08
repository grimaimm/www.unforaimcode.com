// useAnimationStatus.js
import * as React from 'react';

const useAnimationStatus = () => {
  const [hasAnimated, setHasAnimated] = React.useState(false);

  React.useEffect(() => {
    const animated = localStorage.getItem('hasAnimated');
    if (animated) {
      setHasAnimated(true);
    }
  }, []);

  const updateStatus = () => {
    if (!hasAnimated) {
      localStorage.setItem('hasAnimated', 'true');
      setHasAnimated(true);
    }
  };

  return { hasAnimated, updateStatus };
};

export default useAnimationStatus;
