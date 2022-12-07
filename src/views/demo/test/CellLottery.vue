<!--
 * @ Author: willysliang
 * @ Create Time: 2022-12-07 10:58:11
 * @ Modified by: willysliang
 * @ Modified time: 2022-12-07 10:58:42
 * @ Description: 九宫格抽奖
 -->

<script setup lang="ts">
import { onBeforeMount, reactive } from 'vue'
import { demoLotteryItem1, demoLotteryItem2 } from '@/assets/images'

const lotterylist = reactive([
  { id: 1, pic: demoLotteryItem1, title: '谢谢参与' },
  { id: 2, pic: demoLotteryItem2, title: '美女一个' },
  { id: 3, pic: demoLotteryItem1, title: '宝马一辆' },
  { id: 4, pic: demoLotteryItem2, title: '单车一辆' },
  { id: 5, pic: demoLotteryItem1, title: '鸡蛋一蓝' },
  { id: 6, pic: demoLotteryItem2, title: '500红包' },
  { id: 7, pic: demoLotteryItem1, title: '靓号一个' },
  { id: 8, pic: demoLotteryItem2, title: '鲜花一蓝' },
])

/** 添加中心的开始抽奖按钮 */
onBeforeMount(() => {
  const startBtn = {
    id: 0,
    title: '开始按钮',
    pic: 'https://img2.baidu.com/it/u=1497996119,382735686&fm=253',
  }
  lotterylist.splice(0, 0, startBtn)
})

/** 获取中奖的id */
const getRandomId = () => {
  const loterySortId = lotterylist.map((item) => item.id)
  console.log(loterySortId)
}
</script>

<template>
  <el-row>
    <el-col :offset="1" :span="22">
      <el-card>
        <template #header>
          <span class="text-base">九宫格抽奖 Lottery</span>
        </template>

        <div class="cell-lottery">
          <div
            v-for="(lotteryItem, index) in lotterylist.slice(0, 1)"
            :key="index"
            class="cell-lottery-item w-full h-32 relative cursor-pointer border border-solid border-gray-500"
            @click="getRandomId"
          >
            <img
              :src="lotteryItem.pic"
              alt="抽奖图"
              class="h-5/6 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
            <span
              v-if="index !== 0"
              class="absolute left-1/2 transform -translate-x-1/2 bottom-1"
            >
              {{ lotteryItem.title }}
            </span>
          </div>
          <div
            v-for="(lotteryItem, index) in lotterylist.slice(1, 9)"
            :key="index"
            class="cell-lottery-item w-full h-32 relative cursor-pointer border border-solid border-gray-500"
          >
            <img
              :src="lotteryItem.pic"
              alt="抽奖图"
              class="h-5/6 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
            <span
              v-if="index !== 0"
              class="absolute left-1/2 transform -translate-x-1/2 bottom-1"
            >
              {{ lotteryItem.title }}
            </span>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<style lang="scss">
.cell-lottery {
	display: grid;
	grid-auto-flow: column dense;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(3, 1fr);
	grid-row-gap: 1rem;
	grid-column-gap: 1rem;

	// 开始按钮居于网格中间
	&-item:first-child {
		grid-column-start: 2;
		grid-column-end: 3;
		grid-row-start: 2;
		grid-row-end: 3;
	}
}
</style>
