import * as React from 'react';

const TimedAlert = ({ message, duration, onClose }) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='rounded bg-white p-6 shadow-md'>
        <h2 className='mb-4 text-lg font-semibold'>Notice</h2>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default TimedAlert;
