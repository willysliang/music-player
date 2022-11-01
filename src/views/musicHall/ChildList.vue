<script setup lang="ts">
import Grandson from './Grandson.vue'
</script>

<template>
  <Grandson>
    <template #search_item="{ search }">
      <slot name="search" :search="search"></slot>
    </template>
  </Grandson>
</template>
