/**
 * @ Author: willysliang
 * @ Create Time: 2022-10-11 09:35:48
 * @ Modified by: willysliang
 * @ Modified time: 2022-10-11 16:49:17
 * @ Description: 歌手详情的接口
 */
import type { ArtistDetail } from '@/types/artist'
import { Song } from '@/types/song'
import http from '@/utils/http'

/***
 * 歌手详情信息
 */
export const useArtistDetail = async (id: number) => {
  const { data } = await http.get<{ data: ArtistDetail }>({
    url: '/api/artist/detail',
    params: { id },
  })
  return data
}

/***
 * 歌手全部歌曲
 */
export const useArtistSongs = async (
  id: number,
  order = 'time',
  limit = 10,
  offset = 0,
) => {
  const { songs, total } = await http.get<{ songs: Song[]; total?: number }>({
    url: '/api/artist/songs',
    params: {
      id,
      order,
      limit,
      offset,
    },
  })
  return { songs, total }
}
