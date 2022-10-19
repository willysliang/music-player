<!--
 * @ Author: willysliang
 * @ Create Time: 2022-10-10 09:05:41
 * @ Modified by: willysliang
 * @ Modified time: 2022-10-19 09:36:06
 * @ Description: 页面布局头部
 -->

<script setup lang="ts">
import HeaderSearch from '@comp/layout/header/headerSearch/index.vue'
import UserInfo from '@comp/layout/header/userInfo/index.vue'
import HeaderSetting from './headerSetting/index.vue'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/store/app'
import { useThemeStore } from '@store/app/theme'

const { iconColor, iconSize, logoName } = storeToRefs(useAppStore())
const { drawer } = storeToRefs(useThemeStore())
</script>

<template>
  <!-- logo 固定宽120px -->
  <div class="flex items-center w-48 h-full overflow-hidden box-border">
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
    <el-icon :size="iconSize" :color="iconColor" @click="drawer = true"
      ><Setting
    /></el-icon>
  </div>

  <HeaderSetting />
</template>

<style scoped lang="scss"></style>
