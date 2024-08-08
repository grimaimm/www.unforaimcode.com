import React from 'react';
import Card from '@/common/components/elements/Card';
import { HiOutlineComputerDesktop } from 'react-icons/hi2'
import { CgWebsite } from "react-icons/cg";

const ServiceCard = ({ tag, title, description, index }) => {
  return (
    <Card className="border border-zinc-200 bg-gradient-to-br from-white to-zinc-100 px-6 py-6 dark:border-zinc-700 dark:from-zinc-800 dark:to-zinc-900/50">
      <div className="flex items-center space-x-2 mb-1">
        {index === 0 ? <HiOutlineComputerDesktop size={20} /> : null}
        {index === 1 ? <CgWebsite size={20} /> : null}
        <h3>{title}</h3>
      </div>
      <span className="text-xs text-zinc-700 dark:text-indigo-400">#{tag}</span>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{description}</p>
    </Card>
  );
};

export default ServiceCard;
