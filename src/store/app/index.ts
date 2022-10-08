import { defineStore } from 'pinia'

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    logoName: 'Willy 云音乐',
    iconColor: '#ccc',
    iconSize: 22,
  }),
})
