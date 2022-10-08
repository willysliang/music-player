<template>
  <div ref="searchRef" class="search flex-1 box-border mx-12">
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
import { ref, onBeforeMount, onMounted, onUnmounted } from 'vue'
import { debounce, throttle } from 'lodash'
import type {
  SearchHotDetail,
  SearchSuggest as typeSearchSuggest,
} from '@/types/search'
import { useSearchHotDetail, useSearchSuggest } from '@/api/module/search'
import { formatQuantity } from '@/utils/format'

/***
 * 计算 input 框的长度，来让下拉框响应式显示宽度
 * @getSearchWidth 动态监听屏幕的宽度变化，来响应式改变弹层大小
 * - 在挂载页面前，添加监听方法
 * - 在挂载页面后，获取 input 框的宽度进行赋值（因为 resize 只有在改变页面大小时才会触发，所以一般情况下是不会调用的，此时则需要赋初值）
 * - 在销毁页面前，移除所添加的监听方法
 */
const searchRef = ref<HTMLElement>()
const popoverWidth = ref<string | number>('250px')
const getSearchWidth = () => {
  return throttle(
    () => {
      popoverWidth.value = searchRef.value?.offsetWidth || '250px'
    },
    500,
    { trailing: true },
  )
}
onBeforeMount(() => {
  window.addEventListener('resize', getSearchWidth())
})
onMounted(() => {
  popoverWidth.value = searchRef.value?.offsetWidth || '250px'
})
onUnmounted(() => {
  window.removeEventListener('resize', getSearchWidth())
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

<style lang="scss" scoped>
.search {
	:deep(.el-input__wrapper) {
		@apply rounded-full text-xs bg-slate-100;
	}
}
</style>
