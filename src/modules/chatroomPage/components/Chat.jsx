// src/modules/chatroomPage/components/Chat.jsx
/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import { getDatabase, onValue, ref, remove, set } from 'firebase/database';
import { useSession } from 'next-auth/react';
import { v4 as uuidv4 } from 'uuid';

import { firebaseApp } from '@/common/libs/realtime-firebase';
import ChatAuth from './ChatAuth';
import ChatInput from './ChatInput';
import ChatList from './ChatList';
import { useNotif } from '@/common/hooks/useNotif';

const Chat = () => {
  const { data: session, status } = useSession(); // Include session status
  const [messages, setMessages] = React.useState([]);
  const [replyToMessage, setReplyToMessage] = React.useState(null); // State to track the message being replied to
  const [loading, setLoading] = React.useState(true); // Add loading state

  const database = getDatabase(firebaseApp);
  const databaseChat = process.env.NEXT_PUBLIC_FIREBASE_DATABASE_CHAT;
  const notif = useNotif();

  const handleSendMessage = async (message) => {
    if (!session) {
      notif('Please sign in to reply'); // Show notification if user is not signed in
      return;
    }

    const messageId = uuidv4();
    const messageRef = ref(database, `${databaseChat}/${messageId}`);

    try {
      await set(messageRef, {
        id: messageId,
        name: session?.user?.name,
        email: session?.user?.email,
        image: session?.user?.image,
        message,
        created_at: new Date().toISOString(),
        is_show: true,
        is_reply: !!replyToMessage, // Add is_reply field
        reply_to: replyToMessage ? replyToMessage.name : null, // Add reply_to field
      });
    } catch (error) {
      // Handle any errors
      console.error('Error sending message:', error);
    } finally {
      setReplyToMessage(null); // Reset reply after sending
    }
  };

  const handleDeleteMessage = (id) => {
    const messageRef = ref(database, `${databaseChat}/${id}`);

    if (messageRef) {
      remove(messageRef);
    }
  };

  const handleReplyToMessage = (id) => {
    if (!session) {
      notif('Please sign in to reply'); // Show notification if user is not signed in
      return;
    }

    const message = messages.find((msg) => msg.id === id);
    setReplyToMessage(message);
  };

  const handleCancelReply = () => {
    setReplyToMessage(null); // Clear the reply state
  };

  React.useEffect(() => {
    const messagesRef = ref(database, databaseChat);
    const unsubscribe = onValue(messagesRef, (snapshot) => {
      const messagesData = snapshot.val();
      if (messagesData) {
        const messagesArray = Object.values(messagesData);
        const sortedMessages = messagesArray.sort((a, b) => {
          const dateA = new Date(a.created_at);
          const dateB = new Date(b.created_at);
          return dateA.getTime() - dateB.getTime();
        });
        setMessages(sortedMessages);
      } else {
        setMessages([]); // Handle the case where there are no messages
      }
      setLoading(false); // Ensure loading state is set to false after fetching data
    });

    return () => unsubscribe(); // Cleanup subscription on component unmount
  }, [databaseChat]); // Ensure useEffect re-runs if databaseChat changes

  return (
    <>
      <ChatList
        messages={messages}
        onDeleteMessage={handleDeleteMessage}
        onReplyToMessage={handleReplyToMessage}
        loading={loading} // Pass loading state
      />
      {session ? (
        <ChatInput
          onSendMessage={handleSendMessage}
          replyTo={replyToMessage ? replyToMessage.name : null} // Pass replyToMessage name
          onCancelReply={handleCancelReply} // Pass the cancel reply function
        />
      ) : (
        <ChatAuth />
      )}
    </>
  );
};

export default Chat;
