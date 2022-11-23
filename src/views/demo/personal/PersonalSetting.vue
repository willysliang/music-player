<!--
 * @ Author: willysliang
 * @ Create Time: 2022-11-14 18:18:23
 * @ Modified by: willysliang
 * @ Modified time: 2022-11-23 17:38:32
 * @ Description: 个人设置
 -->

<script setup lang="ts">
import { reactive } from 'vue'

const userInfo = reactive({
  url: 'willysliang@qq.com',
  username: 'willysliang',
})
</script>

<template>
  <div>{{ userInfo }}</div>
</template>
