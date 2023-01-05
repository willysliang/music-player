<!--
 * @ Author: willysliang
 * @ Create Time: 2022-10-31 17:15:11
 * @ Modified by: willysliang
 * @ Modified time: 2023-01-05 15:29:01
 * @ Description: 测试组件
 -->

<script setup lang="ts">

</script>

<template>
  <img
    ref="img"
    width="1000"
    height="1000"
    src="@/assets/images/avactor.jpg"
    srcset="
      @/assets/images/avactor.jpg 1000w,
      @/assets/images/code.png 2000w,
      @/assets/images/default.png 3000w,
    "
    alt="Puppy with balloons"
  />
</template>

<style lang="scss">
</style>
