<!--
 * @ Author: willysliang
 * @ Create Time: 2022-11-09 10:57:22
 * @ Modified by: willysliang
 * @ Modified time: 2022-11-10 11:13:23
 * @ Description: 专辑评论组件
 -->
<script setup lang="ts">
import { useAlbumComment } from '@api/album'
import { reactive, ref, watch } from 'vue'
import { avactor } from '@/assets/images'
import type { IComment } from '@type/comments'
import { formatDate } from '@util/format'
import { EmotionHappy, ThumbsUp, ShareTwo, Comments } from '@icon-park/vue-next'

const props = defineProps<{
  id: number
}>()

const comments = ref<IComment[]>([] as IComment[])
const pageData = reactive({
  limit: 20, // 分页数量
  page: 1, // 当前所在页
  offset: 0, // 数据偏移量
  loading: false, // 加载更多时触发的判定
  noMore: false, // 是否还能加载更多
  total: 0, // 歌曲总数
})

/** 获取接口评论数据 */
const getData = async () => {
  try {
    pageData.loading = true
    const res = await useAlbumComment(props.id)
    comments.value = res.comments
    pageData.total = res.total
    pageData.noMore = !res.more
  } catch {}
  pageData.loading = false
}
watch(() => props.id, getData, { immediate: true })

/***
 * 评论
 */
const commentVal = ref('')
</script>

<template>
  <div class="w-11/12 mx-auto">
    <div class="my-2 box-border pb-4">
      <el-input
        v-model="commentVal"
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 4 }"
        placeholder="请输入评论内容"
        maxlength="1000"
        clearable
        show-word-limit
      />
      <div
        class="flex flex-row items-center justify-between text-base text-gray-500 my-2"
      >
        <div class="flex flex-row items-center cursor-pointer font-sans">
          <IconPark
            :icon="EmotionHappy"
            size="19"
            class="text-gray-500 pr-2 cursor-pointer"
          />
          <span class="pr-2 pl-1 cursor-pointer">@</span>
          <span class="pr-2 pl-1 cursor-pointer">#</span>
        </div>
        <el-button round>评论</el-button>
      </div>
    </div>

    <div
      v-for="comment in comments"
      :key="comment.commentId"
      class="box-border my-4"
    >
      <div class="flex flex-row border-b border-solid border-gray-200">
        <el-avatar :src="comment.user?.avatarUrl || avactor" />
        <div class="flex-1 flex flex-col justify-around box-border px-4 py-2">
          <div class="leading-4">
            <span class="text-blue-500">{{
              comment.user?.nickname || ''
            }}</span>
            <span v-html="':&nbsp;' + comment.content"></span>
          </div>
          <div
            class="flex flex-row items-center justify-between text-xs mt-2 text-gray-400"
          >
            <div>{{ formatDate(comment.time) }}</div>
            <div class="flex flex-row items-center">
              <div class="px-2 flex flex-row items-end">
                <IconPark
                  :icon="ThumbsUp"
                  :size="15"
                  class="pr-1 cursor-pointer"
                />
                <span>{{ comment.likedCount }}</span>
              </div>

              <IconPark
                :icon="ShareTwo"
                :size="15"
                class="px-2 border-l border-solid border-gray-400 cursor-pointer"
              />
              <IconPark
                :icon="Comments"
                :size="15"
                class="px-2 border-l border-solid border-gray-400 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
