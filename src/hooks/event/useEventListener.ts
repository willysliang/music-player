/**
 * @ Author: willysliang
 * @ Create Time: 2022-12-05 17:22:53
 * @ Modified by: willysliang
 * @ Modified time: 2022-12-05 18:03:14
 * @ Description: useEventListener 间断性事件监听
 */

import { ref, unref, watch } from 'vue'
import type { Ref } from 'vue'
import { useDebounceFn, useThrottleFn } from '@vueuse/core'

/** 参数类型限制 */
export interface IUseEventParams {
  el?: Element | Ref<Element | undefined> | Window | any
  name: string
  /** 所监听的事件 */
  listener: EventListener
  /** 事件的参数 */
  options?: boolean | AddEventListenerOptions
  /** 自动删除 */
  autoRemove?: boolean
  /** 是否设置为防抖 */
  isDebounce?: boolean
  /** 函数等待执行时间 */
  wait?: number
}

/** 间断性事件监听 hooks */
export function useEventListener ({
  el = window,
  name,
  listener,
  options,
  autoRemove = true,
  isDebounce = true,
  wait = 500,
}: IUseEventParams): { removeEvent: () => void } {
  /** 事件所属节点 */
  const element = ref<Element>(el)

  /** 是否已添加事件 */
  const isAddRef = ref(false)

  /** 防抖节流 */
  const handler = isDebounce
    ? useDebounceFn(listener, wait)
    : useThrottleFn(listener, wait)

  /** 事件立即执行 */
  const realHandler = wait ? handler : listener

  /** 添加事件 */
  const addEventListener = (e: Element) =>
    e.addEventListener(name, realHandler, options)

  /** 移除事件 */
  const removeEventListener = (e: Element) => {
    isAddRef.value = true
    e.removeEventListener(name, realHandler, options)
  }

  /** 移除事件监听 */
  const removeWatch = watch(
    element,
    (v, _ov, cleanUp) => {
      if (v) {
        !unref(isAddRef) && addEventListener(v)

        // 如果为立即执行，则移除该事件
        cleanUp(() => {
          autoRemove && removeEventListener(v)
        })
      }
    },
    { immediate: true },
  )

  /** 移除事件 */
  const remove = () => {
    /** 防止二次触发事件，先移除上次事件 */
    removeEventListener(element.value)
    removeWatch()
  }

  return { removeEvent: remove }
}

/* // 执行案例
import { useEventListener } from 'useEventListener'
import { onBeforeUnmount } from 'vue'

const getA = (a) => {
  console.log(a)
}
const resizeFn = (params) => {
  console.log('resizeFn', params)
}
const listenerResize = useEventListener({
  el: window,
  name: 'resize',
  listener: () => {
    getA('a')
    resizeFn('b')
  },
  options: {
    once: false,
  },
  autoRemove: false,
})

onBeforeUnmount(() => {
  listenerResize.removeEvent()
}) */
