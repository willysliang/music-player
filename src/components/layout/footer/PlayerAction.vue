<script setup lang="ts">
import IconPark from '@comp/common/IconPark.vue'
import {
  DownTwo,
  MoreTwo,
  Comment,
  MusicList,
  Delete,
} from '@icon-park/vue-next'
import { toRefs } from 'vue'
import { usePlayerStore } from '@/store/player'
import { opticalDisk } from '@/assets/images'
import { first } from 'lodash'
import { formatDuring } from '@/utils/format'

/* 歌曲列表 */
const {
  showPlayList,
  playListCount,
  clearPlayList,
  playList,
  getPlay,
  playId,
} = toRefs(usePlayerStore())
</script>

<template>
  <div
    class="player-action w-1/3 flex flex-row justify-end items-center box-border"
  >
    <el-badge :value="1000" :max="999" class="badge mr-6">
      <IconPark
        :icon="Comment"
        size="22"
        :stroke-width="3"
        class="hover-text icon-main"
        title="评论"
      />
    </el-badge>
    <span class="text-sm mx-3">标准</span>
    <IconPark
      :icon="DownTwo"
      size="22"
      :stroke-width="3"
      class="hover-text icon-main mx-3"
      title="下载"
    />
    <IconPark
      :icon="MoreTwo"
      size="22"
      :stroke-width="3"
      class="hover-text icon-main mx-3"
      title="更多"
    />
    <IconPark
      :icon="MusicList"
      size="22"
      :stroke-width="3"
      class="hover-text ml-3"
      title="播放列表"
      @click="showPlayList = true"
    />
    <el-drawer
      v-model="showPlayList"
      direction="rtl"
      :with-header="false"
      size="300px"
      custom-class="play-list"
    >
      <div class="flex flex-col">
        <div class="m-2">
          <div class="text-xl font-blod my-2">当前播放</div>
          <div class="flex flex-row items-center justify-between">
            <span>共&nbsp;{{ playListCount }}&nbsp;首</span>
            <div class="flex flex-row" @click="clearPlayList">
              <IconPark :icon="Delete" />
              <span>清空列表</span>
            </div>
          </div>
        </div>
        <div class="flex-1 overflow-hidden">
          <el-scrollbar>
            <div
              v-for="song in playList"
              :key="song.id"
              class="play-list-item flex flex-row items-center justify-between box-border px-2 py-2 border-t border-solid border-gray-300 hover-text"
              :class="[song.id === playId ? 'text-emerald-300' : '']"
              @dblclick="getPlay(song.id)"
            >
              <img
                alt="专辑图片"
                class="w-12 h-12 rounded"
                :src="song.al?.picUrl || opticalDisk"
              />
              <span>{{ song.name }}</span>
              <span>{{ first(song.ar)?.name || 'willysliang' }}</span>
              <span>{{ formatDuring(song.dt / 1000) }}</span>
            </div>
          </el-scrollbar>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<style lang="scss">
/* stylelint-disable selector-pseudo-class-no-unknown */
.badge {
	.el-badge__content {
		color: var(--theme-text-color);
		background-color: var(--theme-text-bg-color);
		font-size: 0.1rem;
		padding: 0 3px;
		height: 0.8rem;
		top: 0;
		right: 0.7rem;
	}
}

.play-list {
	top: 3.5rem !important;
	bottom: 4rem !important;
	height: calc(100% - 3.5rem - 4rem) !important;

	.el-drawer__body {
		padding: 0;
		color: #000;
	}

	/* 列表 */
	.play-list-item {
		&:last-child {
			@apply border-b border-solid border-gray-300;
		}

		&:nth-child(2n + 1) {
			@apply bg-slate-400
    }
	}
}
</style>
