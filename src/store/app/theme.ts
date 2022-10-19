/**
 * @ Author: willysliang
 * @ Create Time: 2022-10-13 13:42:09
 * @ Modified by: willysliang
 * @ Modified time: 2022-10-19 10:00:38
 * @ Description: 主题配置相关的持久化数据
 */
import { defineStore } from 'pinia'

export const useThemeStore = defineStore({
  id: 'theme',
  state: () => ({
    drawer: false, // 设置抽屉开关控制
    themeStyleCurrent: 1, // 整体风格活跃的id
    themeColorsCurrent: 1, // 主题颜色活跃的id
    themeLayoutCurrent: 1, // 导航模式（布局方式）活跃的id
  }),
})
