import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    logoName: 'MUSIC  PLAYER',
    iconColor: '#ccc',
    iconSize: 22,
  }),
})
