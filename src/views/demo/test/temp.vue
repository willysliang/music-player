<!-- eslint-disable @typescript-eslint/no-non-null-assertion -->
<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<!--
 * @ Modified by: willysliang
 * @ Modified time: 2023-01-12 18:25:13
 * @ Modified by: willysliang
 * @ Modified time: 2023-01-14 21:01:56
 * @ Description: 测试组件
 -->
<script setup lang="ts">
import axios from 'axios'
import { onMounted, ref } from 'vue'

const addUser = () => {
  console.log('a')
}

const fileRef = ref()
const progressRef = ref()
const uploadRef = ref()
/** 文件对象 */
const files = ref<any>({} as any)
/** 存放切片的数组 */
const chunkList = ref<{ file: Blob }[]>([])

/**
 * 创建切片
 * @file 大文件
 * @size 切片的大小
 * @return 切片后的切片快数组
 */
const createChunk = (file: Blob, size = 2 * 1024 * 1024) => {
  const chunkList: { file: Blob }[] = []
  let cur = 0
  while (cur < file.size) {
    chunkList.push({ file: file.slice(cur, cur + size) })
    cur += size
  }
  return chunkList
}

const axiosRequest = ({ method = 'post', url, data }) => {
  return new Promise((resolve, reject) => {
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
    axios[method](url, data, config).then((res) => {
      resolve(res)
    })
  })
}

/**
 * 数据处理
 */
const uploadFile = async (list) => {
  const requestList = list
    .map(({ file, fileName, index, chunkName }) => {
      // 创建表单类型的数据
      const formData = new FormData()
      formData.append('file', file) // 该文件
      formData.append('fileName', fileName) // 文件名
      formData.append('chunkName', chunkName) // 切片名
      return { formData, index }
    })
    .map(({ formData, index }) =>
      axiosRequest({
        method: 'post',
        url: 'http://localhost:3999/uploadFile',
        data: formData,
      })
        .then((res) => {
          console.log('res', res)
          const p = document.createElement('p')
          p.innerHTML = `${list[index].chunkName}--${
            (res as any)?.data?.message || ''
          }`
          progressRef.value.appendChild(p)
        })
        .catch((err) => {
          console.log('err', err)
        }),
    )
  await Promise.all(requestList) // 保证所有的切片已经传输完毕
}

onMounted(() => {
  /** 读取文件 */
  fileRef.value!.addEventListener('change', (event) => {
    files.value = event.target.files[0]
    chunkList.value = createChunk(files.value)

    // 文件上传
    uploadRef.value.addEventListener('click', () => {
      const uploadList = chunkList.value.map(({ file }, index) => ({
        file,
        size: file.size,
        percent: 0,
        chunkName: `${files.value.name}-${index}`,
        fileName: files.value.name,
        index,
      }))
      // 发请求，调用函数
      uploadFile(uploadList)
    })
  })
})
</script>

<template>
  <el-button type="success" @click="addUser" />
  <input ref="fileRef" type="file" />
  <button ref="uploadRef">上传</button>
  <!-- 上传进度 -->
  <div ref="progressRef" style="width: 300px"></div>
</template>
