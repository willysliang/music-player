<!--
 * @ Author: willysliang
 * @ Create Time: 2022-11-23 17:45:49
 * @ Modified by: willysliang
 * @ Modified time: 2022-11-24 13:47:21
 * @ Description: 图片裁剪
 -->

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import 'cropperjs/dist/cropper.css'
import Cropper from 'cropperjs'
import { avactor } from '@/assets/images'
import IconImg from '@/assets/icons/img.svg'
import { ElMessage } from 'element-plus'

const image = ref()
const imageSrc = ref<any>(avactor)
const cropper = ref()

/** 挂载 Cropper 实例 */
onMounted(() => {
  cropper.value = new Cropper(image.value, {
    viewMode: 0,
    dragMode: 'move',
    background: true,
    preview: 'before',
    autoCropArea: 1,
    zoomOnWheel: true,
    center: true,
  })
})

/** 获取裁剪的图片 */
const cutImage = ref('')
const cutSave = () => {
  cutImage.value = cropper.value
    .getCroppedCanvas({
      imageSmoothingQuality: 'high',
    })
    .toDataURL('image/jpeg') // 设置图片格式
}

/** 打开文件 */
const fileRef = ref()
const openFile = () => {
  fileRef.value.dispatchEvent(new MouseEvent('click'))
}
const chooseImage = (): boolean => {
  const inputFile = fileRef.value.files[0]
  if (inputFile) {
    if (!/(gif|png|jpg|jpeg)$/i.test(inputFile.type)) {
      ElMessage.warning('上传头像图片只能是gif|png|jpg|jpeg 格式!')
      return false
    }
    const reader = new FileReader()
    reader.readAsDataURL(inputFile)
    reader.onload = (ev: ProgressEvent<FileReader>) => {
      imageSrc.value = ev?.target?.result ?? ''
      cropper.value.replace(ev?.target?.result)
    }
    return true
  }
  return false
}

/** 保存 */
const handleSave = () => {
  const dataURLtoBlob = (dataurl: string) => {
    const arr = dataurl.split(',')
    const mime = arr[0]?.match(/:(.*?);/)?.[1]
    const bstr = window.atob(arr[1])
    let n = bstr.length
    const u8arr = new Uint8Array(n)
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n)
    }
    return new Blob([u8arr], { type: mime })
  }

  const downloadFile = (url: string, name = 'defaultFileName') => {
    const a = document.createElement('a')
    a.setAttribute('href', url)
    a.setAttribute('download', name)
    a.setAttribute('target', '_blank')
    const clickEvent = document.createEvent('MouseEvents')
    clickEvent.initEvent('click', true, true)
    a.dispatchEvent(clickEvent)
  }

  const downloadFileByBase64 = (base64: string, name: string | undefined) => {
    const myBlob = dataURLtoBlob(base64)
    const myUrl = URL.createObjectURL(myBlob)
    downloadFile(myUrl, name)
  }

  downloadFileByBase64(cropper.value.getCroppedCanvas().toDataURL(), 'cropImg')
}
</script>

<template>
  <div class="w-full h-full">
    <div class="w-full flex flex-row items-center">
      <el-tooltip content="打开" placement="top" effect="dark">
        <div
          class="cursor-pointer transition-colors duration-300 hover:bg-gray-300 hover:text-gray-100"
          @click="openFile"
        >
          <img :src="IconImg" alt="" />
          <input
            ref="fileRef"
            style="display: none"
            type="file"
            accept="image/*"
            @change="chooseImage"
          />
        </div>
      </el-tooltip>
      <div @click.prevent="handleSave">保存</div>
      <el-button @click="cutSave">裁剪</el-button>
    </div>
    <div class="w-8/12 h-96">
      <img
        ref="image"
        :src="imageSrc"
        alt=""
        class="w-full h-full block max-w-full"
      />
    </div>

    <img :src="cutImage" alt="" class="before" />
  </div>
</template>
