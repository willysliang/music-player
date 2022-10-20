<script setup lang="ts">
import IconPark from '@comp/common/IconPark.vue'
import { useMenuHooks, menuList } from './MenuHooks'

const { handleMenuSelect, currentMenuKey, themeLayoutIsVertical } =
  useMenuHooks()
</script>

<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="rgb(0, 21, 41)"
    :default-active="currentMenuKey"
    :unique-opened="!themeLayoutIsVertical"
    text-color="#fff"
    :mode="themeLayoutIsVertical ? 'vertical' : 'horizontal'"
    :collapse-transition="false"
    :class="[
      'menus',
      themeLayoutIsVertical ? 'overflow-x-hidden' : 'overflow-y-hidden',
    ]"
    @select="handleMenuSelect"
  >
    <el-sub-menu
      v-for="menuItem in menuList"
      :key="menuItem.key"
      :index="menuItem.name"
    >
      <template #title>{{ menuItem.title }}</template>
      <el-menu-item
        v-for="menu in menuItem.children"
        :key="menu.key"
        :index="menu.name"
      >
        <IconPark :icon="menu.icon" size="18" :theme="menu.theme" />
        <span class="pl-2">{{ menu.title }}</span>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<style scoped lang="scss">
.active {
	@apply bg-gradient-to-r from-teal-400 to-emerald-400 text-slate-50 cursor-default;
}

.menus {
	height: 100%;
	width: 100%;

	&::-webkit-scrollbar {
		width: 4px;
	}

	/* 滚动条 */
	&::-webkit-scrollbar-thumb {
		box-sizing: border-box;
		border-radius: 10px;
		box-shadow: inset 0 0 5px rgb(0 0 0 / 20%);
		background: #ccc;
	}

	/* 滚动条框 */
	&::-webkit-scrollbar-track {
		box-shadow: inset 0 0 5px rgb(0 0 0 / 20%);
		border-radius: 0;
		background: rgb(63 52 52);
		box-sizing: border-box;
	}
}
</style>
