<!-- eslint-disable prefer-const -->
<!-- eslint-disable n/no-callback-literal -->
<!-- eslint-disable no-unmodified-loop-condition -->
<!-- eslint-disable @typescript-eslint/no-empty-function -->
<!-- eslint-disable brace-style -->
<!-- eslint-disable @typescript-eslint/no-non-null-assertion -->
<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<!--
 * @ Modified by: willysliang
 * @ Modified time: 2023-02-15 17:30:11
 * @ Modified by: willysliang
 * @ Modified time: 2023-02-14 13:40:32
 * @ Description: 测试组件
 -->
<script setup lang="ts">
import { onMounted, ref, reactive, computed, watch } from 'vue'
import { cloneDeep } from 'lodash'
// import VirtualList from './VirtualList.vue'

const add = () => {
  console.log('add')
}

const data = ref<Array<any>>([])
for (let i = 1; i <= 1000000; i++) {
  data.value.push({
    id: i,
    value: '字符内容'.repeat(Math.random() * 100),
  })
}

const handleFetchQueue = (
  urls: string[],
  max: number,
  callback: (_: any) => void,
) => {
  const urlCount = urls.length
  const requestsQueue: Array<any> = []
  const results: Array<any> = []
  let i = 0
  const handleRequest = (url) => {
    const req = fetch(url)
      .then((res) => {
        console.log('当前并发：' + requestsQueue)
        const len = results.push(res)
        if (len < urlCount && i + 1 < urlCount) {
          requestsQueue.shift()
          handleRequest(urls[++i])
        } else if (len === urlCount) {
          typeof callback === 'function' && callback(results)
        }
      })
      .catch((e) => {
        results.push(e)
      })
    if (requestsQueue.push(req) < max) {
      handleRequest(urls[++i])
    }
  }
  handleRequest(urls[i])
}

const urls = Array.from({ length: 10 }, (v, k) => k.toString())

const fetch = function (idx) {
  return new Promise((resolve) => {
    console.log(`start request ${idx}`)
    const timeout = Number.parseInt((Math.random() * 1e4).toFixed(0))
    setTimeout(() => {
      console.log(`end request ${idx}`)
      resolve(idx)
    }, timeout)
  })
}

const max = 4

const callback = () => {
  console.log('run callback')
}

handleFetchQueue(urls, max, callback)
</script>

<template>
  <div class="fill"></div>

  <!--  <VirtualList :list-data="data">
    <template #default="{ listItem }">
      <div> <span class="text-red-600">{{ listItem.idx }}</span> {{ listItem.value }}</div>
    </template>
  </VirtualList> -->
</template>
