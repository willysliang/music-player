import { defineStore } from 'pinia'
import type { Song, SongUrl } from '@/types/song'

interface IPlayer {
  currentTime: number // 当前播放时间
  duration: number // 总播放时长
  isPlaying: boolean // 是否播放中
  isPause: boolean // 是否暂停
  sliderInput: boolean // 是否正在拖动进度条
  ended: boolean // 是否播放结束
  muted: false // 是否静音
  loopType: number // 循环模式 0 单曲循环 1 列表循环 2随机播放
  volume: number // 音量
  song: Song
  songUrl: SongUrl
}

export const usePlayerStore = defineStore({
  id: 'player',
  state: (): IPlayer => ({
    currentTime: 0, // 当前播放时间
    duration: 0, // 总播放时长
    sliderInput: false, // 是否正在拖动进度条
    isPlaying: false, // 是否播放中
    isPause: false, // 是否暂停
    ended: false, // 是否播放结束
    muted: false, // 是否静音
    loopType: 0, // 循环模式 0 单曲循环 1 列表循环 2随机播放
    volume: 60, // 音量
    song: {} as Song,
    songUrl: {} as SongUrl,
  }),

  actions: {},
})
