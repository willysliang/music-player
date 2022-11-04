<!--
 * @ Author: willysliang
 * @ Create Time: 2022-11-04 14:53:04
 * @ Modified by: willysliang
 * @ Modified time: 2022-11-04 15:23:46
 * @ Description: 屏幕缩放组件
 -->

<script setup lang="ts">
import IconPark from '@comp/common/IconPark.vue'
import { FullScreenOne, OffScreenOne } from '@icon-park/vue-next'
</script>

<template>
  <div>
    <el-tooltip :content="'aaa'" placement="bottom">
      <IconPark
        :icon="true ? FullScreenOne : OffScreenOne"
        size="22"
        :stroke-width="3"
        class="hover-text mx-2 cursor-pointer"
      />
    </el-tooltip>
  </div>
</template>
