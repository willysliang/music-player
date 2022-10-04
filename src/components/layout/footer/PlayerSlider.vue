<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { usePlayerStore } from '@/store/player'
import { useAppStore } from '@/store/app'

const { currentTime, duration, sliderInput } = storeToRefs(usePlayerStore())
const { iconColor, iconSize } = storeToRefs(useAppStore())

/***
 * 播放滚动条
 */
/* 修改播放时间 */
const onSliderChange = (val) => {
  currentTime.value = val
  sliderInput.value = false
}

/* 播放时间拖动中 */
const onSliderInput = () => {
  sliderInput.value = true
}
</script>

<template>
  <div class="flex-1 flex flex-col justify-around items-center">
    <div class="w-full flex flex-row">
      <el-icon :size="iconSize" :color="iconColor"><Fold /></el-icon>
      <el-icon><CaretLeft /></el-icon>

      <el-icon><CaretRight /></el-icon>
    </div>
    <div class="w-full flex flex-row items-center justify-between">
      <span>00:00</span>
      <el-slider
        v-model="currentTime"
        :show-tooltip="false"
        :min="0"
        :max="duration"
        class="px-1"
        @change="onSliderChange"
        @input="onSliderInput"
      />
      <span>05:30</span>
    </div>
  </div>
</template>

<style lang="scss">
.el-slider {
	height: 7px;

	--el-slider-main-bg-color: var(--theme-slider-color);
	--el-slider-stop-bg-color: var(--theme-slider-stop-color);

	.el-slider__bar,
	.el-slider__runway {
		height: 3px;
	}

	.el-slider__button,
	.el-slider__button-wrapper {
		height: 9px;
		width: 9px;
	}

	.el-slider__button-wrapper {
		top: -7px;

		@apply opacity-0 transition-opacity;
	}

	&:hover {
		.el-slider__button-wrapper {
			@apply opacity-100;
		}
	}

	.el-slider__button {
		width: 8px;
		height: 8px;
	}
}
</style>
