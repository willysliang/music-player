<!--
 * @ Author: willysliang
 * @ Create Time: 2023-03-21 23:34:10
 * @ Modified by: willysliang
 * @ Modified time: 2023-04-10 15:30:38
 * @ Description: 页面主入口
 -->

<script setup lang="ts">
import { usePlayerInit } from '@/store/player'
import { useLocaleHook } from '@/locales/useLocaleHook'
import { useRouteCache } from '@/hooks/useRouteCache'
import { demoPages } from './pages/constant'

/** 音乐播放初始化 */
usePlayerInit()

/** 路由缓存 */
const { caches, addCache } = useRouteCache()
addCache(demoPages.TEST.name)

/** 获取 ElementUI 语言 */
const { getElLocale } = useLocaleHook()
</script>

<template>
  <el-config-provider :locale="getElLocale">
    <router-view v-slot="{ Component }">
      <keep-alive :include="[...caches, demoPages.TEST.name]">
        <transition name="fade" :duration="{ enter: 500, leave: 800 }">
          <component :is="Component" />
        </transition>
      </keep-alive>
    </router-view>
  </el-config-provider>
</template>

<style lang="scss">
// 开始过度
.fade-enter-from {
	background-color: red;
	width: 0;
	height: 0;
	transform: rotate(360deg);
}

// 开始过度了
.fade-enter-active {
	transition: all 2.5s linear;
}

// 过度完成
.fade-enter-to {
	background-color: yellow;
	width: 200px;
	height: 200px;
}

// 离开的过度
.fade-leave-from {
	width: 200px;
	height: 200px;
	transform: rotate(360deg);
}

// 离开中过度
.fade-leave-active {
	transition: all 1s linear;
}

// 离开完成
.fade-leave-to {
	width: 0;
	height: 0;
}
</style>
