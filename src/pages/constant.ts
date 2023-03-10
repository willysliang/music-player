/**
 * @ Author: willysliang
 * @ Create Time: 2022-11-15 09:25:16
 * @ Modified by: willysliang
 * @ Modified time: 2023-03-10 10:03:06
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
  Effects,
  MagicWand,
  BabyFeet,
  DatabaseNetwork,
  Magic,
  InboxOut,
  Form,
} from '@icon-park/vue-next'

export const demoPages = {
  TEST: {
    path: 'TEST',
    key: 'TEST',
    name: 'TEST',
    title: '测试',
    icon: TestTube,
    component: () => import('./test/index.vue'),
  },
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
  FILE_UPLOAD: {
    path: 'FileUpload',
    key: 'FileUpload',
    name: 'FileUpload',
    title: '文件切块上传',
    icon: InboxOut,
    component: () => import('./FileUpload/index.vue'),
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
  VIRTUAL_LIST: {
    path: 'virtualList',
    key: 'virtualList',
    name: 'virtualList',
    title: '虚拟列表',
    icon: Form,
    component: () => import('./virtualList/index.vue'),
  },
  COMMUNICATION: {
    path: 'Communication',
    key: 'Communication',
    name: 'Communication',
    title: '组件通信',
    icon: HourglassFull,
    component: () => import('./Communication/index.vue'),
  },
  CSSEFFECTS: {
    path: 'CssEffects',
    key: 'CssEffects',
    name: 'CssEffects',
    title: 'Css特效',
    icon: Effects,
    component: () => import('./CssEffects/index.vue'),
  },
  PICTURE_EFFECTS: {
    path: 'PictureEffects',
    key: 'PictureEffects',
    name: 'PictureEffects',
    title: '图片特效',
    icon: Magic,
    component: () => import('./PictureEffects/index.vue'),
  },
  PARTICLE: {
    path: 'ParticleAnimation',
    key: 'ParticleAnimation',
    name: 'ParticleAnimation',
    title: '粒子动画',
    icon: MagicWand,
    component: () => import('./ParticleAnimation/index.vue'),
  },
  WaterMark: {
    path: 'WaterMark',
    key: 'WaterMark',
    name: 'WaterMark',
    title: '页面水印',
    icon: BabyFeet,
    component: () => import('./WaterMark/index.vue'),
  },
  INDEXED_DB: {
    path: 'IndexedDB',
    key: 'IndexedDB',
    name: 'IndexedDB',
    title: '本地数据库',
    icon: DatabaseNetwork,
    component: () => import('./IndexedDB/index.vue'),
  },
} as const
