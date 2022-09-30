<script setup lang="ts">
import HeaderSearch from '@comp/layout/header/headerSearch/index.vue'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/store/app'

const { iconColor, iconSize } = storeToRefs(useAppStore())
</script>

<template>
  <div
    class="header w-full flex items-center justify-between box-border text-xl px-4"
  >
    <!-- logo 固定宽150px -->
    <div class="flex items-center w-60 h-full overflow-hidden box-border">
      <el-icon :size="iconSize + 10" :color="iconColor">
        <Headset />
      </el-icon>
      <span class="header-logo-title ml-2">MUSIC&nbsp;PLAYER</span>
    </div>

    <div class="flex items-center">
      <el-icon :size="iconSize" :color="iconColor"><ArrowLeft /></el-icon>
      <el-icon :size="iconSize" :color="iconColor"><ArrowRight /></el-icon>
    </div>

    <!-- 搜索栏 -->
    <HeaderSearch />

    <!-- 设置类 -->
    <div class="flex items-center justify-between w-48">
      <el-avatar
        :size="iconSize"
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />
      <span class="text-sm">点击登录</span>
      <el-icon :size="iconSize" :color="iconColor"><Message /></el-icon>
      <el-icon :size="iconSize" :color="iconColor"><Calendar /></el-icon>
      <el-icon :size="iconSize" :color="iconColor"><Setting /></el-icon>
    </div>
  </div>
</template>

<style scoped lang="scss">
</style>
