<!--
 * @ Author: willysliang
 * @ Create Time: 2022-10-31 17:15:11
 * @ Modified by: willysliang
 * @ Modified time: 2022-12-10 07:56:22
 * @ Description: 测试组件
 -->

<script setup lang="ts">
import { useEventbus } from '@/hooks'
import { onMounted } from 'vue';

const { emitter, customOn } = useEventbus()

onMounted(() => {
  emitter.on('test', (res) => {
    console.log(res)
  })

  customOn('demo', (params) => {
    console.log('params', params)
  })
})
</script>

<template>
  <el-row>
    <el-col :offset="1" :span="22">
      <el-card>
        <template #header>
          <span class="text-base">九宫格抽奖</span>
        </template>
      </el-card>
    </el-col>
  </el-row>
</template>
