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
    <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-lg font-semibold mb-4">Notice</h2>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default TimedAlert;
