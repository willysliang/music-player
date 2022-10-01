import axios, { type AxiosRequestConfig, AxiosResponse } from 'axios'
import { errorMessage } from './status'
// import { ElMessage } from 'element-plus'

// axios.defaults.baseURL = localStorage.getItem('BASE_URL')?.toString()
axios.defaults.timeout = 20 * 1000 // 如果请求超时，请求将被中断
axios.defaults.maxBodyLength = 5 * 1024 * 1024 // 请求参数最长度
axios.defaults.withCredentials = true // 允许携带cookie
axios.defaults.headers.post['Access-Control-Allow-Origin-Type'] = '*' // 允许跨域
axios.defaults.headers.post['Content-Type'] = 'application/json' // 默认使用 application/json 形式

// 请求拦截器
axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    config.params = {
      ...config.params,
      timeNow: Date.now(),
    }
    if (config?.headers?.Authorization) {
      config.headers.Authorization = `Bearer willysliang`
    }
    return config
  },
  (err) => Promise.reject(err),
)

// 添加响应拦截器
axios.interceptors.response.use(
  (res: AxiosResponse) => {
    if (res.status === 200) {
      return res
    }
    errorMessage(res.status)
    return Promise.reject(res)
  },
  (error) => {
    const { res } = error
    if (res) {
      // 请求已发出，但是不在2xx的范围
      errorMessage(res.status)
      return Promise.reject(res.data)
    }
    errorMessage('网络连接异常,请稍后再试!')
  },
)

interface Http {
  get<T>(uconfig: AxiosRequestConfig): Promise<T>

  post<T>(config: AxiosRequestConfig): Promise<T>

  upload<T>(config: AxiosRequestConfig): Promise<T>

  put<T>(config: AxiosRequestConfig): Promise<T>

  delete<T>(config: AxiosRequestConfig): Promise<T>

  download(config: AxiosRequestConfig): void
}

// export const get = <T>({
//   url = '',
//   params,
// }: AxiosRequestConfig): Promise<T> => {
//   return new Promise((resolve, reject) => {
//     axios
//       .get(url, { params })
//       .then((res) => {
//         resolve(res.data)
//       })
//       .catch((err) => {
//         reject(err.data)
//       })
//   })
// }

const http: Http = {
  get ({ url = '', params }) {
    return new Promise((resolve, reject) => {
      axios
        .get(url, { params })
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          reject(err.data)
        })
    })
  },

  post ({ url = '', params }) {
    return new Promise((resolve, reject) => {
      axios
        .post(url, JSON.stringify(params))
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          reject(err.data)
        })
    })
  },

  put ({ url = '', params }) {
    return new Promise((resolve, reject) => {
      axios
        .put(url, JSON.stringify(params))
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          reject(err.data)
        })
    })
  },

  delete ({ url = '', params }) {
    return new Promise((resolve, reject) => {
      axios
        .delete(url, { params })
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          reject(err.data)
        })
    })
  },

  upload ({ url = '', params: file }) {
    return new Promise((resolve, reject) => {
      axios
        .post(url, file, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          reject(err.data)
        })
    })
  },

  download ({ url = '' }) {
    const iframe = document.createElement('iframe')
    iframe.style.display = 'none'
    iframe.src = url
    iframe.onload = function () {
      document.body.removeChild(iframe)
    }

    document.body.appendChild(iframe)
  },
}

export default http
