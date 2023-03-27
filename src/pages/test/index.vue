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
import { onMounted, ref, reactive, computed, watch, onBeforeMount } from 'vue'
import { cloneDeep } from 'lodash'
import { useRouter } from 'vue-router';
// import VirtualList from './VirtualList.vue'

const add = () => {
  console.log('add')
}

/* const data = ref<Array<any>>([])
for (let i = 1; i <= 1000000; i++) {
  data.value.push({
    id: i,
    value: '字符内容'.repeat(Math.random() * 100),
  })
} */

const ShellSort = function (arr: Array<number>) {
  // 动态定义间隔序列
  let gap = arr.length <= 2 ? 1 : Math.floor(arr.length / 2)
  for (gap; gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < arr.length; i++) {
      const temp = arr[i]
      let j = i - gap
      for (j; j >= 0 && arr[j] > temp; j -= gap) {
        arr[j + gap] = arr[j]
      }
      arr[j + gap] = temp
    }
  }
  console.log(arr)
  return arr
}

ShellSort([2, 5, 2, 1, 4, 7, 9, 4, 9, 3, 5, 8, 7])
</script>

<template>
  <div>按钮</div>

  <!--  <VirtualList :list-data="data">
    <template #default="{ listItem }">
      <div> <span class="text-red-600">{{ listItem.idx }}</span> {{ listItem.value }}</div>
    </template>
  </VirtualList> -->
</template>
