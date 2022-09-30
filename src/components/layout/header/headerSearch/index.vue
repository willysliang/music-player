<template>
  <div ref="searchRef" class="flex-1 box-border px-12">
    <el-popover
      v-model:visible="showSearchView"
      placement="bottom"
      popper-style="max-width:auto;padding:0;"
      :width="popoverWidth"
    >
      <template #reference>
        <el-input
          v-model="searchKeyword"
          placeholder="搜索音乐、MV、歌单"
          :prefix-icon="Search"
          maxlength="30"
          class="rounded-2xl overflow-hidden"
          clearable
          @input="handleSearch"
          @focus="showSearchView = true"
          @focusout="showSearchView = false"
        />
      </template>
      <div class="h-96">
        <el-scrollbar>
          <div v-if="!searchKeyword" class="pl-2 pr-3.5">
            <div class="py-2">热门搜索</div>
            <div
              v-for="(item, index) in searchHot"
              :key="index"
              class="flex justify-between items-center box-border py-2 cursor-pointer text-xs hover-text"
            >
              <div>
                <span>{{ index + 1 }}.</span>
                <span>{{ item.searchWord }}</span>
              </div>
              <div class="text-red-300">{{ formatQuantity(item.score) }}</div>
            </div>
          </div>
          <SearchSuggestDOM v-else :suggest-data="suggestData" />
        </el-scrollbar>
      </div>
    </el-popover>
  </div>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
import SearchSuggestDOM from '@comp/layout/header/headerSearch/SearchSuggest.vue'
import { ref, onMounted, onBeforeMount } from 'vue'
import { debounce } from 'lodash'
import type {
  SearchHotDetail,
  SearchSuggest as typeSearchSuggest,
} from '@/types/search'
import { useSearchHotDetail, useSearchSuggest } from '@/api/module/search'
import { formatQuantity } from '@/utils/format'

/***
 * 计算 input 框的长度，来让下拉框响应式显示宽度
 */
const searchRef = ref<HTMLElement>()
const popoverWidth = ref<unknown>('250px')
onMounted(() => {
  popoverWidth.value = searchRef.value?.offsetWidth || '250px'
})

/***
 * 搜索
 */
const searchKeyword = ref<string>('')
const showSearchView = ref<boolean>(false)
const suggestData = ref<typeSearchSuggest>({} as typeSearchSuggest)
const handleSearch = debounce(
  async () => {
    suggestData.value = await useSearchSuggest(searchKeyword.value)
  },
  500,
  {
    maxWait: 1000,
  },
)

/***
 * 热门搜索
 */
const searchHot = ref<SearchHotDetail[]>([])
onBeforeMount(async () => {
  searchHot.value = await useSearchHotDetail()
})
</script>

<style lang="scss"></style>
