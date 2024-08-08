import { create } from "zustand"

export const useNotifStore = create()(set => ({
  isOpen: false,
  text: "",
  showNotif: () => set({ isOpen: true }),
  hideNotif: () => set({ isOpen: false }),
  setNotifText: text => set({ text })
}))
