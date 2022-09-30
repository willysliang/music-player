<script setup lang="ts">
import { useAppStore } from '@/store/app'

const { iconSize } = useAppStore()
</script>

<template>
  <el-avatar
    :size="iconSize"
    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
  />
  <span class="text-sm">点击登录</span>
</template>
