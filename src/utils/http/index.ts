import axios from 'axios'
// import { baseURL } from '@/config/http'

const service = axios.create({
  // baseURL,
  timeout: 120000, // request timeout
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // do something
    return config
  },
  (error) => {
    Promise.reject(error)
  },
)

// 响应拦截器
service.interceptors.response.use(
  async (response) => {
    // do something
    return response.data
  },
  (error) => {
    // do something
    return Promise.reject(error)
  },
)

export default service
