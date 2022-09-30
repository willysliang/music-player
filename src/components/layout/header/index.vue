<script setup lang="ts">
import HeaderSearch from '@comp/layout/header/headerSearch/index.vue'
import UserInfo from '@comp/layout/header/userInfo/index.vue'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/store/app'

const { iconColor, iconSize, logoName } = storeToRefs(useAppStore())
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
      <span class="header-logo-title ml-2">{{ logoName }}</span>
    </div>

    <div class="flex items-center">
      <el-icon :size="iconSize" :color="iconColor"><ArrowLeft /></el-icon>
      <el-icon :size="iconSize" :color="iconColor"><ArrowRight /></el-icon>
    </div>

    <!-- 搜索栏 -->
    <HeaderSearch />

    <!-- 设置类 -->
    <div class="flex items-center justify-between w-48">
      <UserInfo />
      <el-icon :size="iconSize" :color="iconColor"><Message /></el-icon>
      <el-icon :size="iconSize" :color="iconColor"><Calendar /></el-icon>
      <el-icon :size="iconSize" :color="iconColor"><Setting /></el-icon>
    </div>
  </div>
</template>

<style scoped lang="scss">
</style>
