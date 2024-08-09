import { format, formatDistanceToNow, isToday } from 'date-fns';
import * as React from 'react';

const ChatTime = ({ datetime }) => {
  const [formattedTime, setFormattedTime] = React.useState(
    formatDistanceToNow(new Date(datetime), { addSuffix: true }),
  );

  React.useEffect(() => {
    const interval = setInterval(() => {
      setFormattedTime(
        formatDistanceToNow(new Date(datetime), { addSuffix: true }),
      );
    }, 60000);

    return () => clearInterval(interval);
  }, [datetime]);

  return (
    <div className='text-xs text-neutral-500'>
      {isToday(new Date(datetime))
        ? formattedTime
        : format(new Date(datetime), 'dd/MM/yyyy, HH:mm')}
    </div>
  );
};

export default ChatTime;
