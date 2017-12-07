import {
  loginByUsername,
  logout,
  getUserInfo
} from '@/api/login'
import {
  getToken,
  setToken,
  removeToken
} from '@/utils/auth'

import Cookies from 'js-cookie'

const user = {
  state: {
    user: '',
    status: '',
    code: '',
    token: getToken(),
    name: '',
    avatar: '',
    introduction: '',
    roles: [],
    setting: {
      articlePlatform: []
    }
  },

  mutations: {
    SET_CODE: (state, code) => {
      state.code = code
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction
    },
    SET_SETTING: (state, setting) => {
      state.setting = setting
    },
    SET_STATUS: (state, status) => {
      state.status = status
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },

  actions: {
    // 用户名登录
    LoginByUsername ({
      commit
    }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        loginByUsername(username, userInfo.password).then(response => {
          const data = response.data
          if (data.code !== 0) {
            // reject('SET_SETTING')
          } else {
            setToken(data.data)
            commit('SET_TOKEN', data.data)
            Cookies.set('user', username)
            Cookies.set('password', userInfo.password)
            commit(
              'setAvator',
              'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1512529926&di=c92afacc5626da6084148693f630f03d&src=http://wx3.sinaimg.cn/wap720/e629955ely1fbth7eblbmj21b60qowld.jpg'
            )
            if (username === 'iview_admin') {
              Cookies.set('access', 0)
            } else {
              Cookies.set('access', 1)
            }
            resolve()
          }
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetUserInfo ({
      commit,
      state
    }) {
      return new Promise((resolve, reject) => {
        getUserInfo().then(response => {
          const data = response.data
          commit('SET_ROLES', data.data.role)
          // commit('SET_NAME', data.name)
          // commit('SET_AVATAR', data.avatar)
          // commit('SET_INTRODUCTION', data.introduction)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 第三方验证登录
    // LoginByThirdparty({ commit, state }, code) {
    //   return new Promise((resolve, reject) => {
    //     commit('SET_CODE', code)
    //     loginByThirdparty(state.status, state.email, state.code).then(response => {
    //       commit('SET_TOKEN', response.data.token)
    //       setToken(response.data.token)
    //       resolve()
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },

    // 登出
    LogOut ({
      commit,
      state
    }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut ({
      commit
    }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        Cookies.remove('user')
        Cookies.remove('password')
        Cookies.remove('access')
        // 恢复默认样式
        let themeLink = document.querySelector('link[name="theme"]')
        themeLink.setAttribute('href', '')
        // 清空打开的页面等数据，但是保存主题数据
        let theme = ''
        if (localStorage.theme) {
          theme = localStorage.theme
        }
        localStorage.clear()
        if (theme) {
          localStorage.theme = theme
        }
        resolve()
      })
    },

    // 动态修改权限
    ChangeRole ({
      commit
    }, role) {
      return new Promise(resolve => {
        commit('SET_TOKEN', role)
        setToken(role)
        getUserInfo(role).then(response => {
          const data = response.data
          commit('SET_ROLES', data.role)
          commit('SET_NAME', data.name)
          commit('SET_AVATAR', data.avatar)
          commit('SET_INTRODUCTION', data.introduction)
          resolve()
        })
      })
    }
  }
}

export default user
