import router from './index'
import {
  routers
} from '@/router/router'

import store from '@/store/index'

import AppUtil from '@/utils/app'
import Cookies from 'js-cookie'

import config from '@/config/index'

import {
  LoadingBar
} from 'iview'

// permissiom judge
function hasPermission (roles, permissionPrivilege) {
  if (!permissionPrivilege) return true
  let hasPermission
  roles.map(role => {
    hasPermission = role.privileges.some(privilege => permissionPrivilege === privilege.code)
  })
  return hasPermission
}

// register global progress.
const whiteList = ['/login'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  LoadingBar.start() // 开启Progress
  AppUtil.title(to.meta.title === undefined ? config.systemTitle : to.meta.title)
  if (Cookies.get('locking') === '1' && to.name !== 'locking') { // 判断当前是否是锁定状态
    next({
      replace: true,
      name: 'locking'
    })
    LoadingBar.finish()
  } else if (Cookies.get('locking') === '0' && to.name === 'locking') {
    next(false)
  } else {
    if (store.getters.token) { // 有token 已登录
      if (to.name === 'login') { // 前往的是登录页
        AppUtil.title()
        next({
          name: 'home_index'
        })
      } else { // 前往的不是登录页
        if (store.getters.roles.length === 0) { // 判断当前用户是否已拉取完user_info信息
          store.dispatch('GetUserInfo').then(res => { // 拉取user_info
            const roles = res.data.roles
            store.dispatch('GenerateMenuRoutes', {
              roles
            }).then(() => { // 根据用户角色权限生成可访问的菜单路由
              next({
                ...to
              })
            })
          }).catch(() => {
            store.dispatch('FedLogOut').then(() => {
              next({
                name: 'login'
              })
              LoadingBar.finish()
            })
          })
        } else {
          // 根据用户所有用的权限判断是否允许访问当前页面
          if (hasPermission(store.getters.roles, to.meta.privilege)) {
            AppUtil.toDefaultPage([...routers], to.name, router, next)
          } else {
            next({
              path: '/401',
              query: {
                noGoBack: true
              }
            })
          }
        }
      }
    } else { // 没有token 未登录
      if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
        next()
      } else {
        next({
          name: 'login'
        }) // 否则全部重定向到登录页
        LoadingBar.finish() // 在hash模式下 改变手动改变hash 重定向回来 不会触发afterEach 暂时hack方案 ps：history模式下无问题，可删除该行！
      }
    }
  }
})

router.afterEach((to) => {
  AppUtil.openNewPage(router.app, to.name, to.params, to.query)
  LoadingBar.finish() // 结束Progress
})
