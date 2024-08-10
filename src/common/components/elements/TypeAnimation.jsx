import * as React from 'react';
import { TypeAnimation as TypeAnimationComponent } from 'react-type-animation';

export default function TypeAnimation({ sequence, delay = 1000 }) {
  const modifiedSequence = [];

  sequence.forEach((item, index) => {
    modifiedSequence.push(item);

    // Hanya tambahkan delay jika bukan item terakhir
    if (index < sequence.length - 1) {
      modifiedSequence.push(delay);
    }
  });

  return (
    <TypeAnimationComponent
      sequence={modifiedSequence}
      speed={10}
      deletionSpeed={70}
      repeat={Infinity}
      // aria-label={sequence[0]}
    />
  );
}
