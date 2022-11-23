/**
 * @ Author: willysliang
 * @ Create Time: 2022-11-15 09:25:16
 * @ Modified by: willysliang
 * @ Modified time: 2022-11-23 17:37:02
 * @ Description: 路由配置 & 常量设定
 */

import {
  Excel,
  Zip,
  PersonalPrivacy,
  TestTube,
  PayCodeOne,
} from '@icon-park/vue-next'

export const demoPages = {
  EXCEL: {
    path: 'demoExcel',
    key: 'demoExcel',
    name: 'demoExcel',
    title: 'EXCEL表格',
    icon: Excel,
  },
  ZIP: {
    path: 'demoZip',
    key: 'demoZip',
    name: 'demoZip',
    title: 'ZIP导出',
    icon: Zip,
  },
  COPY_TEXT: {
    path: 'copyText',
    key: 'copyText',
    name: 'copyText',
    title: '复制文本',
    icon: Zip,
  },
  QRCODE: {
    path: 'QRCODE',
    key: 'QRCODE',
    name: 'QRCODE',
    title: '生成二维码',
    icon: PayCodeOne,
    component: () => import('./Qrcode/index.vue')
  },
  PERSONAL_CENTER: {
    path: 'personalCenter',
    key: 'personalCenter',
    name: 'personalCenter',
    title: '个人中心',
    icon: PersonalPrivacy,
    component: () => import('./personal/PersonalSetting.vue')
  },
  TEST: {
    path: 'TEST',
    key: 'TEST',
    name: 'TEST',
    title: '测试',
    icon: TestTube,
  },
} as const
