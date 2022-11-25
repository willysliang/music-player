<!--
 * @ Author: willysliang
 * @ Create Time: 2022-10-10 09:05:41
 * @ Modified by: willysliang
 * @ Modified time: 2022-11-25 10:05:02
 * @ Description: 主内容区域
 -->

<template>
  <div class="container mx-auto py-5 px-4 box-border w-full h-full my-main">
    <el-scrollbar class="w-full h-full">
      <router-view />
    </el-scrollbar>
  </div>
</template>

<style lang="scss">
.my-main {
	.el-scrollbar__view {
		width: 100%;
		height: 100%;
	}
}
</style>
