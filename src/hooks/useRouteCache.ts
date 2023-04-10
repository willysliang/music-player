/**
 * @ Author: willysliang
 * @ Create Time: 2023-04-10 14:01:22
 * @ Modified by: willysliang
 * @ Modified time: 2023-04-10 14:06:41
 * @ Description: 路由缓存 hooks
 */

import { ref, nextTick } from 'vue'

const caches = ref<string[]>([])

/** 路由缓存 */
export function useRouteCache () {
  /** 添加缓存的路由组件 */
  function addCache (componentName: string | string[]) {
    if (Array.isArray(componentName)) {
      componentName.forEach(addCache)
      return
    }

    if (!componentName || caches.value.includes(componentName)) return

    caches.value.push(componentName)
  }

  /** 移除缓存的路由组件 */
  function removeCache (componentName: string) {
    const index = caches.value.indexOf(componentName)
    if (index > -1) {
      return caches.value.splice(index, 1)
    }
  }

  /** 移除缓存的路由组件的实例 */
  async function removeCacheEntry (componentName: string) {
    if (removeCache(componentName)) {
      await nextTick()
      addCache(componentName)
    }
  }

  return {
    caches,
    addCache,
    removeCache,
    removeCacheEntry,
  }
}
