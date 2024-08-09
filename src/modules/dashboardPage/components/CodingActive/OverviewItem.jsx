import Card from '@/common/components/elements/Card';

const OverviewItem = ({ label, value }) => (
  <Card className='flex flex-col space-y-1 rounded-xl border border-zinc-200 bg-gradient-to-br from-white to-zinc-100 px-4 py-3 dark:border-zinc-700 dark:from-zinc-800 dark:to-zinc-900/50 sm:col-span-1'>
    <span className='text-sm dark:text-zinc-400'>{label}</span>
    <span className='font-medium text-indigo-400'>{value || '-'}</span>
  </Card>
);

export default OverviewItem;
