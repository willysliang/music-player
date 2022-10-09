import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
      keepAlive: true,
      requireAuth: false,
    },
    component: () => import('@/views/login.vue'),
  },
  {
    path: '/',
    name: 'Index',
    meta: {
      title: '首页',
      keepAlive: true,
      requireAuth: true,
    },
    component: () => import('@/views/root.vue'),
    children: [
      {
        path: 'discover',
        name: 'discover',
        component: () => import("@/views/discover/index.vue"),
        meta: {
          key: 'discover',
          title: '推荐',
          keepAlive: true,
        }
      }, {
        path: 'playlist',
        name: 'playlist',
        component: () => import("@/views/playlist/index.vue"),
        meta: {
          key: 'playlist',
          title: '歌单列表详情',
        }
      },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
