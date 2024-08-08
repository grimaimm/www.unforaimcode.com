import { DateTime } from 'luxon';

export const formatDateV1 = (date, type = 'MMMM dd, yyyy') => {
  if (!date) {
    return '';
  }

  const formattedDate = DateTime.fromISO(date)
    .setZone('Asia/Jakarta')
    .toFormat(type);
  return formattedDate;
};
