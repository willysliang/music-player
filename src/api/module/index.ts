import request from '@/utils/http'

/**
 * 登录
 */
export const getUsers = () => {
  return request({
    url: '/api/getUsers',
    method: 'get',
    data: {
    },
  })
}
