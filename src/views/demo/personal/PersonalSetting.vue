<!--
 * @ Author: willysliang
 * @ Create Time: 2022-11-14 18:18:23
 * @ Modified by: willysliang
 * @ Modified time: 2022-11-21 15:31:54
 * @ Description: 个人设置
 -->

<script setup lang="ts">
import { ref } from 'vue'

const handleClip = async () => {
  const input = document.createElement('input')
  input.value = 'this.mes'
  document.body.appendChild(input)
  input.select()
  document.execCommand('copy')
  document.body.removeChild(input)
}
const text = ref('2216')
</script>

<template>
  <div>个人设置</div>
  <el-input v-model="text" />
  <el-button @click="handleClip">按钮</el-button>
</template>
