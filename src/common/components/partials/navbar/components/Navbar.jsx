// Navbar.jsx
import * as React from 'react';
import NavbarLayout from './NavbarLayout';
import Profile from './Profile';
import Navigation from './Navigation';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const router = useRouter();

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  React.useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false);
    };

    router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router]);

  return (
    <NavbarLayout isOpen={isOpen}>
      <Profile isOpen={isOpen} toggleOpen={toggleOpen} />
      <Navigation isOpen={isOpen} />
    </NavbarLayout>
  );
};

export default Navbar;
