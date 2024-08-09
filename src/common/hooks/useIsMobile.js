import * as React from 'react';
import { useWindowSize } from 'usehooks-ts';

const useIsMobile = () => {
  const { width } = useWindowSize();
  const [isMobile, setIsMobile] = React.useState(width < 769);

  React.useEffect(() => {
    setIsMobile(width < 821);
  }, [width]);

  return isMobile;
};

export default useIsMobile;
