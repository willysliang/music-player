<!--
 * @ Author: willysliang
 * @ Create Time: 2022-10-31 17:15:11
 * @ Modified by: willysliang
 * @ Modified time: 2023-01-05 17:46:28
 * @ Description: 测试组件
 -->

<script setup lang="ts">
import { onMounted } from 'vue'

const test = () => {
  // worker.value = new Worker('./1.js')
  // worker.value.postMessage("hello world")
  // worker.value.postMessage({ method: 'echo', args: ['Worker'] })
}

onMounted(() => {
  // 主线程
  const worker = new Worker('./worker.js')
  const uInt8Array = new Uint8Array(new ArrayBuffer(10))
  for (let i = 0; i < uInt8Array.length; ++i) {
    uInt8Array[i] = i * 2 // [0, 2, 4, 6, ...]
  }
  worker.postMessage(uInt8Array)

  worker.onmessage = e => {
    console.log(e.data)
  }
})
</script>

<template>
  <el-button @click="test">按钮</el-button>
</template>
