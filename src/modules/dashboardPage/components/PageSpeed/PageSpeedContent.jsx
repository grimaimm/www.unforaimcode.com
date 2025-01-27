// import React from 'react';
// import {
//   CircularProgressbarWithChildren,
//   buildStyles,
// } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
// import AnimatedProgressProvider from '@/common/components/elements/AnimatedProgressProvider';
// import { easeQuadInOut } from 'd3-ease';
// import { getPathColor, getBackgroundColor } from '@/common/utils/colorUtils';

// const PageSpeedContent = ({ activePage, showActualValues }) => {
//   return (
//     <div
//       className={`relative flex flex-wrap items-center justify-center gap-6 md:gap-20 ${!showActualValues ? 'animate-pulse' : ''}`}
//     >
//       {Object.entries(activePage.contents).map(([key, content]) => (
//         <div key={key}>
//           <AnimatedProgressProvider
//             valueStart={0}
//             valueEnd={showActualValues ? Number(content.score) : 0}
//             duration={showActualValues ? 0.6 : 0}
//             easingFunction={easeQuadInOut}
//           >
//             {(value) => {
//               const roundedValue = Math.round(value);
//               const textColor = showActualValues
//                 ? getPathColor(Number(content.score))
//                 : 'grey';
//               return (
//                 <div className='relative flex h-auto w-[60px] flex-col items-center gap-2 md:w-[70px]'>
//                   <CircularProgressbarWithChildren
//                     value={value}
//                     background
//                     styles={buildStyles({
//                       pathColor: showActualValues
//                         ? getPathColor(Number(content.score))
//                         : 'rgb(117, 117, 117, 1)',
//                       pathTransition: showActualValues
//                         ? 'stroke-dashoffset 0.6s ease'
//                         : 'none',
//                       strokeWidth: '8px',
//                       trailColor: showActualValues
//                         ? 'transparent'
//                         : 'rgb(117, 117, 117, 0.3)',
//                       backgroundColor: showActualValues
//                         ? getBackgroundColor(Number(content.score))
//                         : 'rgb(117, 117, 117, 0.1)',
//                     })}
//                     className='fill-none p-0.5'
//                   >
//                     <div>
//                       <strong
//                         className='fraction__label text-[20px] font-medium md:text-[26px]'
//                         style={{ color: textColor }}
//                       >{`${roundedValue}`}</strong>
//                     </div>
//                   </CircularProgressbarWithChildren>
//                   <h3 className='text-nowrap break-keep text-center text-[10px] font-medium leading-5 md:text-[14px]'>
//                     {content.label}
//                   </h3>
//                 </div>
//               );
//             }}
//           </AnimatedProgressProvider>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PageSpeedContent;
