import * as React from 'react';

const ButtonSocialMedia = ({
  children,
  isLoading,
  className = '',
  icon,
  ...rest
}) => {
  return (
    <button className={`Button-Social-Media ${className}`} {...rest}>
      {isLoading ? (
        <>Loading...</>
      ) : (
        <>
          {icon && <>{icon}</>}
          {children}
        </>
      )}
    </button>
  );
};

export default ButtonSocialMedia;
