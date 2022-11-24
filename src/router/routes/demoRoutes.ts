/**
 * @ Author: willysliang
 * @ Create Time: 2022-11-15 09:39:34
 * @ Modified by: willysliang
 * @ Modified time: 2022-11-23 17:49:48
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

  /** copyText 复制文本 */
  {
    path: demoPages.COPY_TEXT.path,
    name: demoPages.COPY_TEXT.name,
    component: () => import('../../views/demo/copyText/index.vue'),
    meta: {
      ...demoPages.COPY_TEXT,
    },
  },

  /** Qrcode 生成二维码 */
  {
    path: demoPages.QRCODE.path,
    name: demoPages.QRCODE.name,
    component: () => import('../../views/demo/Qrcode/index.vue'),
    meta: {
      ...demoPages.QRCODE,
    },
  },

  /** Cropper 图片裁剪 */
  {
    path: demoPages.CROPPER.path,
    name: demoPages.CROPPER.name,
    component: () => import('../../views/demo/Cropper/CropImage.vue'),
    meta: {
      ...demoPages.CROPPER,
    },
  },

  /** 个人中心 */
  {
    path: demoPages.PERSONAL_CENTER.path,
    name: demoPages.PERSONAL_CENTER.name,
    component: () => import('../../views/demo/personal/PersonalSetting.vue'),
    meta: {
      ...demoPages.PERSONAL_CENTER,
    },
  },

  {
    path: demoPages.TEST.path,
    name: demoPages.TEST.name,
    component: () => import('../../views/demo/test/index.vue'),
    meta: {
      ...demoPages.TEST,
    },
  },
]
