import axios from 'axios'
import { ElMessage } from 'element-plus'

enum MSGS {
  "请求成功" = 200,
  "请求错误",
  "请重新登录"
}

const service = axios.create({
  baseURL: 'http://127.0.0.1:4523/mock/986133',
  timeout: 3000,
  headers: {
    'Content-Type': 'application-json;charset="utf-8'
  }
})

// 请求拦截器
service.interceptors.request.use(config => {
  config.headers = config.headers || {}
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.token = localStorage.getItem('token') || ''
  }
  return config
}, error => {
  return Promise.reject(error);
})

// 响应拦截器
service.interceptors.response.use( response => {
  // 2xx 范围内的状态码都会触发该函数。
  // let code:number = response.data.code

  // if(code != 200) {
  //   ElMessage.error(MSGS[code])
  //   return Promise.reject(response.data);
  // }
  // 对响应数据做点什么
  return response.data;
},  error => {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default service