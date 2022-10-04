import { defineStore } from 'pinia'

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    logoName: 'MUSIC  PLAYER',
    iconColor: '#fff',
    iconSize: 22,
  }),
})
