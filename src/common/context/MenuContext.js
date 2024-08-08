import { create } from "zustand"

export const useMenu = create()(set => ({
  isOpen: false,
  showMenu: () => set({ isOpen: true }),
  hideMenu: () => set({ isOpen: false }),
  toggleMenu: () => set(prev => ({ isOpen: !prev.isOpen }))
}))
