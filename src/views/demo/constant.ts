/**
 * @ Author: willysliang
 * @ Create Time: 2022-11-15 09:25:16
 * @ Modified by: willysliang
 * @ Modified time: 2022-12-10 08:25:11
 * @ Description: 路由配置 & 常量设定
 */

import {
  Excel,
  Zip,
  TestTube,
  CopyOne,
  PayCodeOne,
  Tailoring,
  HandDrag,
  Comments,
  Editor,
  WinkingFaceWithOpenEyes,
  DashboardCar,
  CubeFour,
  HourglassFull,
} from '@icon-park/vue-next'

export const demoPages = {
  EXCEL: {
    path: 'demoExcel',
    key: 'demoExcel',
    name: 'demoExcel',
    title: 'EXCEL表格',
    icon: Excel,
    component: () => import('./excel/index.vue'),
  },
  ZIP: {
    path: 'demoZip',
    key: 'demoZip',
    name: 'demoZip',
    title: 'ZIP导出',
    icon: Zip,
    component: () => import('./Zip/ExportZip.vue'),
  },
  COPY_TEXT: {
    path: 'copyText',
    key: 'copyText',
    name: 'copyText',
    title: '复制文本',
    icon: CopyOne,
    component: () => import('./copyText/index.vue'),
  },
  QRCODE: {
    path: 'QRCODE',
    key: 'QRCODE',
    name: 'QRCODE',
    title: '生成二维码',
    icon: PayCodeOne,
    component: () => import('./Qrcode/index.vue'),
  },
  CROPPER: {
    path: 'CROPPER',
    key: 'CROPPER',
    name: 'CROPPER',
    title: '图片裁剪',
    icon: Tailoring,
    component: () => import('./Cropper/CropImage.vue'),
  },
  DRAG: {
    path: 'DRAG',
    key: 'DRAG',
    name: 'DRAG',
    title: '拖拽组件',
    icon: HandDrag,
    component: () => import('./Dragger/index.vue'),
  },
  BARRAGE: {
    path: 'Barrage',
    key: 'Barrage',
    name: 'Barrage',
    title: '视频 & 弹幕',
    icon: Comments,
    component: () => import('./Barrage/index.vue'),
  },
  EDITOR: {
    path: 'EDITOR',
    key: 'EDITOR',
    name: 'EDITOR',
    title: '富文本编辑器',
    icon: Editor,
    component: () => import('./Editor/index.vue'),
  },
  EMOJI: {
    path: 'EMOJI',
    key: 'EMOJI',
    name: 'EMOJI',
    title: '表情包',
    icon: WinkingFaceWithOpenEyes,
    component: () => import('./Emoji/index.vue'),
  },
  DASHBOARD: {
    path: 'Dashboard',
    key: 'Dashboard',
    name: 'Dashboard',
    title: '仪表盘',
    icon: DashboardCar,
    component: () => import('./Dashboard/index.vue'),
  },
  LOTTERY: {
    path: 'Lottery',
    key: 'Lottery',
    name: 'Lottery',
    title: '抽奖',
    icon: CubeFour,
    component: () => import('./Lottery/index.vue'),
  },
  LAZY_LOADING: {
    path: 'lazyLoading',
    key: 'lazyLoading',
    name: 'lazyLoading',
    title: '懒加载',
    icon: HourglassFull,
    component: () => import('./LazyLoading/index.vue'),
  },
  COMMUNICATION: {
    path: 'Communication',
    key: 'Communication',
    name: 'Communication',
    title: '组件通信',
    icon: HourglassFull,
    component: () => import('./Communication/index.vue'),
  },
  TEST: {
    path: 'TEST',
    key: 'TEST',
    name: 'TEST',
    title: '测试',
    icon: TestTube,
    component: () => import('./test/index.vue'),
  },
} as const
