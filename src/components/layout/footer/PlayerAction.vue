<script setup lang="ts">
import IconPark from '@comp/common/IconPark.vue'
import { DownTwo, MoreTwo, Comment, TextMessage } from '@icon-park/vue-next'
</script>

<template>
  <div class="player-action w-1/3 flex flex-row justify-around items-center">
    <span class="text-sm">标准</span>
    <IconPark
      :icon="TextMessage"
      size="18"
      :stroke-width="3"
      class="hover-text"
      title="歌词"
    />
    <el-badge :value="1000" :max="999" class="badge">
      <IconPark
        :icon="Comment"
        size="20"
        :stroke-width="3"
        class="hover-text icon-main"
      />
    </el-badge>
    <IconPark
      :icon="DownTwo"
      size="20"
      :stroke-width="3"
      class="hover-text icon-main"
    />
    <IconPark
      :icon="MoreTwo"
      size="20"
      :stroke-width="3"
      class="hover-text icon-main"
    />
  </div>
</template>

<style lang="scss" scoped>
/* stylelint-disable-next-line selector-pseudo-class-no-unknown */
:deep(.el-badge__content) {
	color: var(--theme-text-color);
	background-color: var(--theme-text-bg-color);
	font-size: .1rem;
	padding: 0 3px;
	height: .8rem;
	top: 0;
	right: .4rem;
}
</style>
