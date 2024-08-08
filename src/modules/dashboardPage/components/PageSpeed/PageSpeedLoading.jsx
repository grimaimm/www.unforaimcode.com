import React from "react"
import { BsThreeDots } from "react-icons/bs"

export default function PageSpeedLoading({ className = "" }) {
  return (
    <div className={`relative flex flex-wrap justify-center items-center gap-6 md:gap-20${className}`}>
      {[1, 2, 3, 4].map(item => (
        <div
          key={item}
          className="relative w-[60px] md:w-[70px] h-auto flex flex-col gap-3 items-center pt-0.5 pb-1"
        >
          <div className="animate-pulse rounded-full bg-zinc-300 p-[6px] md:p-[6.5px] dark:bg-zinc-700 w-[58px] h-[58px] md:w-[68px] md:h-[68px]">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-white dark:bg-zinc-900">
              <BsThreeDots />
            </div>
          </div>
          <div className="h-3 w-16 animate-pulse rounded-full bg-zinc-300 dark:bg-zinc-700 md:w-[82px]"></div>
        </div>
      ))}
    </div>
  )
}
