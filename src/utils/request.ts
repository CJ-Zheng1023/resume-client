import axios from 'axios'
const http = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL as string,
  timeout: 10000
})
http.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'
http.interceptors.response.use(
  response => {
    return response
  },
  error => {
    window.$message?.warning('查询接口失败')
    return Promise.reject(error)
  }
)
export default http
