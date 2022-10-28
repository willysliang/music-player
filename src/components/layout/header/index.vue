<!--
 * @ Author: willysliang
 * @ Create Time: 2022-10-10 09:05:41
 * @ Modified by: willysliang
 * @ Modified time: 2022-10-28 11:46:38
 * @ Description: 页面布局头部
 -->

<script setup lang="ts">
import HeaderSearch from '@comp/layout/header/headerSearch/index.vue'
import UserInfo from '@comp/layout/header/userInfo/index.vue'
import HeaderSetting from './headerSetting/index.vue'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/store/app'
import { useThemeStore } from '@store/app/theme'
import HeaderLocale from './headerLocale/index.vue'

const { iconColor, iconSize } = storeToRefs(useAppStore())
const { drawer } = storeToRefs(useThemeStore())
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
    <UserInfo />
    <el-tooltip :content="$t('layout.header.tooltipLock')" placement="bottom">
      <el-icon :size="iconSize" :color="iconColor"><Lock /></el-icon>
    </el-tooltip>

    <el-icon :size="iconSize" :color="iconColor"><Message /></el-icon>
    <el-icon :size="iconSize" :color="iconColor"><Calendar /></el-icon>

    <!-- 语言设置 -->
    <HeaderLocale />

    <el-icon :size="iconSize" :color="iconColor" @click="drawer = true">
      <Setting />
    </el-icon>
  </div>

  <HeaderSetting />
</template>

<style scoped lang="scss"></style>
