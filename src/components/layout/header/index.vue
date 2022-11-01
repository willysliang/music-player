<!--
 * @ Author: willysliang
 * @ Create Time: 2022-10-10 09:05:41
 * @ Modified by: willysliang
 * @ Modified time: 2022-11-01 10:03:52
 * @ Description: 页面布局头部
 -->

<script setup lang="ts">
import HeaderSearch from '@comp/layout/header/headerSearch/index.vue'
import UserInfo from '@comp/layout/header/userInfo/index.vue'
import HeaderSetting from './headerSetting/index.vue'
import { LockScreen } from './lockscreen'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/store/app'
import { useThemeStore } from '@store/app/theme'
import HeaderLocale from './headerLocale/index.vue'
import { Lock } from '@icon-park/vue-next'

const { iconColor, iconSize, isLock } = storeToRefs(useAppStore())
const { setLockscreen } = useAppStore()
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
      <IconPark
        :icon="Lock"
        size="22"
        :stroke-width="3"
        class="hover-text mx-2"
        @click="setLockscreen(!isLock)"
      />
    </el-tooltip>

    <el-icon :size="iconSize" :color="iconColor"><Message /></el-icon>
    <el-icon :size="iconSize" :color="iconColor"><Calendar /></el-icon>

    <!-- 语言设置 -->
    <HeaderLocale />

    <el-icon :size="iconSize" :color="iconColor" @click="drawer = true">
      <Setting />
    </el-icon>
  </div>

  <!-- 个性化主题设置弹层 -->
  <HeaderSetting />

  <!-- 锁屏界面 -->
  <LockScreen />
</template>
