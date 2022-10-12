<!--
 * @ Author: willysliang
 * @ Create Time: 2022-10-11 10:16:36
 * @ Modified by: willysliang
 * @ Modified time: 2022-10-12 09:39:37
 * @ Description: 歌手详情 -> 歌曲列表模块
 -->
<script setup lang="ts">
import IconPark from '@comp/common/IconPark.vue'
import { PlayOne, Download, FullSelection } from '@icon-park/vue-next'
import { computed, reactive, ref, watch, watchEffect } from 'vue'
import { usePlayerStore } from '@store/player'
import type { Song } from '@/types/song'
import SongList from '@comp/songList/SongList.vue'
import { useArtistSongs } from '@api/artist'

const props = defineProps<{ id: number }>()

/***
 * 歌曲分次加载
 */
const pageData = reactive({
  order: 'hot', // 类别
  limit: 20, // 分页数量
  page: 1, // 当前所在页
  loading: false, // 加载更多时触发的判定
  noMore: false, // 是否还能加载更多
  total: 0, // 歌曲总数
})
/* 计算当前获取的歌曲偏移度 */
const offset = computed(() => {
  if (pageData.page === 1) return 0
  return (songlist.value?.length || 0) + pageData.limit
})
/***
 * 判定是否还能加载更多歌曲
 * - 若歌曲总数小于当前可容纳的歌曲数，则无法触发加载更多
 */
watchEffect(() => {
  if (pageData.total <= pageData.limit * pageData.page) {
    pageData.noMore = true
  } else {
    pageData.noMore = false
  }
  console.log(
    'more',
    pageData.total,
    pageData.limit * pageData.page,
    pageData.noMore,
  )
})

/***
 * 获取歌曲列表
 * - 动态监听路由参数中id 的变化，来重新请求
 */
const songlist = ref<Song[]>([] as Song[])
const getData = async () => {
  pageData.loading = true
  try {
    const { songs, total } = await useArtistSongs(
      props.id,
      pageData.order,
      pageData.limit,
      offset.value,
    )
    /* 歌曲列表的赋值 */
    if (pageData.page === 1) {
      // 若为第一页的请求，则直接赋值到歌曲列表，并获取该歌手所拥有歌曲总数
      songlist.value = songs
      pageData.total = total || 0
    } else {
      // 若为非第一页的请求，则添加到歌曲列表后面
      songlist.value.push(...songs)
    }

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

/***
 * 加载请求更多数据
 */
const loadMore = () => {
  pageData.page++
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

  <!-- 加载更多 -->
  <div v-if="songlist?.length > 0" class="flex justify-center py-5">
    <el-button :loading="pageData.loading" text class="text-center w-full">
      <span v-if="pageData.noMore" class="tool-main">没有更多歌曲啦~</span>
      <span v-else class="tool-main" @click="loadMore">加载更多</span>
    </el-button>
  </div>
</template>

<style scoped lang="scss">
.tool-button {
	@apply w-28  text-xs;
	@apply flex flex-row items-center justify-around;
}
</style>
