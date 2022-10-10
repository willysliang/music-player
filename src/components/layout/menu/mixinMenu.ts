import {
  Planet,
  Music,
  VideoOne,
  Fm,
  Like,
  Computer,
  DownloadThree,
  PlayTwo,
} from '@icon-park/vue-next'
import { Icon } from '@icon-park/vue-next/lib/runtime'
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Pages } from '@/router/constant'

interface IMenu {
  name: string // 菜单名称
  key: string // 菜单关键字
  icon: Icon // 菜单图标
  theme: 'outline' | 'filled' | 'two-tone' | 'multi-color' // 图标样式
}

interface IMenuList {
  name: string
  key: string
  children: IMenu[]
}

export function useMixinMenu () {
  const menuList: IMenuList[] = [
    {
      name: '在线音乐',
      key: 'onlineMusic',
      children: [
        {
          name: '推荐',
          key: Pages.DISCOVER,
          icon: Planet,
          theme: 'outline',
        },
        {
          name: '音乐馆',
          key: 'music',
          icon: Music,
          theme: 'outline',
        },
        {
          name: '视频',
          key: 'video',
          icon: VideoOne,
          theme: 'outline',
        },
        {
          name: '电台',
          key: 'dj',
          icon: Fm,
          theme: 'outline',
        },
      ],
    },
    {
      name: '我的音乐',
      key: 'mineMusic',
      children: [
        {
          name: '我喜欢',
          key: 'love',
          icon: Like,
          theme: 'outline',
        },
        {
          name: '本地歌曲',
          key: 'local',
          icon: Computer,
          theme: 'outline',
        },
        {
          name: '下载歌曲',
          key: 'download',
          icon: DownloadThree,
          theme: 'outline',
        },
        {
          name: '最近播放',
          key: 'recently',
          icon: PlayTwo,
          theme: 'outline',
        },
      ],
    },
  ]

  /* 获取路由 */
  const route = useRoute()
  const router = useRouter()

  /* 当前所选中的菜单项 */
  const currentMenuKey = ref(route.meta?.key)
  watch(
    () => route.meta.key,
    (newVal) => {
      currentMenuKey.value = newVal
    },
  )

  /* 选择菜单项 */
  const handleMenuSelect = (menu: IMenu) => {
    router.push({ name: menu.key, replace: true })
  }

  return {
    menuList,
    currentMenuKey,
    handleMenuSelect,
  }
}
