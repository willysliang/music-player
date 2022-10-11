<!--
 * @ Author: willysliang
 * @ Create Time: 2022-10-11 09:22:06
 * @ Modified by: willysliang
 * @ Modified time: 2022-10-11 11:33:02
 * @ Description: 歌手详情列表
 -->
<script setup lang="ts">
import ArtistInfo from './ArtistInfo.vue'
import ArtistSongs from './ArtistSongs.vue'
import ArtistAlbum from './ArtistAlbum.vue'
import ArtistVideo from './ArtistVideo.vue'
import { useArtistDetail } from '@/api/module/artist'
import type { ArtistDetail } from '@/types/artist'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { playlistType } from '@/config/constant'

/***
 * 获取歌手详情信息
 */
const route = useRoute()
const id: number = Number(route.query?.id || 0) as number
const artistData = ref<ArtistDetail>({} as ArtistDetail)
const getData = async () => {
  artistData.value = await useArtistDetail(id)
}
getData()

/***
 * 控制模块切换
 */
const tab = ref<string>('music')
</script>

<template>
  <ArtistInfo
    :type="playlistType.ARTIST.key"
    :detail-data="artistData"
    :cover-img="artistData.artist?.cover || ''"
    :title="artistData.artist?.name || ''"
    :music-size="artistData.artist?.musicSize || 0"
    :album-size="artistData.artist?.albumSize || 0"
    :mv-size="artistData.artist?.mvSize || 0"
    :description="artistData.artist?.briefDesc || ''"
  />

  <el-tabs v-model="tab" class="mt-3">
    <el-tab-pane lazy label="精选" name="choice"></el-tab-pane>
    <el-tab-pane
      lazy
      :label="`歌曲 ${artistData.artist?.musicSize || 0}`"
      name="music"
    >
      <ArtistSongs :id="id" />
    </el-tab-pane>
    <el-tab-pane
      lazy
      :label="`专辑 ${artistData.artist?.albumSize || 0}`"
      name="album"
    >
      <ArtistAlbum :id="id" />
    </el-tab-pane>
    <el-tab-pane
      lazy
      :label="`视频 ${artistData.artist?.mvSize || 0}`"
      name="mv"
    >
      <ArtistVideo :id="id" />
    </el-tab-pane>
    <el-tab-pane lazy label="歌手详情" name="desc">
      <div v-html="artistData.artist?.briefDesc || ''"></div>
    </el-tab-pane>
  </el-tabs>
</template>
