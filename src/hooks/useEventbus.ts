/**
 * @ Author: willysliang
 * @ Create Time: 2022-12-09 17:47:39
 * @ Modified by: willysliang
 * @ Modified time: 2022-12-09 18:04:17
 * @ Description: 事件总线
 */

import { onUnmounted } from 'vue'
import mitt from 'mitt'

const emitter: mitt.Emitter = mitt()

// 自定义触发器
const customEmit = (eventName) => {
  emitter.emit(eventName)
}

// 自定义接收器
const customOn = (eventName, callback) => {
  emitter.on(eventName, () => callback())
}

// 通知刷新表格数据
const toRefreshTable = () => {
  emitter.emit('reload')
}

// 刷新表格数据
const reload = (callback) => {
  emitter.on('reload', () => callback())
}

// 通知刷新树结构数据
const toRefreshTree = () => {
  emitter.emit('refreshTree')
}

// 刷新树数据
const refreshTree = (callback) => {
  emitter.on('refreshTree', () => callback())
}

export const useEventbus = () => {
  onUnmounted(() => {
    emitter.all.clear()
  })

  return {
    customEmit,
    customOn,
    toRefreshTable,
    reload,
    toRefreshTree,
    refreshTree,
    emitter,
  }
}
