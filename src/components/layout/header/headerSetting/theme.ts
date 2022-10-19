/**
 * @ Author: willysliang
 * @ Create Time: 2022-10-13 13:52:11
 * @ Modified by: willysliang
 * @ Modified time: 2022-10-19 10:03:06
 * @ Description: 主题配置
 */

import {
  themeDark,
  themeLight,
  themeRealDark,
  menuSide,
  menuTop,
} from '@/assets/icons/theme'

interface Theme {
  id: number // id编号
  label: string // 显示的提示
  value: any // 要展现的内容
}

/** 主题风格 */
export const themeStyle: Theme[] = [
  {
    id: 1,
    label: '亮色主题风格',
    value: themeDark,
  },
  {
    id: 2,
    label: '暗色主题风格',
    value: themeLight,
  },
  {
    id: 3,
    label: '暗黑模式',
    value: themeRealDark,
  },
]

/** 导航模式（布局方式） */
export const themeLayout: Theme[] = [
  {
    id: 1,
    label: '侧边菜单布局',
    value: menuSide,
  },
  {
    id: 2,
    label: '顶部菜单布局',
    value: menuTop,
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
