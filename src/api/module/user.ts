import http from '@/utils/http'
import type { UserProfile } from '@/types/user'

/***
 * 登录
 */
export const useLogin = async (phone: string, password: string) => {
  return await http.get<{
    code: number
    cookie: string
    token: string
  }>('login/cellphone', { phone, password })
}

/***
 * 获取登录状态
 */
export const useLoginStatus = async () => {
  return await http.get<{
    data: {
      code: number
      profile: UserProfile
    }
  }>('login/status')
}
