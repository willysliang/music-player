<!--
 * @ Author: willysliang
 * @ Create Time: 2023-01-05 19:41:19
 * @ Modified by: willysliang
 * @ Modified time: 2023-01-06 10:12:26
 * @ Description: CSS特效
 -->
<script setup lang="ts">
import { Lantern, HeartSwitch } from './'
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

  <!-- 心形开关 -->
  <el-row class="mb-4">
    <el-col :offset="1" :span="22">
      <el-card>
        <template #header>
          <span class="text-base">心形开关</span>
        </template>
        <div class="flex flex-col items-center justify-center">
          <HeartSwitch />
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>
