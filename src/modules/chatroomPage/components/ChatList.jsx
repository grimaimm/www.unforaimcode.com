// src/modules/chatroomPage/components/ChatList.jsx
import * as React from 'react';
import ChatItem from './ChatItem';

const ChatList = ({
  messages,
  isWidget = false,
  onDeleteMessage,
  onReplyToMessage,
}) => {
  const chatListRef = React.useRef(null);
  const [hasScrolledUp, setHasScrolledUp] = React.useState(false);
  const [chatListHeight, setChatListHeight] = React.useState('500px');

  React.useEffect(() => {
    const handleScroll = () => {
      if (chatListRef.current) {
        const isScrolledToBottom =
          chatListRef.current.scrollHeight - chatListRef.current.clientHeight <=
          chatListRef.current.scrollTop + 5;

        if (isScrolledToBottom) {
          setHasScrolledUp(false);
        } else {
          setHasScrolledUp(true);
        }
      }
    };

    chatListRef.current?.addEventListener('scroll', handleScroll);

    const currentChatListRef = chatListRef.current;

    return () => {
      currentChatListRef?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  React.useEffect(() => {
    if (chatListRef.current && !hasScrolledUp) {
      chatListRef.current.scrollTop = chatListRef.current.scrollHeight;
    }
  }, [messages, hasScrolledUp]);

  React.useEffect(() => {
    const handleScroll = () => {
      if (chatListRef.current) {
        const isScrolledToBottom =
          chatListRef.current.scrollHeight - chatListRef.current.clientHeight <=
          chatListRef.current.scrollTop + 5;

        if (isScrolledToBottom) {
          setHasScrolledUp(false);
        } else {
          setHasScrolledUp(true);
        }
      }
    };

    chatListRef.current?.addEventListener('scroll', handleScroll);

    const currentChatListRef = chatListRef.current;

    return () => {
      currentChatListRef?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  React.useEffect(() => {
    const handleResize = () => {
      const newHeight = isWidget ? '500px' : `${window.innerHeight - 360}px`;
      setChatListHeight(newHeight);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isWidget]);

  const handleReplyClick = (id) => {
    if (onReplyToMessage) {
      onReplyToMessage(id);
    }
  };

  return (
    <div className='rounded-lg'>
      <div
        ref={chatListRef}
        className='no-scrollbar space-y-5 overflow-y-auto scroll-smooth pb-4'
        style={{ height: chatListHeight }}
      >
        {messages?.map((chat, index) => (
          <ChatItem
            key={index}
            onDelete={onDeleteMessage}
            clickReply={handleReplyClick} // Pass handleReplyClick
            {...chat}
          />
        ))}
      </div>
    </div>
  );
};

export default ChatList;
