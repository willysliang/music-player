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
  title?: string // 菜单名称
  key: string // 菜单关键字
  icon: Icon // 菜单图标
  theme: 'outline' | 'filled' | 'two-tone' | 'multi-color' // 图标样式
  name?: string
}

interface IMenuList {
  title?: string
  key: string
  children: IMenu[]
  name?: string
}

export function useMixinMenu () {
  const menuList: IMenuList[] = [
    {
      title: '在线音乐',
      key: 'onlineMusic',
      children: [
        {
          ...Pages.DISCOVER,
          icon: Planet,
          theme: 'outline',
        },
        {
          title: '音乐馆',
          key: 'music',
          icon: Music,
          theme: 'outline',
        },
        {
          title: '视频',
          key: 'video',
          icon: VideoOne,
          theme: 'outline',
        },
        {
          title: '电台',
          key: 'dj',
          icon: Fm,
          theme: 'outline',
        },
      ],
    },
    {
      title: '我的音乐',
      key: 'mineMusic',
      children: [
        {
          title: '我喜欢',
          key: 'love',
          icon: Like,
          theme: 'outline',
        },
        {
          title: '本地歌曲',
          key: 'local',
          icon: Computer,
          theme: 'outline',
        },
        {
          title: '下载歌曲',
          key: 'download',
          icon: DownloadThree,
          theme: 'outline',
        },
        {
          title: '最近播放',
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
    router.push({ name: menu?.name || menu.key, replace: true })
  }

  return {
    menuList,
    currentMenuKey,
    handleMenuSelect,
  }
}
