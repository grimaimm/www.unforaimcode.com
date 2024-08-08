import * as React from 'react';

function Card({ children, className = '', ...others }) {
  return (
    <div
      data-testid="card"
      className={`rounded-xl shadow-sm transition-all duration-300 lg:hover:shadow-md ${className}`}
      {...others}
    >
      {children}
    </div>
  );
}

export default Card;
