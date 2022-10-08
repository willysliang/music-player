/**
 * @ Author: willysliang
 * @ Create Time: 2022-10-08 18:32:34
 * @ Modified by: willysliang
 * @ Modified time: 2022-10-08 18:53:37
 * @ Description: 推荐页的接口
 */

import { Banner } from '@/types/discover'
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
