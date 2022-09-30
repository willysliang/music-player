import { defineStore } from 'pinia'

export const useAppStore = defineStore('search', {
  state: () => ({
    iconColor: '#ccc',
    iconSize: 22,
  }),
})
