import Card from '@/common/components/elements/Card';
import React from 'react';
import Marquee from 'react-fast-marquee';

const Iklan = () => {
  return (
    <Card className='my-6 border border-zinc-200 bg-gradient-to-br from-white to-zinc-100 px-6 py-6 dark:border-zinc-700 dark:from-zinc-800 dark:to-zinc-900/50'>
      <Marquee speed={70} gradient={false} pauseOnHover autoFill>
        📢 Open Jasa Joki Skripsi "Hanya Pembuatan Sistem / Aplikasi Berbasis
        Website Aja" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </Marquee>
    </Card>
  );
};

export default Iklan;
