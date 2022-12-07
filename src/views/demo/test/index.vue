<!--
 * @ Author: willysliang
 * @ Create Time: 2022-10-31 17:15:11
 * @ Modified by: willysliang
 * @ Modified time: 2022-12-07 11:29:14
 * @ Description: 测试组件
 -->

<script setup lang="ts">
import CellLottery from './CellLottery.vue'
</script>

<template>
  <CellLottery />

  <!-- <div
    class="w-20 border border-solid border-gray-500 overflow-y-visible overflow-x-hidden"
  >
    <div
      v-for="(item, index) in 100"
      :key="index"
      class="w-40 bg-blue-400 text-gray-100"
    >
      {{ index }}
    </div>
  </div> -->
</template>
