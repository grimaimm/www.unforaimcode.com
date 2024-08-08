// src/modules/chatroomPage/components/ChatAuth.jsx
import clsx from "clsx";
import { signIn } from "next-auth/react";
import { BsGithub as GithubIcon } from "react-icons/bs";
import { FcGoogle as GoogleIcon } from "react-icons/fc";

import Button from "@/common/components/elements/Button";

const Providers = [
  {
    id: "google",
    icon: <GoogleIcon size={18} />,
    bgColor: "!bg-zinc-200 dark:!bg-zinc-800",
    textColor: "text-zinc-800 dark:text-zinc-200",
    label: "Sign in with Google"
  },
  {
    id: "github",
    icon: <GithubIcon size={18} className="text-zinc-800 dark:text-zinc-200" />,
    bgColor: "!bg-zinc-200 dark:!bg-zinc-800",
    textColor: "text-zinc-800 dark:text-zinc-200",
    label: "Sign in with Github"
  }
]

const ChatAuth = ({ isWidget = false }) => {
  return (
    <div className="flex flex-col border-t border-zinc-300 py-1 dark:border-zinc-900">
      <div className="mb-1 space-y-5 px-4 py-3 text-center text-zinc-700 dark:text-zinc-400">
        <p className="text-sm">
          Please sign in to start. Don't worry, your data is safe.
        </p>
        <div
          className={clsx(
            "flex flex-col items-center justify-center gap-4 lg:flex-row lg:gap-5",
            isWidget && "!flex-col !gap-4"
          )}
        >
          {Providers?.map(button => (
            <Button
              key={button.id}
              onClick={() => signIn(button.id)}
              className={`flex w-full items-center justify-center dark:!border-zinc-700 rounded-lg gap-2 ${
                button.bgColor
              } py-2.5 shadow-sm px-2.5 hover:!opacity-80 lg:w-fit ${isWidget &&
                "!w-full"}`}
              data-umami-event={`Sign In to Chat: ${button.label}`}
            >
              {button.icon}
              <span className={button.textColor}>{button.label}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ChatAuth;
