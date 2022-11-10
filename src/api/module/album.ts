/**
 * @ Author: willysliang
 * @ Create Time: 2022-10-10 14:23:50
 * @ Modified by: willysliang
 * @ Modified time: 2022-11-10 09:30:02
 * @ Description: 专辑详情页页的接口
 */

import type { Album } from '@/types/album'
import type { Song } from '@/types/song'
import type { IAlbumComment } from '@type/comments'
import http from '@/utils/http'

/* 获取专辑内容 */
export const useAlbum = async (id: number) => {
  const { album, songs } = await http.get<{ album: Album; songs: Song[] }>({
    url: '/api/album',
    params: { id },
  })

  return { album, songs }
}

/** 获取专辑评论 */
export const useAlbumComment = async (id: number, offset = 0, limit = 20) => {
  return await http.get<IAlbumComment>({
    url: '/api/comment/album',
    params: { id, limit, offset },
  })
}
