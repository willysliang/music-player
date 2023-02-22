<!-- eslint-disable no-unmodified-loop-condition -->
<!-- eslint-disable @typescript-eslint/no-empty-function -->
<!-- eslint-disable brace-style -->
<!-- eslint-disable @typescript-eslint/no-non-null-assertion -->
<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<!--
 * @ Modified by: willysliang
 * @ Modified time: 2023-02-15 17:30:11
 * @ Modified by: willysliang
 * @ Modified time: 2023-02-14 13:40:32
 * @ Description: 测试组件
 -->
<script setup lang="ts">
import { onMounted, ref, reactive, computed, watch } from 'vue'
import { cloneDeep } from 'lodash'
import VirtualList from '../virtualList/VirtualList.vue'

const add = () => {
  console.log('add')
}

const list = ref(
  new Array(268435)
    .fill({ name: 'willy', id: 0 })
    .map((item, i) => ({ name: `${item.name}${i}`, id: i })),
)
</script>

<template>
  <!-- <el-button @click="add">delete</el-button> -->
  <VirtualList :listdata="list" :item-size="100" />
</template>
