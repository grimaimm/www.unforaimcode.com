import React from 'react';
import { motion } from 'framer-motion';
import LearnCard from './LearnCard';
import { FetchLearns } from '@/pages/api/learn';

export async function getServerSideProps() {
  const learns = await FetchLearns();
  return { props: { learns } };
}

const Learn = ({ learns }) => {
  if (!Array.isArray(learns)) {
    return <div>No learns available.</div>;
  }

  return (
    <div className='grid gap-5 lg:px-2 pt-2 pb-5 sm:grid-cols-2'>
      {learns.map((learn, index) => (
        <motion.div key={index}>
          <LearnCard learn={learn} />
        </motion.div>
      ))}
    </div>
  );
}

export default Learn;
