<script setup lang="ts">
import IconPark from '@comp/common/IconPark.vue'
import { useMixinMenu } from './mixinMenu'

const { menuList, currentMenuKey, handleMenuSelect } = useMixinMenu()
</script>

<template>
  <el-scrollbar>
    <div v-for="menuItem in menuList" :key="menuItem.key" class="px-2">
      <div class="text-main text-base pl-4 pr-4 pb-2 pt-4">
        {{ menuItem.name }}
      </div>
      <div
        v-for="menu in menuItem.children"
        :key="menu.key"
        class="hover-bg-main flex flex-row items-center pl-4 pr-4 pt-1.5 pb-1.5 text-base rounded cursor-pointer transition-colors"
        :class="{ active: currentMenuKey === menu.key }"
        @click="handleMenuSelect(menu)"
      >
        <IconPark :icon="menu.icon" size="18" :theme="menu.theme" />
        <span class="pl-2">{{ menu.name }}</span>
      </div>
    </div>
  </el-scrollbar>
</template>

<style scoped lang="scss">
.active {
	@apply bg-gradient-to-r from-teal-400 to-emerald-400 text-slate-50 cursor-default;
}
</style>
