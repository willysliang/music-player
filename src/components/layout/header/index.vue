<!--
 * @ Author: willysliang
 * @ Create Time: 2022-10-10 09:05:41
 * @ Modified by: willysliang
 * @ Modified time: 2022-11-04 15:21:58
 * @ Description: 页面布局头部
 -->

<script setup lang="ts">
import HeaderSearch from '@comp/layout/header/headerSearch/index.vue'
import UserInfo from '@comp/layout/header/userInfo/index.vue'
import { HeaderFullScreen } from './HeaderFullScreen'
import { LockScreen } from './lockscreen'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/store/app'
import { HeaderLocale } from './headerLocale'
import { HeaderThemeSetting } from './headerThemeSetting'

const { iconColor, iconSize } = storeToRefs(useAppStore())
</script>

<template>
  <div class="flex items-center">
    <el-icon :size="iconSize" :color="iconColor"><ArrowLeft /></el-icon>
    <el-icon :size="iconSize" :color="iconColor"><ArrowRight /></el-icon>
  </div>

  <!-- 搜索栏 -->
  <HeaderSearch />

  <!-- 设置类 -->
  <div class="flex items-center justify-between w-48">
    <!-- 用户登录 -->
    <UserInfo />

    <!-- 锁屏 -->
    <LockScreen />

    <el-icon :size="iconSize" :color="iconColor"><Message /></el-icon>
    <el-icon :size="iconSize" :color="iconColor"><Calendar /></el-icon>

    <!-- 语言设置 -->
    <HeaderLocale />

    <!-- 屏幕缩放 -->
    <HeaderFullScreen />

    <!-- 主题设置 -->
    <HeaderThemeSetting />
  </div>
</template>
