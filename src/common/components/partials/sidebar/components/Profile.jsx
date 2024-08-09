import * as React from 'react';
import { AnimatePresence } from 'framer-motion';
import ProfileHeader from './ProfileHeader';

const Profile = () => {
  return (
    <AnimatePresence>
      <ProfileHeader />
    </AnimatePresence>
  );
};

export default Profile;
