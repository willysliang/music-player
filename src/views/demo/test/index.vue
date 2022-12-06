<!--
 * @ Author: willysliang
 * @ Create Time: 2022-10-31 17:15:11
 * @ Modified by: willysliang
 * @ Modified time: 2022-12-06 18:13:00
 * @ Description: 测试组件
 -->

<script setup lang="ts">
import { reactive } from 'vue'
import { demoLotteryItem1, demoLotteryItem2 } from '@/assets/images'

const list = reactive([
  { id: 1, img: demoLotteryItem1, title: '谢谢参与' },
  { id: 2, img: demoLotteryItem2, title: '美女一个' },
  { id: 3, img: demoLotteryItem1, title: '宝马一辆' },
  { id: 4, img: demoLotteryItem2, title: '单车一辆' },
  { id: 5, img: demoLotteryItem1, title: '鸡蛋一蓝' },
  { id: 6, img: demoLotteryItem2, title: '500红包' },
  { id: 7, img: demoLotteryItem1, title: '靓号一个' },
  { id: 8, img: demoLotteryItem2, title: '鲜花一蓝' },
])
</script>

<template>
  <el-row>
    <el-col :offset="1" :span="22">
      <el-card>
        <template #header>
          <span class="text-base">九宫格抽奖 Lottery</span>
        </template>

        <div class="cell-lottery">
          <div class="w-11/12 h-5/6 m-auto flex flex-row items-center flex-wrap">
            <div v-for="(item, index) in list" :key="index" class="cell-lottery-item w-1/3">
              <img :src="item.img" alt="背景图">
              <span>{{ item.title }}</span>
            </div>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<style lang="scss">
.cell-lottery {
	@apply overflow-hidden p-8 w-full;
	animation: changeBg 0.5s ease infinite;
	background-repeat: no-repeat;
	background-size: 100% 100%;
	min-height: 25rem;

	&-item {
		background-repeat: no-repeat;
		background-size: 100% 100%;
		background-image: url('../../../assets/images/demo/lottery-bg2.png');
	}
}

@keyframes changeBg {
	0% {
		background-image: url('../../../assets/images/demo/lottery-frame1.png');
	}

	32% {
		background-image: url('../../../assets/images/demo/lottery-frame2.png');
	}

	63% {
		background-image: url('../../../assets/images/demo/lottery-frame1.png');
	}

	100% {
		background-image: url('../../../assets/images/demo/lottery-frame2.png');
	}
}
</style>
