import * as React from "react"
import { Popover } from "@headlessui/react"
import { BsSpotify as SpotifyIcon } from "react-icons/bs"
import { fetcher } from "@/services/fetcher"
import Image from "next/image"
import useSWR from "swr"

import AnimatedBars from "./AnimatedBars"
import DevicePopover from "./DevicePopover"
import PlayerPopover from "./PlayerPopover"

const NowPlayingBar = () => {
  const [isShowDeviceList, setShowDeviceList] = React.useState(false)
  const [isShowPlayingInfo, setShowPlayingInfo] = React.useState(false)

  const { data: playingData } = useSWR("/api/now-playing", fetcher)

  const { data: devicesData = [] } = useSWR("/api/available-devices", fetcher)

  const activeDevice = devicesData?.find(device => device.is_active)

  const handleOpenSongUrl = url => {
    url && window.open(url, "_blank")
  }

  if (!playingData?.songUrl) return null

  return (
    <div className="fixed !bg-red-500 bottom-0 z-[99999] hidden w-full lg:block">
      <div className="flex justify-between bg-green-400 px-4 pb-0.5 pt-[2.5px] text-[14px] text-zinc-800 dark:bg-green-500 dark:text-zinc-900">
        {playingData?.songUrl ? (
          <Popover className="relative">
            <Popover.Button
              as="div"
              onMouseEnter={() => setShowPlayingInfo(true)}
              onMouseLeave={() => setShowPlayingInfo(false)}
            >
              <div className="flex items-center gap-2">
                <AnimatedBars />
                <div className="hidden sm:block ">Now Playing :</div>
                <div className="flex items-center gap-2 transition-all duration-300">
                  {playingData?.albumImageUrl && (
                    <Image
                      className="rounded-sm"
                      unoptimized
                      alt={playingData?.album}
                      src={playingData?.albumImageUrl}
                      width={18}
                      height={18}
                    />
                  )}
                  <div
                    className="flex gap-1 hover:cursor-pointer hover:underline"
                    onClick={() => handleOpenSongUrl(playingData?.songUrl)}
                  >
                    <span>{playingData?.artist} -</span>
                    <span>{playingData?.title}</span>
                  </div>
                </div>
              </div>
            </Popover.Button>
            <PlayerPopover isShow={isShowPlayingInfo} playing={playingData} />
          </Popover>
        ) : (
          <div className="flex items-center gap-1">
            <SpotifyIcon size={16} className="mr-1" />
            <div>Not Playing</div>
          </div>
        )}

        {playingData?.songUrl && (
          <Popover className="relative">
            <Popover.Button
              as="div"
              onMouseEnter={() => setShowDeviceList(true)}
              onMouseLeave={() => setShowDeviceList(false)}
            >
              <div className="flex items-center gap-1">
                <SpotifyIcon size={16} className="mr-0.5" />
                <div>
                  Listening on{" "}
                  <span className="font-medium">{activeDevice?.name}</span>
                </div>
              </div>
            </Popover.Button>
            <DevicePopover isShow={isShowDeviceList} devices={devicesData} />
          </Popover>
        )}
      </div>
    </div>
  )
}

export default NowPlayingBar
