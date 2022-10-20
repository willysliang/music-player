/**
 * @ Author: willysliang
 * @ Create Time: 2022-10-13 13:42:09
 * @ Modified by: willysliang
 * @ Modified time: 2022-10-20 17:25:23
 * @ Description: 主题配置相关的持久化数据
 */
import { defineStore } from 'pinia'
import {
  ThemeStype,
  ThemeLayout,
} from '@/config/constant/theme'
import { onBeforeMount } from 'vue'
// import { Storage } from '@util/cache'

interface ThemeStore {
  /** 设置抽屉开关控制 */
  drawer: boolean
  /** 整体风格活跃的key */
  themeStyleCurrent: any
  /** 主题颜色活跃的key */
  themeColorsCurrent: any
  /** 导航模式（布局方式）活跃的key */
  themeLayoutCurrent: any

  /***
   * 菜单色配置
   */
  /** 活跃的菜单文本颜色 */
  menuActiveTextColor: string
  /** 菜单背景色 */
  menuBgColor: string
  /** 菜单字体色 */
  menuTextColor: string
}
export const useThemeStore = defineStore({
  id: 'theme',
  state: (): ThemeStore => ({
    drawer: false,
    themeStyleCurrent: ThemeStype.THEME_DARK,
    themeLayoutCurrent: ThemeLayout.MENU_SIDE,
    themeColorsCurrent: 'rgb(24, 144, 255)',

    /***
     * 菜单色配置
     */
    menuActiveTextColor: 'rgb(226, 54, 82)',
    menuBgColor: 'rgb(0, 21, 41)',
    menuTextColor: '#fff',
  }),
  getters: {
    /** 判断主题是否为横栏 */
    themeLayoutIsVertical: (state): boolean =>
      state.themeLayoutCurrent === ThemeLayout.MENU_TOP,
  },
  actions: {
    /** 改变整体风格 */
    changeThemeStyle (key) {
      this.themeStyleCurrent = key
      this.themeStyleLevel()
    },

    /** 改变航模式（布局方式） */
    changeThemeLayout (key) {
      this.themeLayoutCurrent = key
    },

    /***
     * 计算整体风格的层级来改变相应样式
     * 1：亮色主题风格
     * 2：暗色主题风格
     * 3：暗黑模式
     */
    themeStyleLevel () {
      switch (this.themeStyleCurrent) {
        case ThemeStype.THEME_DARK:
          this.menuActiveTextColor = '#d42121'
          this.menuBgColor = '#fff'
          this.menuTextColor = 'rgb(0, 21, 41)'
          break

        case ThemeStype.THEME_LIGHT:
          this.menuActiveTextColor = 'rgb(226, 54, 82)'
          this.menuBgColor = 'rgb(0, 21, 41)'
          this.menuTextColor = '#fff'
          break

        case ThemeStype.THEME_REAL_DARK:
          this.menuActiveTextColor = 'rgb(226, 54, 82)'
          this.menuBgColor = 'rgb(0, 21, 41)'
          this.menuTextColor = '#fff'
          break

        default:
          this.menuActiveTextColor = '#d42121'
          this.menuBgColor = '#fff'
          this.menuTextColor = 'rgb(0, 21, 41)'
      }
    },
  },
})

/***
 * 主题背景初始化
 */
export const useThemeInit = () => {
  const { themeStyleLevel } = useThemeStore()

  onBeforeMount(() => {
    themeStyleLevel()
  })
}
