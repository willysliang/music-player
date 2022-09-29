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
          <div class="pb-2.5">
            <div v-if="showHot">
              <div class="pt-2 pb-1.5 px-2.5">热门搜索</div>
              <div>
                <div>ashkahskja</div>
                <div>ashkahskja</div>
                <div>ashkahskja</div>
                <div>ashkahskja</div>
                <div>ashkahskja</div>
                <div>ashkahskja</div>
                <div>ashkahskja</div>
                <div>ashkahskja</div>
                <!-- <div v-for="(item,index) in searchHot" :key="item.searchWord"
                   class="py-2.5 px-2.5 hover-text cursor-pointer flex justify-between items-center text-xs"
                   @click="hotClick(item.searchWord)">
                <div>
                  <span class="mr-1">{{ index + 1 }}.</span>
                  <span>{{ item.searchWord }}</span>
                </div>
                <div class="text-red-300 text-xs">{{ item.score.numberFormat() }}</div>
              </div> -->
              </div>
            </div>
            <!-- <SearchSuggest v-else/> -->
          </div>
        </el-scrollbar>
      </div>
    </el-popover>
  </div>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
import { ref, onMounted } from 'vue'
import { debounce } from 'lodash'
import { storeToRefs } from 'pinia'
import { useSearchStore } from '@/store/search'

const { showSearchView, searchKeyword, showHot } = storeToRefs(useSearchStore())
const { suggest } = useSearchStore()
const handleSearch = debounce(() => suggest(), 500, {
  maxWait: 1000,
})

/***
 * 计算 input 框的长度，来让下拉框响应式显示宽度
 */
const searchRef = ref<HTMLElement>()
const popoverWidth = ref<unknown>('250px')
onMounted(() => {
  popoverWidth.value = (searchRef.value?.offsetWidth || '250px')
  console.log(searchRef.value?.offsetWidth, searchRef.value?.clientWidth)
})
</script>

<style lang="scss"></style>
