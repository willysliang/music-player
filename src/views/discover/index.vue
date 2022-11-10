<script lang="ts" setup>
import Banner from './Banner.vue'
import PersonalizedSongList from './PersonalizedSongList.vue'
import PersonalizedNewSong from './PersonalizedNewSong.vue';
</script>

<template>
  <div class="text-3xl py-4 font-bold">推荐</div>

  <!-- 轮播图 -->
  <Banner />

  <!-- 个性化歌单 -->
  <PersonalizedSongList />

  <!-- 推荐新音乐 -->
  <PersonalizedNewSong />
</template>
