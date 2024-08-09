import { DriveStep } from 'driver.js';

export const tourChatRoom = [
  {
    element: '#chat-card',
    popover: {
      title: 'Message',
      description:
        'The message will be shown here. Hover and click reply icon to reply the message.',
      side: 'bottom',
      align: 'center',
    },
  },
  {
    element: '#google-sign-in',
    popover: {
      title: 'Sign In with Google',
      description:
        'You can sign in with your Google account to start sending messages.',
      side: 'top',
      align: 'center',
    },
  },
  {
    popover: {
      title: "You're Ready to Get Started!",
      description:
        "Congratulations! You've now been introduced to all the awesome features of chat room. Happy Talking!",
      side: 'top',
      align: 'center',
    },
  },
];
