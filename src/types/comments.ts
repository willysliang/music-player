/**
 * @ Author: willysliang
 * @ Create Time: 2022-11-10 09:28:30
 * @ Modified by: willysliang
 * @ Modified time: 2022-11-10 09:29:06
 * @ Description: 评论数据集约束
 */

/** 评论 */
export interface IComment {
  commentId: number
  content: string
  time: Date
  liked: boolean
  likedCount: number
  parentCommentId: number
  status: number
  user: {
    /** 昵称 */
    nickname: string
    avatarUrl: string
    userId: number
    userType: number
    vipType: number
  }
  ipLocation: {
    ip: null | string
    location: string
    userId: null | string
  }
}

/** 专辑评论 */
export interface IAlbumComment {
  cnum: number
  code: number
  commentBanner: any
  comments: IComment[]
  hotComments: IComment[]
  isMusician: false
  more: boolean
  moreHot: boolean
  total: number
  userId: number
}
