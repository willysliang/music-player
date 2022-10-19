/**
 * @ Author: willysliang
 * @ Create Time: 2022-10-13 13:42:09
 * @ Modified by: willysliang
 * @ Modified time: 2022-10-19 19:52:38
 * @ Description: 主题配置相关的持久化数据
 */
import { defineStore } from 'pinia'

import {
  themeDark,
  themeLight,
  themeRealDark,
  menuSide,
  menuTop,
} from '@/assets/icons/theme'

interface Theme {
  label: string // 显示的提示
  value: any // 要展现的内容
  key?: number | string // 关键词
}

/** 主题风格 */
export const themeStyle: Theme[] = [
  {
    label: '亮色主题风格',
    value: themeDark,
    key: 'themeDark',
  },
  {
    label: '暗色主题风格',
    value: themeLight,
    key: 'themeLight',
  },
  {
    label: '暗黑模式',
    value: themeRealDark,
    key: 'themeRealDark',
  },
]

/** 导航模式枚举对象 */
export enum ThemeLayout {
  MENU_SIDE,
  MENU_TOP,
}
/** 导航模式（布局方式） */
export const themeLayout: Theme[] = [
  {
    label: '侧边菜单布局',
    value: menuSide,
    key: ThemeLayout.MENU_SIDE
  },
  {
    label: '顶部菜单布局',
    value: menuTop,
    key: ThemeLayout.MENU_TOP
  },
]

/** 主题颜色 */
export const themeColors = [
  {
    title: '拂晓蓝（默认）',
    key: 'daybreak',
    value: 'rgb(24, 144, 255)',
  },
  {
    title: '薄暮',
    key: 'dust',
    value: 'rgb(245, 34, 45)',
  },
  {
    title: '火山',
    key: 'volcano',
    value: 'rgb(250, 84, 28)',
  },
  {
    title: '日暮',
    key: 'sunset',
    value: 'rgb(250, 173, 20)',
  },
  {
    title: '明青',
    key: 'cyan',
    value: 'rgb(19, 194, 194)',
  },
  {
    title: '极光绿',
    key: 'green',
    value: 'rgb(82, 196, 26)',
  },
  {
    title: '极客蓝',
    key: 'geekblue',
    value: 'rgb(47, 84, 235)',
  },
  {
    title: '酱紫',
    key: 'purple',
    value: 'rgb(114, 46, 209)',
  },
] as const

interface ThemeStore {
  /** 设置抽屉开关控制 */
  drawer: boolean
  /** 整体风格活跃的key */
  themeStyleCurrent: any
  /** 主题颜色活跃的key */
  themeColorsCurrent: string
  /** 导航模式（布局方式）活跃的key */
  themeLayoutCurrent: any
}
export const useThemeStore = defineStore({
  id: 'theme',
  state: (): ThemeStore => ({
    drawer: false,
    themeStyleCurrent: 'themeDark',
    themeLayoutCurrent: ThemeLayout.MENU_SIDE,
    themeColorsCurrent: 'rgb(24, 144, 255)',
  }),
})
