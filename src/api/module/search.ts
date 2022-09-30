import http from '@/utils/http'
import type { SearchSuggest, SearchHotDetail } from '@/types/search'

/* 搜索 */
export async function useSearchSuggest (keywords: string) {
  const { result } = await http.get<{ result: SearchSuggest }>(
    'search/suggest',
    { keywords },
  )
  return result
}

/* 热门搜索 */
export async function useSearchHotDetail () {
  const { data } = await http.get<{ data: SearchHotDetail[] }>(
    'search/hot/detail',
  )
  return data
}
