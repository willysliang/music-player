/**
 * @ Author: willysliang
 * @ Create Time: 2022-10-10 14:00:34
 * @ Modified by: willysliang
 * @ Modified time: 2022-10-10 14:01:38
 * @ Description: 歌手相关的数据集
 */

export interface Artist {
  albumSize: number
  alias: string[]
  briefDesc: string
  fansCount: number
  followed: boolean
  id: number
  img1v1Id: number
  img1v1Id_str: string
  img1v1Url: string
  musicSize: number
  name: string
  picId: number
  picId_str: string
  picUrl: string
  topicPerson: number
  trans: string
}

export interface Mv {
  id: number
  name: string
  status: number
  artistName: string
  artist: Artist
  imgurl16v9: string
  imgurl: string
  duration: number
  playCount: number
  publishTime: string
  subed: boolean
}
