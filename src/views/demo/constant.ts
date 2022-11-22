/**
 * @ Author: willysliang
 * @ Create Time: 2022-11-15 09:25:16
 * @ Modified by: willysliang
 * @ Modified time: 2022-11-22 17:25:14
 * @ Description: 路由配置 & 常量设定
 */

import { Excel, Zip, PersonalPrivacy, TestTube } from '@icon-park/vue-next'

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
  PERSONAL_CENTER: {
    path: 'personalCenter',
    key: 'personalCenter',
    name: 'personalCenter',
    title: '个人中心',
    icon: PersonalPrivacy,
  },
  TEST: {
    path: 'TEST',
    key: 'TEST',
    name: 'TEST',
    title: '测试',
    icon: TestTube,
  },
} as const
