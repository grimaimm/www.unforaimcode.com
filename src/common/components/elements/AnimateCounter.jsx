import { animate } from 'framer-motion';
import * as React from 'react';

const AnimateCounter = ({ total, ...rest }) => {
  const countRef = React.useRef(null);
  const initialCount = 0;

  React.useEffect(() => {
    const count = countRef.current;

    const controls = animate(initialCount, total, {
      duration: 1,
      onUpdate: (value) => {
        if (count) {
          count.textContent = Math.floor(value).toString();
        }
      },
    });

    return () => controls.stop();
  }, [total]);

  return <span {...rest} ref={countRef} />;
};

export default AnimateCounter;
