/**
 * @ Author: willysliang
 * @ Create Time: 2022-10-25 16:53:47
 * @ Modified by: willysliang
 * @ Modified time: 2022-10-25 18:40:21
 * @ Description: 路由守卫 routerGuards
 */
import NProgress from 'nprogress' // 导入 nprogress模块
import 'nprogress/nprogress.css' // 导入样式，否则看不到效果
import { isNavigationFailure, Router } from 'vue-router'
import { USER_TOKEN } from '@/config/constant/cache'
import { Storage } from '@util/cache'
import { Pages } from './constant'

NProgress.configure({ showSpinner: false }) // 显示右上角螺旋加载提示

/** 路由守卫函数 */
export function createRouterGuards (router: Router) {
  /** 路由前置守卫 */
  router.beforeEach(async (to, from, next) => {
    NProgress.start()
    const token = Storage.get(USER_TOKEN, null)
    if (token) {
      if (to.path === Pages.LOGIN.path) {
        next()
      } else {
        next()
      }
    } else {
      if (to.path === Pages.LOGIN.path) {
        next()
      } else {
        // next({
        //   name: Pages.LOGIN.name,
        //   query: { redirect: to.fullPath },
        //   replace: true,
        // })
        next()
      }
    }
  })

  /** 路由后置守卫 */
  router.afterEach((to, from, failure) => {
    if (isNavigationFailure(failure)) {
      console.error('failed navigation', failure)
    }

    NProgress.done()
  })

  /** 路由错误 */
  router.onError((error) => {
    console.log(error, '路由错误')
  })
}
