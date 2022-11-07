import {
  Planet,
  Music,
  VideoOne,
  Fm,
  Like,
  Computer,
  DownloadThree,
  PlayTwo,
} from '@icon-park/vue-next'
import { Icon } from '@icon-park/vue-next/lib/runtime'

/** 路由数据约束定义 */
export interface IPages {
  /** 路由路径 */
  path: string
  /** 路由关键字 */
  key: string
  /** 路由名称 */
  name: string
  /** 路由标题 */
  title: string
  /** 路由图标 */
  icon: Icon
  children?: IPages[]
}

/***
 * 路由数据集定义
 */
export const Pages = {
  /** 登录 */
  LOGIN: {
    path: '/login',
    key: 'Login',
    name: 'LOGIN',
    title: '登录',
    icon: Planet,
  },
  /** 基础页 */
  INDEX: {
    path: 'index',
    key: 'index',
    name: 'INDEX',
    title: '首页',
    icon: Planet,
  },

  /***
   * 推荐模块
   */
  DISCOVER: {
    path: 'discover',
    key: 'discover',
    name: 'DISCOVER',
    title: '推荐页',
    icon: Planet,
  },
  PLAYLIST: {
    path: 'PLAYLIST',
    key: 'playlist',
    name: 'PLAYLIST',
    title: '歌单列表',
    icon: Planet,
  },
  ALBUM: {
    path: 'ALBUM',
    key: 'ALBUM',
    name: 'ALBUM',
    title: '专辑列表',
    icon: Planet,
  },
  ARTIST: {
    path: 'ARTIST',
    key: 'ARTIST',
    name: 'ARTIST',
    title: '歌手列表',
    icon: Planet,
  },
  MV: {
    path: 'MV',
    key: 'MV',
    name: 'MV',
    title: 'mv详情',
    icon: Planet,
  },

  /***
   * 音乐馆模块
   */
  MUSIC: {
    path: 'music',
    key: 'music',
    name: 'MUSIC',
    title: '音乐馆',
    icon: Music,
  },
} as const

/** 菜单列表 */
export const menuList: IPages[] = [
  {
    title: '在线音乐',
    name: 'onlineMusic',
    key: 'onlineMusic',
    path: 'onlineMusic',
    icon: VideoOne,
    children: [
      Pages.DISCOVER,
      Pages.MUSIC,
      {
        title: '视频',
        name: 'video',
        key: 'video',
        path: 'onlineMusic',
        icon: VideoOne,
      },
      {
        title: '电台',
        name: 'dj',
        key: 'dj',
        path: 'onlineMusic',
        icon: Fm,
      },
    ],
  },
  {
    title: '我的音乐',
    name: 'mineMusic',
    key: 'mineMusic',
    path: 'onlineMusic',
    icon: VideoOne,
    children: [
      {
        title: '我喜欢',
        name: 'music',
        key: 'love',
        path: 'onlineMusic',
        icon: Like,
      },
      {
        title: '本地歌曲',
        name: 'music',
        key: 'local',
        path: 'onlineMusic',
        icon: Computer,
      },
      {
        title: '下载歌曲',
        name: 'music',
        key: 'download',
        path: 'onlineMusic',
        icon: DownloadThree,
      },
      {
        title: '最近播放',
        name: 'music',
        key: 'recently',
        path: 'onlineMusic',
        icon: PlayTwo,
      },
    ],
  },
]
