<script setup lang="ts">
import {
  Switch,
  VideoPause,
  VideoPlay,
  CaretLeft,
  CaretRight,
  Fold,
  Microphone,
} from '@element-plus/icons-vue'
import { ref, reactive } from 'vue'

/***
 * 控制播放
 */
const isPlay = ref(false)
const handlePlay = () => {
  isPlay.value = !isPlay.value
}
const duration = ref(0)
const song = reactive({
  curDuration: '00:00',
  duration: '03:13',
  songName: '慢慢慢慢忘记你',
  singer: '许亚童',
})
</script>

<template>
  <div class="footer flex flex-row box-border p-4 justify-between items-center">
    <div class="flex flex-row box-border">
      <img
        src="@/assets/images/avactor.jpg"
        alt="音乐播放图片"
        class="w-20 h-full rounded-xl"
      />
      <div class="text-white flex flex-col justify-around ml-2.5">
        <span>{{ song.songName }}</span>
        <span>{{ song.singer }}</span>
      </div>
    </div>

    <div class="flex-1">
      <div class="flex flex-row items-center justify-center">
        <el-icon><Switch /></el-icon>
        <el-icon :size="32" color="#fff"><CaretLeft /></el-icon>
        <el-icon v-show="!isPlay" :size="32" color="#fff" @click="handlePlay">
          <VideoPause />
        </el-icon>
        <el-icon v-show="isPlay" :size="32" color="#fff" @click="handlePlay">
          <VideoPlay />
        </el-icon>
        <el-icon :size="32" color="#fff"><CaretRight /></el-icon>
        <span>词</span>
      </div>
      <div class="flex flex-row items-center justify-between text-base">
        <span class="mr-3">{{ song.curDuration }}</span>
        <el-slider v-model="duration" />
        <span class="ml-3">{{ song.duration }}</span>
      </div>
    </div>

    <div class="flex flex-row items-center">
      <span>标准</span>
      <el-icon :size="24" color="#fff"><Microphone /></el-icon>
      <el-icon :size="24" color="#fff"><Fold /></el-icon>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer {
	width: 100%;
	height: 7rem;
	border-top: 1px solid var(--theme-border-color);
	background-color: var(--theme-bg-color);
	font-size: 1.2rem;
	color: #fff;
}
</style>
