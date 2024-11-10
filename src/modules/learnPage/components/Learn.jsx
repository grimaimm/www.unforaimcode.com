import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import LearnCard from './LearnCard';
import { FetchLearns } from '@/pages/api/learn';

export async function getServerSideProps() {
  const learns = await FetchLearns();
  return { props: { learns } };
}

const Learn = ({ learns }) => {
  const [filteredLearns, setFilteredLearns] = useState([]);

  useEffect(() => {
    setFilteredLearns(learns.filter((learn) => learn.is_show));
  }, [learns]);

  if (filteredLearns.length === 0) {
    return <div>No learns available.</div>;
  }

  return (
    <div className='grid gap-5 pb-5 pt-2 sm:grid-cols-2 lg:px-2'>
      {filteredLearns.map((learn, index) => (
        <motion.div key={index}>
          <LearnCard learn={learn} />
        </motion.div>
      ))}
    </div>
  );
};

export default Learn;
