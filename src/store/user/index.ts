import { defineStore } from 'pinia'

interface IUserState {
  token: string
  name: string
}

export const useUserStore = defineStore({
  id: 'user',
  state: (): IUserState => ({
    name: '张三',
    token: '',
  }),
  getters: {
    getToken (): string {
      return this.token
    },
  },
  actions: {
    setToken (token: string) {
      this.token = token
    },
    updateName (name: string) {
      this.name = name
    },
  },
})
