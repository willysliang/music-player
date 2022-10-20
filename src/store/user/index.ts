import { defineStore } from 'pinia'
import type { UserProfile } from '@/types/user'
import { useLogin, useLoginStatus } from '@/api/module/user'
import { Storage } from '@util/cache'
import $md5 from 'js-md5'
import { USER_TOKEN, USER_COOKIE, USER_NAME } from '@/config/constant/cache'

interface IUserState {
  token: string // token
  username?: string // 姓名
  cookie: string // cookie
  showLogin: boolean // 是否展现登录弹层
  profile: UserProfile // 用户信息
}

export const useUserStore = defineStore({
  id: 'user',
  state: (): IUserState => ({
    token: Storage.get(USER_TOKEN, ''),
    cookie: '',
    showLogin: false,
    username: Storage.get(USER_NAME, 'willys'),
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
      const res = await useLogin(phone, $md5(password))
      this.token = res?.token || ''
      this.cookie = res?.cookie || ''
      document.cookie = res?.cookie || ''
      this.username = res?.username || 'willy'

      const expire = 7 * 24 * 60 * 60 * 1000
      Storage.set(USER_TOKEN, this.token, expire)
      Storage.set(USER_COOKIE, this.cookie, expire)

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

    /** 清除信息 */
    resetData () {
      this.token = ''
      this.username = 'willy'
      Storage.clear()
    },

    /** 退出登录 */
    async LOGOUT () {
      try {
        // await useLogout(this.uid)
        this.resetData()
      } catch {}
    },
  },
})
