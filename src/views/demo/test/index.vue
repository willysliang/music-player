<!-- eslint-disable @typescript-eslint/no-non-null-assertion -->
<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<!--
 * @ Modified by: willysliang
 * @ Modified time: 2023-01-12 18:25:13
 * @ Modified by: willysliang
 * @ Modified time: 2023-01-13 20:26:03
 * @ Description: 测试组件
 -->
<script setup lang="ts">
import { onMounted, ref } from 'vue'

const addUser = () => {
  console.log('a')
}

const fileRef = ref()
const progressRef = ref()
/** 文件对象 */
const files = ref({})
/** 存放切片的数组 */
const chunkList = ref([])

onMounted(() => {
  /** 读取文件 */
  fileRef.value!.addEventListener('change', event => {
    files.value = event.target.files[0]
    console.log(files.value)
  })
})
</script>

<template>
  <el-button type="success" @click="addUser" />
  <input ref="fileRef" type="file" />
  <button id="upload">上传</button>
  <!-- 上传进度 -->
  <div ref="progressRef" style="width: 300px"></div>
</template>
