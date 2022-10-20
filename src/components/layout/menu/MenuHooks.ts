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
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Pages } from '@/router/constant'
import { useThemeStore, ThemeLayout } from '@store/app/theme'
import { storeToRefs } from 'pinia'

interface IMenu {
  title?: string // 菜单名称
  key: string // 菜单关键字
  icon: Icon // 菜单图标
  theme: 'outline' | 'filled' | 'two-tone' | 'multi-color' // 图标样式
  name: string
}

interface IMenuList {
  title?: string
  key: string
  children: IMenu[]
  name: string
}

export const menuList: IMenuList[] = [
  {
    title: '在线音乐',
    name: 'onlineMusic',
    key: 'onlineMusic',
    children: [
      {
        title: '推荐',
        ...Pages.DISCOVER,
        icon: Planet,
        theme: 'outline',
      },
      {
        title: '音乐馆',
        key: 'music',
        name: 'music',
        icon: Music,
        theme: 'outline',
      },
      {
        title: '视频',
        name: 'music',
        key: 'video',
        icon: VideoOne,
        theme: 'outline',
      },
      {
        title: '电台',
        name: 'music',
        key: 'dj',
        icon: Fm,
        theme: 'outline',
      },
    ],
  },
  {
    title: '我的音乐',
    name: 'mineMusic',
    key: 'mineMusic',
    children: [
      {
        title: '我喜欢',
        name: 'music',
        key: 'love',
        icon: Like,
        theme: 'outline',
      },
      {
        title: '本地歌曲',
        name: 'music',
        key: 'local',
        icon: Computer,
        theme: 'outline',
      },
      {
        title: '下载歌曲',
        name: 'music',
        key: 'download',
        icon: DownloadThree,
        theme: 'outline',
      },
      {
        title: '最近播放',
        name: 'music',
        key: 'recently',
        icon: PlayTwo,
        theme: 'outline',
      },
    ],
  },
]

export function useMenuHooks () {
  /***
   * 判断主题是否为横栏
   */
  const { themeLayoutCurrent } = storeToRefs(useThemeStore())
  /** 判断主题是否为横栏 */
  const themeLayoutIsVertical = computed<boolean>(
    () => themeLayoutCurrent.value === ThemeLayout.MENU_SIDE,
  )

  /** 获取路由 */
  const route = useRoute()
  const router = useRouter()

  /** 当前所选中的菜单项 */
  const currentMenuKey = ref<string>((route.meta?.name || '') as string)
  watch(
    () => route.meta.name,
    (newVal) => {
      currentMenuKey.value = newVal as string
    },
  )

  /** 选择菜单项 */
  const handleMenuSelect = (name, indexPath) => {
    console.log(indexPath)
    router.push({ name, replace: false })
  }

  return {
    themeLayoutIsVertical,
    menuList,
    currentMenuKey,
    handleMenuSelect,
  }
}
