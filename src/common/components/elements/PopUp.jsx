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
    <div className="fixed top-4 right-4 bg-white p-4 rounded shadow-md text-center z-50">
      <p>{message}</p>
    </div>
  );
};

export default PopUp;
