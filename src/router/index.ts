import { createRouter, createWebHistory } from 'vue-router'
import { Pages } from './constant'

const routes = [
  {
    path: '/login',
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
      {
        path: 'discover',
        name: Pages.DISCOVER.name,
        component: () => import('../views/discover/index.vue'),
        meta: {
          ...Pages.DISCOVER,
          keepAlive: true,
        },
      },
      {
        path: 'playlist',
        name: Pages.PLAYLIST.name,
        component: () => import('../views/playlist/index.vue'),
        meta: {
          ...Pages.PLAYLIST,
        },
      },
      {
        path: 'album',
        name: Pages.ALBUM.name,
        component: () => import('../views/album/index.vue'),
        meta: {
          ...Pages.ALBUM,
        },
      },
      {
        path: 'artist',
        name: Pages.ARTIST.name,
        component: () => import('../views/artist/index.vue'),
        meta: {
          ...Pages.ARTIST,
        },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_PATH as string),
  routes,
})

export default router
