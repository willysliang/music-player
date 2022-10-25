import type { IPagesTypeItem } from '@/types/constant'

/***
 * 路由数据集定义
 */
export const Pages: { [propName: string]: IPagesTypeItem } = {
  /** 登录 */
  LOGIN: {
    path: '/login',
    key: 'Login',
    name: 'LOGIN',
    title: '登录',
  },
  INDEX: {
    path: 'index',
    key: 'index',
    name: 'INDEX',
    title: '首页',
  },
  DISCOVER: {
    path: 'discover',
    key: 'discover',
    name: 'DISCOVER',
    title: '推荐页',
  },
  PLAYLIST: {
    path: 'PLAYLIST',
    key: 'playlist',
    name: 'PLAYLIST',
    title: '歌单列表',
  },
  ALBUM: {
    path: 'ALBUM',
    key: 'ALBUM',
    name: 'ALBUM',
    title: '专辑列表',
  },
  ARTIST: {
    path: 'ARTIST',
    key: 'ARTIST',
    name: 'ARTIST',
    title: '歌手列表',
  },
}
