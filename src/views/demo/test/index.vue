<!-- eslint-disable @typescript-eslint/no-non-null-assertion -->
<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<!--
 * @ Modified by: willysliang
 * @ Modified time: 2023-01-12 18:25:13
 * @ Modified by: willysliang
 * @ Modified time: 2023-01-24 19:51:54
 * @ Description: 测试组件
 -->
<script setup lang="ts">
import http from '@util/http'
import { onMounted, ref, reactive } from 'vue'

const addUser = () => {
  console.log('a')
}

const fileRef = ref()
const progressRef = ref()
const uploadRef = ref()

const fileState = reactive({
  fileName: '',
  fileHash: '',
  chunkList: [] as { chunk: any }[],
  hashPercentage: 0,
})

/** 获取文件后缀名 */
const getFileSuffix = (fileName) => {
  const tempArr = fileName.split('.')
  if (tempArr.length > 0) {
    return tempArr[tempArr.length - 1]
  }
  return ''
}

/** 拆分文件 */
const CHUNK_SIZE = 2 * 1024 * 1024
const splitFile = (file, size = CHUNK_SIZE) => {
  const fileChunkList: { chunk: any }[] = []
  let curChunkIndex = 0
  while (curChunkIndex <= file.size) {
    const chunk = file.slice(curChunkIndex, curChunkIndex + size)
    fileChunkList.push({ chunk })
    curChunkIndex += size
  }
  return fileChunkList
}

/** 选择文件 */
const handleFileChange = (e) => {
  const [files] = e.target
  if (!files?.name) return undefined
  fileState.fileName = files.name
  // 文件分片
  const chunkList = splitFile(files)
  fileState.chunkList = chunkList
}

/** 发送合并请求 */
const mergeRequest = async (hash) => {
  const res = await http.post({
    url: 'http://localhost:3999:merge',
    headers: {
      'content-type': 'application/json',
    },
    data: {
      fileHash: hash,
      suffix: getFileSuffix(fileState.fileName),
      // 用于服务器合并文件
      size: CHUNK_SIZE,
    }
  })
}

onMounted(() => {
  /** 读取文件 */
  console.log('a')
})
</script>

<template>
  <el-button type="success" @click="addUser" />
  <input ref="fileRef" type="file" />
  <button ref="uploadRef">上传</button>
  <!-- 上传进度 -->
  <div ref="progressRef" style="width: 300px"></div>
</template>
