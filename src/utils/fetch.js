import axios from 'axios'
import {
  Message,
  MessageBox
} from 'element-ui'
import store from '@/store/index'
import config from '@/config/index'

import {
  getToken
} from '@/utils/auth' // 验权

// 创建axios实例
const service = axios.create({
  baseURL: config.BASE_API, // api的base_url
  timeout: 1000 * 30 // 请求超时时间
})

let appLoading // 是否需要显示laoding
// request拦截器
service.interceptors.request.use(config => {
  appLoading = !config.noAppLoading
  if (appLoading) { // 判断否需要显示loading界面
    store.commit('appLoading', true)
  }
  // Do something before request is sent
  if (store.getters.token) {
    config.headers['Authorization'] = getToken() // 让每个请求携带token--['Authorization']为自定义key 请根据实际情况自行修改
  }
  return config
}, error => {
  store.commit('appLoading', false)
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  // response => response,
  response => {
    store.commit('appLoading', false)
    const res = response.data
    if (response.status === 200) {
      if (res.code) { // 返回结构包含code，是以JsonResult封装的形式返回
        if (res.code === 200) {
          return response.data
        } else {
          Message.error(res.message)
          // return Promise.resolve('error')
        }
      } else {
        return response.data
      }
    } else {
      Message.error(response.statusText)
    }
  },
  error => {
    store.commit('appLoading', false)
    console.log('err' + error) // for debug
    const res = error.response
    Message.error(error.message)
    // 403:非法的token或者过期了;
    if (res.status && res.status === 403) {
      MessageBox.confirm('认证超期，可以取消继续留在该页面，或者重新登录', '确定登出', {
        confirmButtonText: '重新登录',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        store.dispatch('FedLogOut').then(() => {
          store.commit('clearOpenedSubmenu')
          // this.$router.push({
          //   name: 'login'
          // })
          location.reload() // 为了重新实例化vue-router对象 避免bug
        })
      }).catch(() => {
        return Promise.reject(error)
      })
    }
    return Promise.reject(error)
  }
)
export default service
