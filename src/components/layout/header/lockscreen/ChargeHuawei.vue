<!--
 * @ Author: willysliang
 * @ Create Time: 2022-11-03 11:38:44
 * @ Modified by: willysliang
 * @ Modified time: 2022-11-03 11:46:38
 * @ Description: 充电组件 & 仿制华为充电样式
 -->

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { Battery } from '@/hooks/useBattery'

export default /* #__PURE__ */ defineComponent({
  name: 'ChargeHuawei',
  props: {
    /** 电池对象 */
    battery: {
      type: Object as PropType<Battery>,
      default: () => ({}),
    },
  },
})
</script>

<template>
  <div class="charge-huawei">sahkjah</div>
</template>

<style lang="scss">
.charge-huawei {
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
	width: 85vh;
	height: 80vh;

	// background-color: yellowgreen;
	display: flex;
	justify-content: center;
}
</style>
