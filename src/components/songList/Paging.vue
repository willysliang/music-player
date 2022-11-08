<!--
 * @ Author: willysliang
 * @ Create Time: 2022-11-07 11:31:04
 * @ Modified by: willysliang
 * @ Modified time: 2022-11-07 14:29:45
 * @ Description: 加载更多数据组件
 -->

<script setup lang="ts">
import { computed, watchEffect } from 'vue'

type PageType = {
  /** 每页数量 */
  limit: number
  /** 当前所在页 */
  page: number
  /** 是否加载数据中 */
  loading: boolean
  /** 是否还有更多数据 */
  noMore: boolean
  /** 数据偏移量 */
  offset: number
  /** 总数 */
  total?: number
}

const props = defineProps<{
  list: any[]
  page: PageType
  getData:() => void
}>()

const emits = defineEmits(['update:page'])

const pageData = computed({
  get: () => props.page,
  set: (val) => emits('update:page', val),
})

watchEffect(() => {
  const currentTotal = pageData.value.page * pageData.value.limit

  /** 计算数据偏移量 */
  pageData.value.offset = currentTotal

  /** 当不在加载状态时，计算是否还有更多数据 */
  if (!pageData.value.loading && props.list.length < currentTotal) {
    pageData.value.noMore = true
  }
})

const loadMore = () => {
  pageData.value.page++
  props.getData()
}
</script>

<template>
  <div v-if="list?.length > 0" class="flex justify-center py-5">
    <el-button :loading="pageData.loading" text class="text-center w-full">
      <span v-if="pageData.noMore" class="tool-main">没有更多数据啦~</span>
      <span v-else class="tool-main" @click="loadMore">加载更多数据~</span>
    </el-button>
  </div>
</template>