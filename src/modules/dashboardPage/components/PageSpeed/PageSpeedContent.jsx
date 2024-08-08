import React from 'react';
import {
  CircularProgressbarWithChildren,
  buildStyles
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import AnimatedProgressProvider from '@/common/components/elements/AnimatedProgressProvider';
import { easeQuadInOut } from 'd3-ease';
import { getPathColor, getBackgroundColor } from '@/common/utils/colorUtils';

const PageSpeedContent = ({ activePage, showActualValues }) => {
  return (
    <div className={`relative flex flex-wrap justify-center items-center gap-6 md:gap-20 ${!showActualValues ? 'animate-pulse' : ''}`}>
      {Object.entries(activePage.contents).map(([key, content]) => (
        <div key={key}>
          <AnimatedProgressProvider
            valueStart={0}
            valueEnd={showActualValues ? Number(content.score) : 0}
            duration={showActualValues ? 0.6 : 0}
            easingFunction={easeQuadInOut}
          >
            {value => {
              const roundedValue = Math.round(value);
              const textColor = showActualValues ? getPathColor(Number(content.score)) : 'grey';
              return (
                <div className='relative w-[60px] h-auto md:w-[70px] flex flex-col gap-2 items-center'>
                  <CircularProgressbarWithChildren
                    value={value}
                    background
                    styles={buildStyles({
                      pathColor: showActualValues ? getPathColor(Number(content.score)) : 'rgb(117, 117, 117, 1)',
                      pathTransition: showActualValues ? 'stroke-dashoffset 0.6s ease' : 'none',
                      strokeWidth: '8px',
                      trailColor: showActualValues ? 'transparent' : 'rgb(117, 117, 117, 0.3)',
                      backgroundColor: showActualValues ? getBackgroundColor(Number(content.score)) : 'rgb(117, 117, 117, 0.1)',
                    })}
                    className='p-0.5 fill-none'
                  >
                    <div>
                      <strong className='fraction__label md:text-[26px] text-[20px] font-medium' style={{ color: textColor }}>{`${roundedValue}`}</strong>
                    </div>
                  </CircularProgressbarWithChildren>
                  <h3 className='md:text-[14px] text-[10px] leading-5 font-medium break-keep text-center text-nowrap'>{content.label}</h3>
                </div>
              );
            }}
          </AnimatedProgressProvider>
        </div>
      ))}
    </div>
  );
};

export default PageSpeedContent;
