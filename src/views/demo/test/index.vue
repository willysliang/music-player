<!-- eslint-disable @typescript-eslint/no-non-null-assertion -->
<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<!--
 * @ Modified by: willysliang
 * @ Modified time: 2023-01-12 18:25:13
 * @ Modified by: willysliang
 * @ Modified time: 2023-01-13 11:05:44
 * @ Description: 测试组件
 -->
<script setup lang="ts">
import { onMounted } from 'vue'

const addUser = () => {
  console.log('a')
}

onMounted(() => {
  console.log('a')
})
</script>

<template>
  <el-button type="success" @click="addUser" />
</template>
