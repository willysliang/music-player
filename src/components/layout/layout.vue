<!--
 * @ Author: willysliang
 * @ Create Time: 2022-09-15 09:16:46
 * @ Modified by: willysliang
 * @ Modified time: 2022-10-19 19:57:10
 * @ Description: 页面大框
 -->

<script setup lang="ts">
import MyHeader from './header/index.vue'
import MyMenu from './menu/index.vue'
import MyMain from './main/index.vue'
import MyFooter from './footer/index.vue'
import { useThemeStore, ThemeLayout } from '@store/app/theme'
import { storeToRefs } from 'pinia'

const { themeLayoutCurrent } = storeToRefs(useThemeStore())
</script>

<template>
  <div class="box-border overflow-hidden flex flex-col">
    <div>
      <div
        v-if="themeLayoutCurrent === ThemeLayout.MENU_TOP"
        class="h-12 box-border"
        style="background-color: var(--theme-second-bg-color)"
      >
        <my-menu />
      </div>
    </div>
    <div
      class="header w-full flex items-center justify-between box-border text-xl px-4"
    >
      <MyHeader />
    </div>
    <div
      class="flex-1 flex flex-row w-full"
    >
      <div
        v-if="themeLayoutCurrent === ThemeLayout.MENU_SIDE"
        class="w-48 box-border"
        style="background-color: var(--theme-second-bg-color)"
      >
        <my-menu />
      </div>
      <div class="flex-1 overflow-auto">
        <my-main />
      </div>
    </div>
    <div
      class="footer flex flex-row item-stretch justify-between items-center box-border p-1 pt-2 w-full"
    >
      <my-footer />
    </div>
  </div>
</template>

<style lang="scss">
/* 头部配置 */
.header {
	background-color: var(--theme-bg-color);
	color: var(--theme-color);
	height: 3.5rem;
	border-bottom: 1px solid var(--theme-border-second-color);
}

/* 脚部配置 */
.footer {
	background-color: var(--theme-bg-color);
	color: var(--theme-color);
	height: 4.5rem;
	border-top: 1px solid var(--theme-border-second-color);
}
</style>
