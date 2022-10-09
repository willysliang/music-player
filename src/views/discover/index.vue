<script lang="ts" setup>
import Banner from './Banner.vue'
import PersonalizedSongList from './PersonalizedSongList.vue';
</script>

<template>
  <div class="p-5 box-border">
    <div class="text-3xl py-4 font-bold">推荐</div>

    <!-- 轮播图 -->
    <Banner />

    <!-- 个性化歌单 -->
    <PersonalizedSongList />
  </div>
</template>

<style lang="scss"></style>
