/**
 * @ Author: willysliang
 * @ Create Time: 2022-10-10 09:05:41
 * @ Modified by: willysliang
 * @ Modified time: 2022-10-27 18:28:39
 * @ Description: App 相关的持久化数据
 */

import { defineStore } from 'pinia'
import { LOCALE_KEY } from '@/config/constant/app'
import { Storage } from '@util/cache'
import { LocaleType } from '@/locales/config'
import store from '@/store'

/** app数据集的约束 */
interface IAppStore {
  /** logo名称 */
  logoName: string
  /** 常规图标颜色 */
  iconColor: string
  /** 常规图标大小 */
  iconSize: any

  /** 国际化语言类型 */
  localeType: LocaleType
}

export const useAppStore = defineStore({
  id: 'app',
  state: (): IAppStore => ({
    logoName: 'WILLY 云音乐',
    iconColor: '#ccc',
    iconSize: 22,

    localeType: Storage.get(LOCALE_KEY, 'zh_CN'),
  }),

  getters: {
    /** 获取国际化语言类型 */
    getLocale: (state): LocaleType => state.localeType ?? 'zh_CN',
  },

  actions: {
    /** 切换语言类型，并设置国际化语言缓存 */
    setLocale (locale: LocaleType) {
      this.localeType = locale
      Storage.set(LOCALE_KEY, locale)
    },
  },
})

/** 在非 setup 函数外面使用 */
export function useAppStoreWithOut () {
  return useAppStore(store)
}
