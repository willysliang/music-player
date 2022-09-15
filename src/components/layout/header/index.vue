<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
import { ref } from 'vue'
const search = ref(null)
</script>

<template>
  <div class="header">
    <!-- logo -->
    <div class="header-logo">
      <el-icon :size="32" color="#fff">
        <Headset />
      </el-icon>
      <span class="header-logo-title">MUSIC&nbsp;PLAYER</span>
    </div>

    <!-- 主内容 -->
    <div class="header-main">
      <el-icon :size="20" color="#fff">
        <ArrowLeftBold />
      </el-icon>
      <el-icon :size="20" color="#fff">
        <ArrowRightBold />
      </el-icon>
      <el-input
        v-model="search"
        class="header-main-search"
        placeholder="音乐/视频/电台/用户"
        :prefix-icon="Search"
      />
    </div>

    <!-- 我的 -->
    <div class="header-mine">
      <div class="header-mine-unlisted">登录</div>
      <div></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
	height: 7rem;
	width: 100%;
	background-color: var(--theme-header-color);
	color: var(--theme-color);
	@include flex(rows, space-between, center);
	box-sizing: border-box;
	padding: 0 0.5rem;
	font-size: 1.5rem;
}

/* logo */
.header-logo {
	height: 100%;

	/* width: 20rem; */
	background-color: var(--logo-bg-color);
	@include flex(rows, space-between, center);

	&-title {
		margin-left: 1rem;
	}
}

/* 主内容 */
.header-main {
	padding: 0 1rem;
	flex: 1;
	height: 100%;
	@include flex(rows, space-between, center);

	&-search {
		flex: 1;
		height: 100%;
		box-sizing: border-box;
		padding: 1.5rem 0;
	}
}

/* 我的 */
.header-mine {
	/* width: 15rem; */
	height: 100%;
	@include flex(rows, center);

	&-unlisted {
		@include flex(rows, flex-end);
		border-radius: 1.5rem;
		padding: 1.5rem;
		border: 0.1rem solid #ccc;
	}
}
</style>
