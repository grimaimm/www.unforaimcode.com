import { useNotifStore } from "../stores/useNotifStore"

export function useNotif() {
  const { showNotif, setNotifText } = useNotifStore()

  function notif(text) {
    setNotifText(text)
    showNotif()
  }

  return notif
}
