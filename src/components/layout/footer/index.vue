<script setup lang="ts">
import PlayerSlider from './PlayerSlider.vue'
</script>

<template>
  <div
    class="footer flex flex-row item-stretch items-center justify-between px-1 w-full"
  >
    <div class="flex w-1/3">
      <img
        alt="专辑图片"
        class="w-12 h-12 rounded"
        src="@/assets/images/avactor.jpg"
      />
      <div class="flex flex-col justify-around pl-2">
        <span>后来(Live)</span>
        <span>刘若英</span>
      </div>
    </div>
    <PlayerSlider />
    <div class="w-1/3 flex flex-row justify-around items-center">
      <span>标准</span>
    </div>
  </div>
</template>

<style lang="scss">
</style>
