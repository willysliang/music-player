<!--
 * @ Author: willysliang
 * @ Create Time: 2022-10-11 10:16:36
 * @ Modified by: willysliang
 * @ Modified time: 2022-10-11 16:17:35
 * @ Description: 歌手详情 -> 歌曲列表模块
 -->
<script setup lang="ts">
import IconPark from '@comp/common/IconPark.vue'
import { PlayOne, Download, FullSelection } from '@icon-park/vue-next'
import { computed, reactive, ref, watch } from 'vue'
import { usePlayerStore } from '@store/player'
import type { Song } from '@/types/song'
import SongList from '@comp/songList/SongList.vue'
import { useArtistSongs } from '@api/artist'

const props = defineProps<{ id: number }>()

/***
 * 歌曲分次加载
 */
const pageData = reactive({
  order: 'hot',
  limit: 20,
  page: 1,
  loading: false,
  noMore: false,
})
/* 计算当前获取的歌曲偏移度 */
const offset = computed(() => {
  if (pageData.page === 1) return 0
  return (songlist.value?.length || 0) + pageData.limit
})

/***
 * 获取歌曲列表
 * - 动态监听路由参数中id 的变化，来重新请求
 */
const songlist = ref<Song[]>([] as Song[])
const getData = async () => {
  pageData.loading = true
  try {
    const songs = await useArtistSongs(
      props.id,
      pageData.order,
      pageData.limit,
      offset.value,
    )
    if (pageData.page === 1) songlist.value = songs
    else songlist.value.push(...songs)
    pageData.loading = false
  } catch {
    pageData.page--
    pageData.loading = false
  }
}
watch(() => props.id, getData, { immediate: true, deep: true })

/***
 * 播放全部
 */
const { playAll } = usePlayerStore()

/***
 * 歌曲排序
 */
const setOrder = (order: string) => {
  pageData.page = 1
  pageData.order = order
  getData()
}
</script>

<template>
  <!-- 歌曲列表 - 操作栏 -->
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
    <div class="gap-x-5 flex mr-10 text-xs">
      <div
        class="hover-text"
        :class="{ 'tool-main': pageData.order === 'hot' }"
        @click="setOrder('hot')"
      >
        最热
      </div>
      <div
        class="hover-text"
        :class="{ 'tool-main': pageData.order === 'time' }"
        @click="setOrder('time')"
      >
        最新
      </div>
    </div>
  </div>

  <!-- 歌曲列表 -->
  <SongList :songlist="songlist" />
</template>

<style scoped lang="scss">
.tool-button {
	@apply w-28  text-xs;
	@apply flex flex-row items-center justify-around;
}
</style>
