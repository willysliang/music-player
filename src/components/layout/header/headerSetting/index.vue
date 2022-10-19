<!--
 * @ Author: willysliang
 * @ Create Time: 2022-10-19 08:48:17
 * @ Modified by: willysliang
 * @ Modified time: 2022-10-19 09:58:34
 * @ Description: 页面布局头部 - 设置 - 抽屉 - 主题设置
 -->

<script setup lang="ts">
import { useThemeStore } from '@store/app/theme'
import { storeToRefs } from 'pinia'
import { themeStyle } from './theme'

const { drawer, themeStyleCurrent } = storeToRefs(useThemeStore())
</script>

<template>
  <el-drawer v-model="drawer" :with-header="false">
    <div>
      <h3 class="font-bold">整体风格</h3>
      <div class="relative flex flex-row flex-wrap items-center">
        <div
          v-for="theme in themeStyle"
          :key="theme.id"
          class="relative p-2"
          @click="themeStyleCurrent = theme.id"
        >
          <img :src="theme.value" alt="整体风格图标" />
          <el-icon
            v-show="themeStyleCurrent === theme.id"
            class="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style="position: absolute"
            color="#16c60c"
            :size="25"
          >
            <Select />
          </el-icon>
        </div>
      </div>
    </div>
  </el-drawer>
</template>
