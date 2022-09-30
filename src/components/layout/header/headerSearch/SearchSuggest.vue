<template>
  <template v-if="suggestData?.order?.length > 0">
    <div v-for="order in suggestData.order" :key="order">
      <div class="p-2 flex items-center">
        <el-icon>
          <Bicycle v-if="order === 'songs'" />
          <Avatar v-else-if="order === 'artists'" />
          <Monitor v-else-if="order === 'albums'" />
          <TakeawayBox v-else-if="order === 'playlists'" />
        </el-icon>
        <span class="ml-1">{{ getTitle(order) }}</span>
      </div>

      <!-- 单曲 -->
      <template v-if="suggestData?.songs?.length > 0 && order === 'songs'">
        <div
          v-for="item in suggestData.songs"
          :key="item.id"
          class="py-1.5 px-2.5 hover-bg-main text-xs cursor-pointer"
        >
          <span class="text-active">{{ item.name }}</span>
          <span class="pl-1"> - {{ first(item.artists)?.name }}</span>
        </div>
      </template>

      <!-- 专辑 -->
      <template v-if="suggestData?.albums?.length > 0 && order === 'albums'">
        <div
          v-for="item in suggestData.albums"
          :key="item.id"
          class="py-1.5 px-2.5 hover-bg-main text-xs cursor-pointer"
        >
          <span class="text-active">{{ item.name }}</span>
          <span class="pl-1"> - {{ item.artist.name }}</span>
        </div>
      </template>

      <!-- 歌手 -->
      <template v-if="suggestData?.artists?.length > 0 && order === 'artists'">
        <div
          v-for="item in suggestData.artists"
          :key="item.id"
          class="py-1.5 px-2.5 hover-bg-main text-xs cursor-pointer flex items-center"
        >
          <el-avatar size="small" :src="item.img1v1Url" />
          <span class="text-active ml-2">{{ item.name }}</span>
        </div>
      </template>

      <!-- 歌单 -->
      <template
        v-if="suggestData?.playlists?.length > 0 && order === 'playlists'"
      >
        <div
          v-for="item in suggestData.playlists"
          :key="item.id"
          class="py-1.5 px-2.5 hover-bg-main text-xs cursor-pointer flex items-center"
        >
          <el-avatar size="small" :src="item.coverImgUrl" />
          <div class="text-active ml-2 truncate flex-1 w-1">
            {{ item.name }}
          </div>
        </div>
      </template>
    </div>
  </template>
</template>

<script setup lang="ts">
import { first } from 'lodash'
import type { SearchSuggest } from '@/types/search'

defineProps<{
  suggestData: SearchSuggest
}>()

const getTitle = (name: string) => {
  switch (name) {
    case 'songs':
      return '单曲'
    case 'albums':
      return '专辑'
    case 'artists':
      return '歌手'
    case 'playlists':
      return '歌单'
    default:
      return name
  }
}
</script>

<style lang="scss"></style>
