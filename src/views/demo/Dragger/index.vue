<!--
 * @ Author: willysliang
 * @ Create Time: 2022-11-25 11:07:23
 * @ Modified by: willysliang
 * @ Modified time: 2022-11-25 17:44:47
 * @ Description: 拖拽组件
 -->

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
import Sortable from 'sortablejs'

type TaskItemType = {
  id: number
  title: string
  list: {
    id: number
    avatar: string
  }[]
}
const tasklist = reactive<TaskItemType[]>([
  {
    title: '待处理',
    id: 1,
    list: [
      {
        id: 11,
        avatar:
          'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
      },
    ],
  },
])

const taskRef = ref<any>([])
const sortableRef = ref<any>([])

onMounted(() => {
  taskRef.value.forEach((item, index) => {
    sortableRef.value[index] = new Sortable(taskRef.value[index], {
      group: 'shared', // set both lists to same group
      animation: 150,
      easing: 'cubic-bezier(1, 0, 0, 1)',
    })
  })
})
</script>

<template>
  <div class="board w-full flex flex-row">
    <div v-for="(task, index) in tasklist" :key="task.id" :ref="taskRef[index]" class="task w-44">
      <div>{{ task.title }}</div>
      <template v-if="task.list?.length > 0">
        <div v-for="item in task.list" :key="item.id" class="task-item">
          <div class="flex flex-row items-center justify-between">
            <img :src="item.avatar" class="rounded-full " />
          </div>
      </div>
      </template>
    </div>
  </div>
</template>

<style lang="scss">
.board {
	background-color: #fff;

	.task {
		min-height: 35rem;
		background-color: #f5f5f5;
		border: 1px solid #ccc;
		box-sizing: border-box;
		padding: 3px;
	}
}
</style>
