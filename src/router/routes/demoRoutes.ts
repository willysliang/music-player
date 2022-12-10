/**
 * @ Author: willysliang
 * @ Create Time: 2022-11-15 09:39:34
 * @ Modified by: willysliang
 * @ Modified time: 2022-12-10 08:29:09
 * @ Description: 案例路由配置
 */
import { demoPages } from '@/views/demo/constant'

/** 获取 demo 模块的所有路由 */
const getDemoRoutes = () => {
  const demoRoutes: any = []
  for (const [, value] of Object.entries(demoPages)) {
    const { path, name, component } = value
    demoRoutes.push({
      path,
      name,
      component,
      meta: value,
    })
  }
  return demoRoutes
}

export const demoRoutes = getDemoRoutes()
