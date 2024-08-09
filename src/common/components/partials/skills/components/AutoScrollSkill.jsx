import * as React from 'react';
import Marquee from 'react-fast-marquee';

const AutoScrollSkill = ({
  children,
  direction = 'left',
  withPadding = true,
}) => {
  return (
    <Marquee
      direction={direction}
      speed={50}
      className={withPadding ? 'py-3.5' : ''}
    >
      {children}
    </Marquee>
  );
};

export default AutoScrollSkill;
