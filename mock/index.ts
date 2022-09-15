import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/api/getUsers',
    method: 'get',
    response: () => ({
      code: 0,
      message: 'ok',
      data: ['aa', 'bb']
    })
  },
] as MockMethod[]
