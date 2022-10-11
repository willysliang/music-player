/**
 * @ Author: willysliang
 * @ Create Time: 2022-10-11 09:35:48
 * @ Modified by: willysliang
 * @ Modified time: 2022-10-11 09:37:31
 * @ Description: 歌手详情的接口
 */
import type { ArtistDetail } from '@/types/artist'
import http from '@/utils/http'

/***
 * 歌手详情信息
*/
export const useArtistDetail = async (id: number) => {
  const { data } = await http.get<{ data: ArtistDetail }>({
    url: '/api/artist/detail',
    params: { id }
  })
  return data
}
