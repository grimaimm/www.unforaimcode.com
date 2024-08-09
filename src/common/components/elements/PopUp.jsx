// PopUp.jsx
import * as React from 'react';

const PopUp = ({ message, duration, onClose }) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className='fixed right-4 top-4 z-50 rounded bg-white p-4 text-center shadow-md'>
      <p>{message}</p>
    </div>
  );
};

export default PopUp;
