/**
 * @ Author: willysliang
 * @ Create Time: 2022-11-15 09:39:34
 * @ Modified by: willysliang
 * @ Modified time: 2022-11-18 18:02:32
 * @ Description: 案例路由配置
 */
import { demoPages } from '@/views/demo/constant'

export const demoRoutes = [
  /** EXCEL 表格 */
  {
    path: demoPages.EXCEL.path,
    name: demoPages.EXCEL.name,
    component: () => import('../../views/demo/excel/index.vue'),
    meta: {
      ...demoPages.EXCEL,
    },
  },

  /** ZIP 压缩包 */
  {
    path: demoPages.ZIP.path,
    name: demoPages.ZIP.name,
    component: () => import('../../views/demo/Zip/ExportZip.vue'),
    meta: {
      ...demoPages.ZIP,
    },
  },
]
