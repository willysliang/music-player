import type { IPagesType } from "@/types/constant";

/***
 * playlist展现的类型
*/
export const playlistType: IPagesType = {
  SONG: { // 歌单列表类型
    key: 'SONG',
    name: '歌单',
  },
  ALBUM: { // 专辑列表类型
    key: 'ALBUM',
    name: '专辑',
  },
  ARTIST: { // 歌手列表类型
    key: 'ARTIST',
    name: '歌手'
  },
}
