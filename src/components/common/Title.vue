<!--
 * @ Author: willysliang
 * @ Create Time: 2022-10-09 09:08:03
 * @ Modified by: willysliang
 * @ Modified time: 2022-10-09 09:41:37
 * @ Description: 菜单头部信息
 -->

<script setup lang="ts">
import IconPark from '@comp/common/IconPark.vue'
import { Right } from '@icon-park/vue-next'

defineProps<{
  title: string | number
}>()
</script>

<template>
  <div class="flex flex-row items-center text-xl py-3 mt-2">
    <span>{{ title }}</span>
    <IconPark :icon="Right" size="25" :stroke-width="2" />
  </div>
</template>
