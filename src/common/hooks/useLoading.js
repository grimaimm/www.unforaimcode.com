import * as React from 'react';
import { useRouter } from 'next/router';

const useLoading = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const router = useRouter();

  React.useEffect(() => {
    if (router.isReady) {
      setIsLoading(false);
    }
  }, [router.isReady]);

  return isLoading;
};

export default useLoading;
