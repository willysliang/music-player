/**
 * @ Author: willysliang
 * @ Create Time: 2022-11-15 09:39:34
 * @ Modified by: willysliang
 * @ Modified time: 2022-11-15 09:46:40
 * @ Description: 案例路由配置
 */
import { demoPages } from '@/views/demo/constant'

export const demoRoutes = [
  {
    path: demoPages.EXCEL.path,
    name: demoPages.EXCEL.name,
    component: () => import('../../views/demo/excel/index.vue'),
    meta: {
      ...demoPages.EXCEL,
    },
  },
]
