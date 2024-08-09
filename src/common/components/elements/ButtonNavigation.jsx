import {
  FaArrowLeft as PreviousButtonIcon,
  FaArrowRight as NextButtonIcon,
} from 'react-icons/fa6';

import CustomButton from './CustomButton';

const ButtonNavigation = ({ onClick, action, title }) => {
  const buttonText = action === 'next' ? 'Next' : 'Previous';
  const buttonIcon =
    action === 'next' ? (
      <NextButtonIcon data-testid='next-icon' />
    ) : (
      <PreviousButtonIcon data-testid='previous-icon' />
    );

  return (
    <CustomButton className='rounded-xl' onClick={onClick}>
      {action === 'previous' && buttonIcon}
      <div className='flex items-center gap-1'>
        {buttonText}
        <span className='hidden lg:flex'> : {title}</span>
      </div>
      {action === 'next' && buttonIcon}
    </CustomButton>
  );
};

export default ButtonNavigation;
