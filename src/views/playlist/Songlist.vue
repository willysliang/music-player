<!--
 * @ Author: willysliang
 * @ Create Time: 2022-10-09 17:47:58
 * @ Modified by: willysliang
 * @ Modified time: 2022-10-09 18:34:54
 * @ Description: 歌单列表歌曲页
 -->

<script setup lang="ts">
import type { Song } from '@/types/song'
import { first } from 'lodash'
import { formatDuring } from '@/utils/format'

defineProps<{
  songlist: Song[]
}>()
</script>

<template>
  <div class="mt-2 text-main">
    <div class="flex flex-row items-center text-xs  desc-main py-3">
      <div class="w-20 text-center">操作</div>
      <div class="flex-auto">歌曲</div>
      <div class="w-1/4">歌手</div>
      <div class="w-1/4">专辑</div>
      <div class="w-20">时长</div>
    </div>
    <div v-for="(song, index) in songlist" :key="song.id" class="hover-bg-main song-item">
      <div class="w-20">
        <span>{{ String(index + 1).padStart(2, '0') }}</span>
      </div>
      <div class="flex-auto">
        <span>{{ song.name }}</span>
      </div>
      <div class="w-1/4">
        <span>{{ first(song.ar).name }}</span>
      </div>
      <div class="w-1/4">
        <span>{{ song.al.name }}</span>
      </div>
      <div class="w-20">
        <span>{{ formatDuring(song.dt / 1000) }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.song-item {
	@apply flex flex-row items-center;
	@apply w-full text-xs box-border py-2 pl-2;

	&:nth-child(2n+1) {
		background-color: var(--theme-tab-bg-color);
	}
}
</style>
