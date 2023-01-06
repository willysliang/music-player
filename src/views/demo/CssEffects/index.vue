<!--
 * @ Author: willysliang
 * @ Create Time: 2023-01-05 19:41:19
 * @ Modified by: willysliang
 * @ Modified time: 2023-01-06 09:28:01
 * @ Description: CSS特效
 -->
<script setup lang="ts">
import { Lantern } from './'
</script>

<template>
  <!-- 灯笼动画 -->
  <el-row class="mb-4">
    <el-col :offset="1" :span="22">
      <el-card>
        <template #header>
          <span class="text-base">灯笼动画</span>
        </template>
        <Lantern />
      </el-card>
    </el-col>
  </el-row>
</template>
