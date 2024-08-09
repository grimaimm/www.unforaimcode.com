import * as React from 'react';
import styled from '@emotion/styled';
import clsx from 'clsx';

export const ButtonCollapse = ({ toggleOpen, className }) => {
  const [isClosed, setIsClosed] = React.useState(false);

  const handleClick = () => {
    setIsClosed(!isClosed);
    toggleOpen();
  };

  return (
    <div>
      <button
        id='buttonToggleCollapse'
        aria-label='buttonToggleCollapse'
        onClick={handleClick}
        className={`buttonToggleCollapse h-[2.07rem] ${className}`}
      >
        <span className={`burger-5 ${isClosed ? 'is-closed' : ''}`}>
          <svg className='text-[#0f0f0f] dark:text-zinc-50' viewBox='0 0 32 32'>
            <path
              className='line line-top-bottom'
              d='M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22'
            ></path>
            <path className='line' d='M7 16 27 16'></path>
          </svg>
        </span>
      </button>
    </div>
  );
};

export const MobileMenuButton = ({ toggleOpen }) => {
  const [isClosed, setIsClosed] = React.useState(false);

  const handleClick = () => {
    setIsClosed(!isClosed);
    toggleOpen();
  };

  const menuSpanData = [{ index: 1 }, { index: 2 }, { index: 3 }];

  return (
    <StyledMenu className='flex lg:hidden' onClick={handleClick}>
      {menuSpanData.map((item) => (
        <StyledMenuSpan
          key={item.index}
          className={clsx('bg-zinc-950 dark:bg-zinc-100', isClosed && 'active')}
        />
      ))}
    </StyledMenu>
  );
};

const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 21px;
  width: 26px;
  cursor: pointer;
`;

const StyledMenuSpan = styled.span`
  width: 100%;
  height: 3px;
  transition: all 0.5s ease;
  border-radius: 10px;

  &.active:nth-of-type(1),
  &.active:nth-of-type(3) {
    transform-origin: left;
  }
  &.active:nth-of-type(1) {
    transform: rotate(45deg);
  }
  &.active:nth-of-type(2) {
    width: 0;
  }
  &.active:nth-of-type(3) {
    transform: rotate(-45deg);
  }
`;
