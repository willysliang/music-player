/**
 * @ Author: willysliang
 * @ Create Time: 2022-10-08 18:32:34
 * @ Modified by: willysliang
 * @ Modified time: 2022-10-09 09:37:29
 * @ Description: 推荐页的接口
 */

import { Banner, PersonalizedSongList } from '@/types/discover'
import http from '@/utils/http'

/* 获取 banner( 轮播图 ) 数据 */
export const useBanner = async () => {
  const { banners } = await http.get<{ banners: Banner[] }>({
    url: '/api/banner',
    params: {
      type: 0,
    },
  })
  return banners
}

/* 获取推荐歌单 */
export const usePersonalizedSongList = async () => {
  const { result } = await http.get<{ result: PersonalizedSongList[] }>({
    url: '/api/personalized',
    params: { limit: 30 },
  })
  return result
}
