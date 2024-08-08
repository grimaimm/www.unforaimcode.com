// src/modules/chatroomPage/components/ChatItem.jsx
import * as React from "react";
// import clsx from "clsx";
import Image from "next/image";
// import { formatDistanceToNow } from "date-fns";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import { FiTrash2 as DeleteIcon } from "react-icons/fi";
import { MdAdminPanelSettings as AdminIcon } from "react-icons/md";
import { ImReply } from "react-icons/im"
import { MdVerified as VerifiedIcon } from 'react-icons/md';
import Tooltip from "@/common/components/elements/Tooltip";

import ChatTime from "./ChatTime";

const ChatItem = ({
  id,
  image,
  name,
  email,
  message,
  created_at,
  onDelete,
  is_reply,
  reply_to,
  clickReply
}) => {
  const { data: session } = useSession();
  const [onHover, setOnHover] = React.useState(false)
  const authorEmail = "muhammadrahim.mr196@gmail.com";
  const isUserMessage = session?.user?.email === email;

  const handleDeleteMessage = () => {
    onDelete(id);
  };

  return (
    <motion.div
      id="chat-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex w-full items-start space-x-3"
    >
      <Image
        src={image}
        alt={name}
        width={40}
        height={40}
        className="rounded-full"
      />
      <div className="flex w-full flex-col space-y-1">
        <div className="flex items-end space-x-2">
          {/* <div className="flex items-center gap-2">
            <div className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {name}
            </div>
            {email === authorEmail && (
              <div className="text-medium flex items-center gap-0.5 rounded-full bg-gradient-to-bl from-indigo-800 via-violet-900 to-indigo-800 px-1.5 py-0.5 text-violet-50">
                <AdminIcon size={13} />
                <span className="text-[10px]">Author</span>
              </div>
            )}
            <div className="hidden md:flex">
              <ChatTime datetime={created_at} />
            </div>
          </div> */}
          <div className="flex items-center space-x-1">
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{name}</span>
            {email === authorEmail && (
              <Tooltip title="Author">
                <VerifiedIcon size={15} className="text-blue-400" />
              </Tooltip>
            )}
          </div>
          <div className="hidden md:flex">
            <ChatTime datetime={created_at} />
          </div>
        </div>
        <div
          className="flex w-full max-w-[90%] items-end space-x-2"
          onMouseEnter={() => setOnHover(true)}
          onMouseLeave={() => setOnHover(false)}
        >
          <div className="rounded-xl rounded-tl-none bg-zinc-200 px-3 py-2 font-sans dark:bg-zinc-800 w-auto max-w-[90%]">
            <p className="text-zinc-700 dark:text-zinc-200">
              {is_reply && (
                <>
                  <span className="mr-1 whitespace-nowrap dark:text-indigo-400 text-indigo-600">
                    @{reply_to}
                  </span>
                  <span>{message}</span>
                </>
              )}
              {!is_reply && <>{message}</>}
            </p>
          </div>
          {onHover && clickReply && !isUserMessage && (
            <Tooltip title="Reply">
              <motion.button
                aria-label="Reply"
                initial={{ opacity: 0, transform: "rotate(-45deg)" }}
                animate={{ opacity: 1, transform: "rotate(0deg)" }}
                onClick={() => clickReply(id)}
              >
                <ImReply size={17} className="text-zinc-400" />
              </motion.button>
            </Tooltip>
          )}
        </div>
        <div className="flex md:hidden">
          <ChatTime datetime={created_at} />
        </div>
      </div>
      {(session?.user?.email === email || session?.user?.email === authorEmail) && (
        <button onClick={handleDeleteMessage} aria-label="Delete">
          <DeleteIcon size={16} className="text-zinc-600 dark:text-zinc-400" />
        </button>
      )}
    </motion.div>
  );
};

export default ChatItem;
