<!--
 * @ Author: willysliang
 * @ Create Time: 2022-10-09 09:19:50
 * @ Modified by: willysliang
 * @ Modified time: 2022-10-09 12:04:41
 * @ Description: 个性化歌单
 -->

<script setup lang="ts">
import Title from '@comp/common/Title.vue'
import CoverPlay from '@/components/common/CoverPlay.vue'
import { useDiscoverStore } from '@/store/discover'
import { onBeforeMount, toRefs } from 'vue'
import { sampleSize } from 'lodash'

/* 获取推荐歌单 */
const { personalizedSongList } = toRefs(useDiscoverStore())
const { getPersonalizedSongList } = useDiscoverStore()
onBeforeMount(async () => {
  await getPersonalizedSongList()
})
</script>

<template>
  <Title title="推荐歌单" />
  <div class="grids">
    <div v-for="songlist in sampleSize(personalizedSongList, 15)" :key="songlist.id">
      <CoverPlay
        :pic-url="songlist.picUrl"
        :name="songlist.name"
        :play-count="songlist.playCount"
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
