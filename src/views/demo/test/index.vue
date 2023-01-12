<!-- eslint-disable @typescript-eslint/no-non-null-assertion -->
<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<!--
 * @ Author: willysliang
 * @ Create Time: 2022-10-31 17:15:11
 * @ Modified by: willysliang
 * @ Modified time: 2023-01-12 15:41:55
 * @ Description: 测试组件
 -->

<script setup lang="ts">
import { onMounted } from 'vue'

const test = () => {
  console.log('b')
}

const request = window.indexedDB.open('pku');
console.log(request)

onMounted(() => {
  console.log('a')
})
</script>

<template>
  <el-button @click="test">按钮</el-button>
</template>
