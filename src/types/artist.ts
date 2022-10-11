/**
 * @ Author: willysliang
 * @ Create Time: 2022-10-10 14:00:34
 * @ Modified by: willysliang
 * @ Modified time: 2022-10-11 09:34:23
 * @ Description: 歌手相关的数据集
 */

/***
 * 歌手信息
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

export interface ArtistDetailIdentify {
  imageUrl?: any
  imageDesc: string
  actionUrl: string
}
export interface ArtistDetailArtistRank {
  rank: number
  type: number
}
export interface ArtistDetailArtist {
  id: number
  cover: string
  name: string
  transNames: string[]
  identities: string[]
  identifyTag?: any
  briefDesc: string
  rank: ArtistDetailArtistRank
  albumSize: number
  musicSize: number
  mvSize: number
}

export interface ArtistDetailSecondaryExpertIdentiy {
  expertIdentiyId: number
  expertIdentiyName: string
  expertIdentiyCount: number
}

/***
 * 歌手详情信息
 */
export interface ArtistDetail {
  videoCount: number
  identify: ArtistDetailIdentify
  artist: ArtistDetailArtist
  blacklist: boolean
  preferShow: number
  showPriMsg: boolean
  secondaryExpertIdentiy: ArtistDetailSecondaryExpertIdentiy[]
}
