import { defineStore } from 'pinia'
import type { UserProfile } from '@/types/user'
import { useLogin, useLoginStatus } from '@/api/module/user'
import { USER_TOKEN, USER_COOKIE } from '@/config/cache'

interface IUserState {
  token: string // token
  name?: string // 姓名
  cookie: string // cookie
  showLogin: boolean // 是否展现登录弹层
  profile: UserProfile // 用户信息
}

export const useUserStore = defineStore({
  id: 'user',
  state: (): IUserState => ({
    token: '',
    cookie: '',
    showLogin: false,
    profile: {} as UserProfile,
  }),
  getters: {
    isLogin: (state): boolean => {
      return state.profile?.userId > 0
    },
  },
  actions: {
    /* 登录 */
    async login (phone: string, password: string) {
      const res = await useLogin(phone, password)
      this.token = res?.token || ''
      this.cookie = res?.cookie || ''
      document.cookie = res?.cookie || ''
      localStorage.setItem(USER_TOKEN, this.token)
      localStorage.setItem(USER_COOKIE, this.cookie)
      this.checkLogin()
    },

    /* 检查登录状态 */
    async checkLogin () {
      try {
        const { data } = await useLoginStatus()
        this.profile = data.profile
        this.showLogin = false
      } catch {}
    },
  },
})
