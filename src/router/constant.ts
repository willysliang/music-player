import type { IPagesType } from '@/types/constant'

/***
 * 路由常量
 */
export const Pages: IPagesType = {
  LOGIN: {
    // 登录
    key: 'Login',
    name: 'LOGIN',
    title: '登录',
  },
  INDEX: {
    key: 'index',
    name: 'INDEX',
    title: '首页',
  },
  DISCOVER: {
    key: 'discover',
    name: 'DISCOVER',
    title: '推荐页',
  },
  PLAYLIST: {
    key: 'playlist',
    name: 'PLAYLIST',
    title: '歌单列表',
  },
  ALBUM: {
    key: 'ALBUM',
    name: 'ALBUM',
    title: '专辑列表',
  },
  ARTIST: {
    key: 'ARTIST',
    name: 'ARTIST',
    title: '歌手列表',
  },
}
