import axios from 'axios'
import Config from '@/config'

// 创建axios实例
const service = axios.create({
  baseURL: Config.baseURL, // api 的 base_url
  timeout: Config.timeout // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    //console.log(config)
    return config
  },
  error => {
    // Do something with request error
    //console.log(error) // for debug
    Promise.reject(error)
  }
)

// 添加响应拦截器
service.interceptors.response.use(
  config => {
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
);

export default service;