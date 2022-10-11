<!--
 * @ Author: willysliang
 * @ Create Time: 2022-10-09 12:47:43
 * @ Modified by: willysliang
 * @ Modified time: 2022-10-11 18:03:22
 * @ Description: 歌单列表详情页
 -->
<script setup lang="ts">
import PlayListInfo from './PlaylistInfo.vue'
import SongList from '@/components/songList/SongList.vue'
import type { PlayListDetail } from '@/types/playlist'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { usePlayListDetail, usePlayListTrackAll } from '@/api/module/playlist'
import { Song } from '@/types/song'

/***
 * 歌单列表详情
 * - 获取路由上传递的ID来获取相应的歌单详情数据
 */
const route = useRoute()
const playlist = ref<PlayListDetail>({} as PlayListDetail) // 歌单详情信息
const songlist = ref<Song[]>([] as Song[]) // 歌曲列表
const getData = async () => {
  /* 对route传递的参数进行断言 & 获取 */
  const id: number = Number.parseInt((route.query?.id || 0) as string)
  try {
    playlist.value = await usePlayListDetail(id)
    songlist.value = await usePlayListTrackAll(id)
  } catch {}
}
watch(() => route.query.id, getData, { immediate: true, deep: true })

/***
 * 歌单列表详情
 */
const tab = ref<string>('tracks')
</script>

<template>
  <!-- 歌单列表头部信息 -->
  <PlayListInfo :songlist="songlist" :playlist="playlist" />

  <!-- 歌单列表详情 -->
  <el-tabs v-model="tab" class="mt-3">
    <el-tab-pane lazy :label="`歌曲 ${songlist.length}`" name="tracks">
      <SongList :songlist="songlist" />
    </el-tab-pane>
    <el-tab-pane lazy label="评论" name="comments" />
  </el-tabs>
</template>

<style lang="scss" scoped></style>
