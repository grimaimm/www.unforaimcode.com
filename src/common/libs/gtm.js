import { sendGTMEvent } from "@next/third-parties/google"

export const sendPageView = url => {
  sendGTMEvent({ event: "page_viewed", url })
}

export const sendDataLayer = data => {
  sendGTMEvent(data)
}
