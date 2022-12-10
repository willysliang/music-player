<!--
 * @ Author: willysliang
 * @ Create Time: 2022-10-31 17:15:11
 * @ Modified by: willysliang
 * @ Modified time: 2022-12-10 07:54:31
 * @ Description: 测试组件
 -->

<script setup lang="ts">
import { useEventbus } from '@/hooks'

const { emitter, customEmit } = useEventbus()

const add = () => {
  emitter.emit('test', ["sasa", 'bbb', 'ccc'])
  customEmit('demo', ['a', 'b', 'c'])
}
</script>

<template>
  <el-row>
    <el-col :offset="1" :span="22">
      <el-card>
        <template #header>
          <span class="text-base" @click="add">九宫格抽奖</span>
        </template>
      </el-card>
    </el-col>
  </el-row>
</template>
