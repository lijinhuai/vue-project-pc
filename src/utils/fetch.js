import axios from 'axios'
import {
  Message,
  Modal
} from 'iview'
import store from '@/store/index'
import config from '@/config/index'

import {
  getToken
} from '@/utils/auth' // 验权

// 创建axios实例
const service = axios.create({
  baseURL: config.BASE_API, // api的base_url
  timeout: 10000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  // Do something before request is sent
  if (store.getters.token) {
    config.headers['Authorization'] = getToken() // 让每个请求携带token--['Authorization']为自定义key 请根据实际情况自行修改
  }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  // response => response,
  response => {
    const res = response.data
    if (response.status === 200) {
      if (res.code) { // 返回结构包含code，是以JsonResult封装的形式返回
        if (res.code === 200) {
          return response.data
        } else {
          Message.error(res.message, 5)
          // return Promise.resolve('error')
        }
      } else {
        return response.data
      }
    } else {
      Message.error(response.statusText, 5)
    }
  },
  error => {
    console.log('err' + error) // for debug
    const res = error.response
    Message.error(error.message, 5)
    // 403:非法的token或者过期了;
    if (res.status === 403) {
      Modal.warning({
        title: '确定登出',
        content: '<p>你已被登出，可以取消继续留在该页面，或者重新登录</p>',
        okText: '重新登录',
        onOk: () => {
          store.dispatch('FedLogOut').then(() => {
            store.commit('clearOpenedSubmenu')
            // this.$router.push({
            //   name: 'login'
            // })
            location.reload() // 为了重新实例化vue-router对象 避免bug
          })
        },
        cancelText: '取消',
        onCancel: () => {
          return Promise.reject(error)
        }
      })
    }
    return Promise.reject(error)
  }
)

export default service
