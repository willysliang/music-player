import http from '@/utils/http'
import type { SearchSuggest } from '@/types/search'

export async function useSearchSuggest (keywords: string) {
  const { result } = await http.get<{ result: SearchSuggest }>(
    'search/suggest',
    { keywords },
  )
  return result
}
