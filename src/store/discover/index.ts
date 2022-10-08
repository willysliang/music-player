/**
 * @ Author: willysliang
 * @ Create Time: 2022-10-08 18:41:13
 * @ Modified by: willysliang
 * @ Modified time: 2022-10-08 18:53:09
 * @ Description: 推荐页存储的数据
 */
import { useBanner } from '@/api/module/discover'
import { Banner } from '@/types/discover'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDiscoverStore = defineStore('discover', () => {
  /***
   * 轮播图数据
   */
  const banners = ref<Banner[]>([])
  const getBanners = async () => {
    if (banners.value.length > 0) return undefined
    banners.value = await useBanner()
  }

  return {
    banners,
    getBanners,
  }
})
