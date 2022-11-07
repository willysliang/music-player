import { createRouter, createWebHistory } from 'vue-router'
import { Pages } from './constant'
import { createRouterGuards } from './routerGuards'

const routes = [
  {
    path: Pages.LOGIN.path,
    name: Pages.LOGIN.name,
    meta: {
      ...Pages.LOGIN,
      keepAlive: true,
      requireAuth: false,
    },
    component: () => import('../views/login.vue'),
  },
  {
    path: '/',
    name: Pages.INDEX.name,
    meta: {
      ...Pages.INDEX,
      keepAlive: true,
      requireAuth: true,
    },
    redirect: { name: Pages.DISCOVER.name },
    component: () => import('../views/root.vue'),
    children: [
      /***
       * 推荐模块
       */
      /** 推荐页 */
      {
        path: Pages.DISCOVER.path,
        name: Pages.DISCOVER.name,
        component: () => import('../views/discover/index.vue'),
        meta: {
          ...Pages.DISCOVER,
          keepAlive: true,
        },
      },
      /** 歌曲页 */
      {
        path: Pages.PLAYLIST.path,
        name: Pages.PLAYLIST.name,
        component: () => import('../views/playlist/index.vue'),
        meta: {
          ...Pages.PLAYLIST,
        },
      },
      /** 专辑详情页 */
      {
        path: Pages.ALBUM.path,
        name: Pages.ALBUM.name,
        component: () => import('../views/album/index.vue'),
        meta: {
          ...Pages.ALBUM,
        },
      },
      /** 歌手详情页 */
      {
        path: Pages.ARTIST.path,
        name: Pages.ARTIST.name,
        component: () => import('../views/artist/index.vue'),
        meta: {
          ...Pages.ARTIST,
        },
      },
      /** MV详情页 */
      {
        path: Pages.MV.path,
        name: Pages.MV.name,
        component: () => import('../views/mv/index.vue'),
        meta: {
          ...Pages.MV,
        },
      },

      /***
       * 音乐馆模块
       */
      {
        path: Pages.MUSIC.path,
        name: Pages.MUSIC.name,
        component: () => import('../views/musicHall/index.vue'),
        meta: {
          ...Pages.MUSIC,
        },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_PATH as string),
  routes,
})

createRouterGuards(router)

export default router
