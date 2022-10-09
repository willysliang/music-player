<!--
 * @ Author: willysliang
 * @ Create Time: 2022-10-09 16:32:54
 * @ Modified by: willysliang
 * @ Modified time: 2022-10-09 17:29:20
 * @ Description: 歌单列表详情页 - 头部
 -->
<script setup lang="ts">
import { avactor } from '@/assets/images'
import Collapses from '@/components/common/Collapses.vue'
import IconPark from '@/components/common/IconPark.vue'
import { PlayOne, Like, More } from '@icon-park/vue-next'
import { formatDateTemp, formatQuantity } from '@/utils/format'
import { usePlayerStore } from '@/store/player'
import type { PlayListDetail } from '@/types/playlist'
import type { Song } from '@/types/song'

/***
 * 获取父组件传递过来歌单详情信息
*/
const props = defineProps<{
  playlist: PlayListDetail
  songlist: Song[]
}>()

/***
 * 播放音乐
 */
const { pushPlayList } = usePlayerStore()
const playAll = () => {
  pushPlayList(...props.songlist)
}
</script>

<template>
  <!-- 歌单列表头部信息 -->
  <div class="flex flex-row items-stretch">
    <img
      :src="playlist.coverImgUrl"
      alt="歌单封面图"
      class="w-44 h-44 object-cover rounded-xl flex-shrink-0"
    />
    <div class="flex-1 flex flex-col items-stretch box-border pl-4">
      <div class="flex flex-row">
        <span class="flex-1 text-2xl font-bold">
          {{ playlist.name }}
        </span>
      </div>

      <!-- 歌单用户信息 -->
      <div class="flex flex-row items-center">
        <el-avatar
          :src="playlist.creator?.avatarUrl || avactor"
          size="small"
          round
        />
        <span class="ml-2 py-4">
          {{ playlist.creator?.nickname || '默认用户名' }}
        </span>
        <span class="ml-2 desc-main">
          {{ formatDateTemp(new Date(playlist.createTime)) }}创建
        </span>
      </div>

      <!-- 触件 -->
      <div class="flex items-center justify-self-stretch my-2">
        <button
          class="w-40 button flex flex-row justify-between items-center px-4"
          @click="playAll"
        >
          <IconPark :icon="PlayOne" size="22" class="mr-1" />
          <span class="flex-1 text-center">播放全部</span>
          <span></span>
        </button>
        <button
          class="w-40 button-outline flex flex-row justify-between px-4 ml-4"
        >
          <IconPark :icon="Like" size="18" class="mr-1" />
          <span>收藏</span>
          <div>({{ formatQuantity(playlist.subscribedCount) }})</div>
        </button>
        <button class="button-outline w-8 flex flex-row justify-center ml-4">
          <IconPark :icon="More" />
        </button>
      </div>

      <!-- 标签 -->
      <div v-if="playlist.tags?.length > 0" class="my-2">
        <span>标签：</span>
        <span v-for="tag in playlist.tags" :key="tag" class="mr-2 hover-text">
          #{{ tag }}
        </span>
      </div>
      <div class="mb-2">
        <span>歌曲：</span>
        <span>{{ '100' }}</span>
        <span class="ml-4">播放量：</span>
        <span>{{ formatQuantity(playlist.playCount) }}</span>
      </div>

      <!-- 歌单描述 -->
      <Collapses :text="'简介：' + playlist.description" />
    </div>
  </div>
</template>
