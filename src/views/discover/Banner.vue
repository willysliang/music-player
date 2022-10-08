<!--
 * @ Author: willysliang
 * @ Create Time: 2022-10-08 18:26:12
 * @ Modified by: willysliang
 * @ Modified time: 2022-10-08 19:08:57
 * @ Description: 推荐页的轮播图
 -->

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { useDiscoverStore } from '@/store/discover'
import { usePlayerStore } from '@/store/player'
import { onBeforeMount, toRefs } from 'vue'
import type { Banner } from '@/types/discover'

/***
 * 获取轮播图数据
 */
const { banners } = toRefs(useDiscoverStore())
const { getBanners } = useDiscoverStore()
onBeforeMount(async () => {
  await getBanners()
})

/***
 * 通过轮播图数据进行播放音乐
 */
const { getPlay } = usePlayerStore()
const handlePlayer = (banner: Banner) => {
  getPlay(banner.targetId)
}
</script>

<template>
  <Swiper :slides-per-view="3" :space-between="50">
    <swiper-slide v-for="banner in banners" :key="banner.targetId">
      <img
        :src="banner.imageUrl"
        :alt="banner.typeTitle || '轮播图'"
        @click="handlePlayer(banner)"
      />
    </swiper-slide>
  </Swiper>
</template>

<style lang="scss"></style>
