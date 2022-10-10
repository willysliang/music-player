import { createRouter, createWebHistory } from 'vue-router'
import { Pages } from './constant'

const routes = [
  {
    path: '/login',
    name: Pages.LOGIN,
    meta: {
      title: '登录',
      keepAlive: true,
      requireAuth: false,
    },
    component: () => import('../views/login.vue'),
  },
  {
    path: '/',
    name: Pages.INDEX,
    meta: {
      title: '首页',
      keepAlive: true,
      requireAuth: true,
    },
    redirect: { name: Pages.DISCOVER },
    component: () => import('../views/root.vue'),
    children: [
      {
        path: 'discover',
        name: Pages.DISCOVER,
        component: () => import('../views/discover/index.vue'),
        meta: {
          key: Pages.DISCOVER,
          title: '推荐',
          keepAlive: true,
        },
      },
      {
        path: 'playlist',
        name: Pages.PLAYLIST,
        component: () => import('../views/playlist/index.vue'),
        meta: {
          key: Pages.PLAYLIST,
          title: '歌单列表详情',
        },
      },
      {
        path: 'album',
        name: Pages.ALBUM,
        component: () => import('../views/album/index.vue'),
        meta: {
          key: Pages.ALBUM,
          title: '专辑列表详情',
        },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
