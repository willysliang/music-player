<!--
 * @ Author: willysliang
 * @ Create Time: 2022-10-09 12:47:43
 * @ Modified by: willysliang
 * @ Modified time: 2022-10-09 17:29:44
 * @ Description: 歌单列表详情页
 -->
<script setup lang="ts">
import PlayListInfo from './playlistInfo.vue'
import type { PlayListDetail } from '@/types/playlist'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { usePlayListDetail, usePlayListTrackAll } from '@/api/module/playlist'
import { Song } from '@/types/song'

/***
 * 歌单列表详情
 * - 获取路由上传递的ID来获取相应的歌单详情数据
 */
const route = useRoute()
const playlist = ref<PlayListDetail>({} as PlayListDetail) // 歌单详情信息
const songlist = ref<Song[]>([] as Song[])
const getData = async () => {
  if (typeof route.query?.id === 'string') {
    const id: number = Number.parseInt(route.query.id)
    playlist.value = await usePlayListDetail(id)
    songlist.value = await usePlayListTrackAll(id)
  }
}
getData()
</script>

<template>
  <!-- 歌单列表头部信息 -->
  <PlayListInfo :playlist="playlist" :songlist="songlist" />
</template>
