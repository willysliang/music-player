<!--
 * @ Author: willysliang
 * @ Create Time: 2022-11-09 09:54:30
 * @ Modified by: willysliang
 * @ Modified time: 2022-11-09 10:08:30
 * @ Description: 歌曲列表操作栏
 -->

<script setup lang="ts">
import IconPark from '@comp/common/IconPark.vue'
import { PlayOne, Download, FullSelection } from '@icon-park/vue-next'
import { usePlayerStore } from '@store/player'
import type { Song } from '@/types/song'
import { computed } from 'vue'

type OrderType = 'time' | 'hot'

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
  /** 排序 */
  order?: OrderType
}

const props = defineProps<{
  /** 歌曲列表 */
  songlist: Song[]
  /** 分页 */
  page?: PageType
  /** 获取数据接口 */
  getData:() => void
  /** 是否歌曲排序 */
  isOrder: boolean
}>()

/** 播放全部 */
const { playAll } = usePlayerStore()

const emits = defineEmits(['update:page'])
const pageData = computed({
  get: () => props.page,
  set: (val) => emits('update:page', val),
})

/** 歌曲排序 */
const setOrder = (order: OrderType) => {
  if (pageData.value?.order && pageData.value?.page) {
    pageData.value.page = 1
    pageData.value.order = order
    props.getData()
  }
}
</script>

<template>
  <div class="mt-2 flex items-center justify-between">
    <div class="flex gap-x-2">
      <button class="button-outline tool-button" @click="playAll(songlist)">
        <IconPark :icon="PlayOne" class="mr-1" size="14" />
        <span>播放全部</span>
        <span></span>
      </button>
      <button class="button-outline tool-button">
        <IconPark :icon="Download" class="mr-1" size="12" />
        <span>下载</span>
        <span></span>
      </button>
      <button class="button-outline tool-button">
        <IconPark :icon="FullSelection" class="mr-1" size="12" />
        <span>批量操作</span>
        <span></span>
      </button>
    </div>
    <div v-if="isOrder" class="gap-x-5 flex mr-10 text-xs">
      <div
        class="hover-text"
        :class="{ 'tool-main': pageData?.order && pageData.order === 'hot' }"
        @click="setOrder('hot')"
      >
        最热
      </div>
      <div
        class="hover-text"
        :class="{ 'tool-main': pageData?.order && pageData.order === 'time' }"
        @click="setOrder('time')"
      >
        最新
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.tool-button {
	@apply w-28  text-xs;
	@apply flex flex-row items-center justify-around;
}
</style>
