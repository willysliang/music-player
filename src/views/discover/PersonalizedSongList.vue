<!--
 * @ Author: willysliang
 * @ Create Time: 2022-10-09 09:19:50
 * @ Modified by: willysliang
 * @ Modified time: 2022-10-09 13:01:11
 * @ Description: 个性化歌单
 -->

<script setup lang="ts">
import Title from '@comp/common/Title.vue'
import CoverPlay from '@/components/common/CoverPlay.vue'
import { useDiscoverStore } from '@/store/discover'
import { onBeforeMount, toRefs } from 'vue'
import { sampleSize } from 'lodash'
import { useRouter } from 'vue-router'
import type { PersonalizedSongList } from '@/types/discover'

/* 获取推荐歌单 */
const { personalizedSongList } = toRefs(useDiscoverStore())
const { getPersonalizedSongList } = useDiscoverStore()
onBeforeMount(async () => {
  await getPersonalizedSongList()
})

/* 跳转歌单详情页 */
const router = useRouter()
const navToPlayList = (song: PersonalizedSongList) => {
  router.push({
    path: 'playlist',
    query: { id: song.id },
  })
}
</script>

<template>
  <Title title="推荐歌单" />
  <div class="grids">
    <div
      v-for="song in sampleSize(personalizedSongList, 15)"
      :key="song.id"
      @click="navToPlayList(song)"
    >
      <CoverPlay
        :pic-url="song.picUrl"
        :name="song.name"
        :play-count="song.playCount"
        show-play-count
      />
    </div>
  </div>
</template>

<style lang="scss">
.grids {
	display: grid;
	grid-auto-flow: row;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	gap: 1.25rem;

	@media (min-width: 1024px) {
		grid-template-columns: repeat(5, minmax(0, 1fr));
	}

	@media (min-width: 1536px) {
		grid-template-columns: repeat(10, minmax(0, 1fr));
	}
}
</style>
