<!--
 * @ Author: willysliang
 * @ Create Time: 2022-10-31 17:15:11
 * @ Modified by: willysliang
 * @ Modified time: 2022-12-05 17:55:46
 * @ Description: 测试组件
 -->

<script setup lang="ts">
import Basics from './Basics.vue'
import { useEventListener } from '@/hooks/event/useEventListener'
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
})
</script>

<template>
  <div>ahasjk</div>
  <Basics />
</template>
