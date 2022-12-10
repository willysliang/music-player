<!--
 * @ Author: willysliang
 * @ Create Time: 2022-12-10 07:59:28
 * @ Modified by: willysliang
 * @ Modified time: 2022-12-10 08:06:20
 * @ Description: 组件通信
 -->

<script setup lang="ts">
import { ChildA, ChildB } from './'
</script>

<template>
  <el-row>
    <el-col :offset="1" :span="22">
      <el-card>
        <template #header>
          <span class="text-base">兄弟组件通信 MITT</span>
        </template>
        <el-row :gutter="10">
          <el-col :span="12">
            <ChildA />
          </el-col>
          <el-col :span="12">
            <ChildB />
          </el-col>
        </el-row>
      </el-card>
    </el-col>
  </el-row>
</template>
