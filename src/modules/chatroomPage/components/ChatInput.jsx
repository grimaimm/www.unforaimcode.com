import clsx from "clsx";
import * as React from "react";
import { motion } from "framer-motion"
import { FiSend as SendIcon, FiX as CloseIcon } from "react-icons/fi"; // Import CloseIcon

import ChatUserInfo from "./ChatUserInfo";

const ChatInput = ({ onSendMessage, isWidget, replyTo, onCancelReply }) => {
  const [message, setMessage] = React.useState("");
  const [isSending, setIsSending] = React.useState(false);
  const inputRef = React.useRef(null);

  const handleSendMessage = async e => {
    e.preventDefault();

    if (isSending) return;

    setIsSending(true);

    try {
      await onSendMessage(message);
      setMessage("");
    } catch (error) {
      // console.error('Error sending message:', error);
    } finally {
      setIsSending(false);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 0);
    }
  };

  const handleChange = e => {
    setMessage(e.target.value);
  };

  const handleCancelReply = () => {
    setMessage(""); // Clear the message input
    if (onCancelReply) onCancelReply(); // Trigger the cancel reply function
  };

  return (
    <>
      <form className="flex items-end gap-x-1 border-t border-zinc-300 py-4 pb-3 dark:border-zinc-800">
        <div className="flex w-full flex-col space-y-2">
          {replyTo && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex w-max items-center justify-center space-x-2 rounded-lg bg-zinc-200 px-2 py-1 text-xs text-zinc-500 dark:bg-zinc-800 dark:text-zinc-200"
            >
              <p>Replying to <span className="font-medium">{replyTo}</span></p>
              <button
                onClick={handleCancelReply}
                aria-label="Close Reply"
                className="rounded-full bg-zinc-50 dark:bg-zinc-600"
              >
                <CloseIcon size={14} />
              </button>
            </motion.div>
          )}
          <input
            type="text"
            value={message}
            onChange={handleChange}
            placeholder={replyTo ? `Replying to @${replyTo}...` : "Type a message..."}
            className="flex-grow rounded-md border p-2 text-zinc-800 dark:text-zinc-200 focus:outline-none border-zinc-300 bg-gradient-to-br from-zinc-50 to-zinc-100 dark:border-zinc-700 dark:from-zinc-900 dark:to-zinc-950/90"
            disabled={isSending}
            ref={inputRef}
            autoFocus
          />
        </div>

        <button
          type="submit"
          onClick={handleSendMessage}
          className={clsx(
            "ml-2 rounded-md bg-indigo-600 p-3 text-white",
            !message.trim() && "cursor-not-allowed !bg-zinc-600"
          )}
          disabled={isSending || !message.trim()}
          data-umami-event="Chat Widget: Send Chat"
        >
          <SendIcon size={18} />
        </button>
      </form>
      <ChatUserInfo isWidget={isWidget} />
    </>
  );
};

export default ChatInput;
