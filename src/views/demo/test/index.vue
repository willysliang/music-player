<!-- eslint-disable @typescript-eslint/no-non-null-assertion -->
<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<!--
 * @ Modified by: willysliang
 * @ Modified time: 2023-01-12 18:25:13
 * @ Modified by: willysliang
 * @ Modified time: 2023-01-12 18:25:55
 * @ Description: 测试组件
 -->

<template>
  <el-button type="success" @click="addUser" />
</template>

<script setup lang="ts">
const addUser = () => {
  console.log('a')
}
</script>
