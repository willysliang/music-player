<script setup lang="ts">
import PlayerSongInfo from './PlayerSongInfo.vue'
import PlayerController from './PlayerController.vue'
import PlayerAction from './PlayerAction.vue';
</script>

<template>
  <div
    class="footer flex flex-row item-stretch justify-between items-center box-border p-1 w-full"
  >
    <PlayerSongInfo />
    <PlayerController />
    <PlayerAction />
  </div>
</template>

<style lang="scss"></style>
