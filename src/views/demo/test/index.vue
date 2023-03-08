<!-- eslint-disable n/no-callback-literal -->
<!-- eslint-disable no-unmodified-loop-condition -->
<!-- eslint-disable @typescript-eslint/no-empty-function -->
<!-- eslint-disable brace-style -->
<!-- eslint-disable @typescript-eslint/no-non-null-assertion -->
<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<!--
 * @ Modified by: willysliang
 * @ Modified time: 2023-02-15 17:30:11
 * @ Modified by: willysliang
 * @ Modified time: 2023-02-14 13:40:32
 * @ Description: 测试组件
 -->
<script setup lang="ts">
import { onMounted, ref, reactive, computed, watch } from 'vue'
import { cloneDeep } from 'lodash'
// import VirtualList from './VirtualList.vue'
import VirtualList from './virtual-list.vue'

const add = () => {
  console.log('add')
}

const data = ref<Array<any>>([])

for (let i = 1; i <= 1000000; i++) {
  data.value.push({
    id: i,
    value: '字符内容'.repeat(Math.random() * 100),
  })
}

const list: any[] = Array.from({ length: 10000 })
  .fill({ text: '元素' })
  .map((item: any) => ({ ...item, height: 200 * (Math.random() * 0.5 + 0.5) }))
</script>

<template>
    <div class="fill">
    <div class="list-wrapper">
      <virtual-list :list="list">
        <template
          v-for="(item, index) in list"
          :key="index"
          #[`item${index}`]
        >
          <div class="real-list-item" :style="{ height: `${item.height}px` }">
            <span>{{ item.text }}{{ index }}</span>
          </div>
        </template>
        <template #skeleton>
          <div class="skeleton">骨架</div>
        </template>
      </virtual-list>
    </div>
  </div>

 <!--  <VirtualList :list-data="data">
    <template #default="{ listItem }">
      <div> <span class="text-red-600">{{ listItem.idx }}</span> {{ listItem.value }}</div>
    </template>
  </VirtualList> -->
</template>

<style lang="scss">

.list-wrapper {
	width: 100%;
	height: 500px;
}

.real-list-item {
	border: 1px solid #333;
	box-sizing: border-box;
	margin-top: 16px;
	display: flex;
	justify-content: center;
	align-items: center;
}

.skeleton {
	margin-top: 16px;
	background-color: #ccc;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
