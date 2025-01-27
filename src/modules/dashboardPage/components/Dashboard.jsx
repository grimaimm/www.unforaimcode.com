import { PageBreakline } from '@/common/components/elements/Breakline';
import { GITHUB_ACCOUNTS } from '@/common/constant/Github';

import Contributions from './Contributions';
import CodingActive from './CodingActive';

const Dashboard = () => {
  return (
    <>
      {/* <PageBreakline className='mb-8 mt-10' /> */}
      <CodingActive />
      <PageBreakline className='mb-8 mt-10' />
      {/* <div className='space-y-10'> */}
      {GITHUB_ACCOUNTS?.filter((account) => account?.is_active).map(
        (account, index) => (
          <Contributions
            key={index}
            username={account?.username}
            type={account?.type}
            endpoint={account?.endpoint}
          />
        ),
      )}
    </>
  );
};

export default Dashboard;
