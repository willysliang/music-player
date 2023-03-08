<!--
 * @ Author: willysliang
 * @ Create Time: 2023-02-22 16:08:26
 * @ Modified by: willysliang
 * @ Modified time: 2023-02-22 16:40:02
 * @ Description: virtualList 虚拟列表
 -->

<script setup lang="ts">
import { ref } from 'vue'
import VirtualList from './VirtualList.vue'

const list = ref(
  new Array(268435)
    .fill({ name: 'willy', id: 0 })
    .map((item, i) => ({ name: `${item.name}${i}`, id: i })),
)
</script>

<template>
  <el-row class="mb-4">
    <el-col :offset="1" :span="22">
      <el-card>
        <template #header>
          <span class="text-base">Item固定高度的虚拟列表</span>
        </template>
        <div class="flex flex-col items-center justify-center h-80">
          <VirtualList :listdata="list" :item-size="100" />
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>
