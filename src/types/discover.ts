/**
 * @ Author: willysliang
 * @ Create Time: 2022-10-08 18:34:25
 * @ Modified by: willysliang
 * @ Modified time: 2022-10-09 09:34:23
 * @ Description: 推荐页的定义类型
 */

/* 轮播图 */
export interface Banner {
  imageUrl: string
  targetId: number
  targetType: number
  typeTitle: string
}

/* 推荐歌单 */
export interface PersonalizedSongList {
  id: number
  type: number
  name: string
  copywriter: string
  picUrl: string
  canDislike: boolean
  trackNumberUpdateTime: number
  playCount: number
  trackCount: number
  highQuality: boolean
  alg: string
}
