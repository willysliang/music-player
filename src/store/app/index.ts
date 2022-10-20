/**
 * @ Author: willysliang
 * @ Create Time: 2022-10-10 09:05:41
 * @ Modified by: willysliang
 * @ Modified time: 2022-10-20 13:50:06
 * @ Description: app 相关的持久化数据
 */

import { defineStore } from 'pinia'

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    logoName: 'WILLY 云音乐',
    iconColor: '#ccc',
    iconSize: 22,
  }),
})
