/**
 * @ Author: willysliang
 * @ Create Time: 2022-11-11 17:35:20
 * @ Modified by: willysliang
 * @ Modified time: 2022-11-11 18:46:50
 * @ Description: 音乐馆接口
 */

import { TopListDetail } from '@/types/musicHall'
import http from '@/utils/http'
import type { PlayListDetail, PlaylistHighqualityTag } from '@type/playlist'

/** 热门歌单分类 */
export async function usePlaylistHighqualityTags () {
  const { tags } = await http.get<{ tags: PlaylistHighqualityTag[] }>({
    url: '/api/playlist/highquality/tags',
  })
  return tags
}

/** 获取精品歌单 */
export async function useTopPlaylistHighquality (params?: {
  limit?: number
  before?: number
  cat: string
}) {
  return await http.get<{
    playlists: PlayListDetail[]
    total: number
    more: boolean
    lasttime: number
  }>({
    url: '/api/top/playlist/highquality',
    params,
  })
}

/** 获取所有榜单内容摘要 */
export async function useTopListDetail () {
  const { list } = await http.get<{ list: TopListDetail[] }>({
    url: '/api/toplist/detail',
  })
  return list
}
