<!--
 * @ Author: willysliang
 * @ Create Time: 2022-10-10 09:05:41
 * @ Modified by: willysliang
 * @ Modified time: 2023-01-05 15:33:38
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

		/* 格子背景色 */
		background-image: linear-gradient(
			90deg,
			rgb(50 0 0 / 5%) 3%,
			rgb(0 0 0 / 0%) 3%
		),
			linear-gradient(360deg, rgb(50 0 0 / 5%) 3%, rgb(0 0 0 / 0%) 3%);
		background-size: 20px 20px;
		background-repeat: repeat;
		background-position: center center;
	}
}
</style>
