<!--
 * @ Author: willysliang
 * @ Create Time: 2022-09-15 09:16:46
 * @ Modified by: willysliang
 * @ Modified time: 2022-10-11 09:52:55
 * @ Description: 页面大框
 -->

<script setup lang="ts">
import MyHeader from './header/index.vue'
import MyMenu from './menu/index.vue'
import MyMain from './main/index.vue'
import MyFooter from './footer/index.vue'
</script>

<template>
  <div class="layout">
    <div
      class="header w-full flex items-center justify-between box-border text-xl px-4"
    >
      <MyHeader />
    </div>
    <div class="content">
      <div class="menu">
        <my-menu />
      </div>
      <div class="main flex-1 overflow-hidden">
        <my-main />
      </div>
    </div>
    <div
      class="footer flex flex-row item-stretch justify-between items-center box-border p-1 w-full"
    >
      <my-footer />
    </div>
  </div>
</template>

<style lang="scss">
.layout {
	box-sizing: border-box;
}

/* 头部配置 */
.header {
	background-color: var(--theme-bg-color);
	color: var(--theme-color);
	height: 3.5rem;
	border-bottom: 1px solid var(--theme-border-second-color);
}

/* 主内容框配置 */
.content {
	width: 100%;
	height: calc(100vh - 3.5rem - 4.5rem);
	display: flex;
	flex-direction: row;
}

/* 菜单栏配置 */
.menu {
	width: 12rem;
	background-color: var(--theme-second-bg-color);
	box-sizing: border-box;
}

/* 可变区域配置 */
.main {
	flex: 1;
}

/* 脚部配置 */
.footer {
	background-color: var(--theme-bg-color);
	color: var(--theme-color);
	height: 4.5rem;
	border-top: 1px solid var(--theme-border-second-color);
	box-sizing: border-box;
	padding-bottom: .5rem;
}
</style>
