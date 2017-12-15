import router from './index'
import {
  routers,
  otherRouter,
  appRouter
} from '@/router/router'

import store from '@/store/index'

import AppUtil from '@/utils/app'
import Cookies from 'js-cookie'

import config from '@/config/index'

import {
  LoadingBar
} from 'iview'

// permissiom judge
function hasPermission (roles, permissionRoles) {
  if (roles.indexOf('admin') >= 0) return true // admin权限 直接通过
  if (!permissionRoles) return true
  return roles.some(role => permissionRoles.indexOf(role) >= 0)
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
        if (store.getters.roles.length !== 0) { // 判断当前用户是否已拉取完user_info信息
          store.dispatch('GetUserInfo').then(res => { // 拉取user_info
            const roles = res.data.data.role
            store.dispatch('GenerateRoutes', {
              roles
            }).then(() => { // 生成可访问的路由表
              router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
              next({
                ...to
              }) // hack方法 确保addRoutes已完成
            })
          }).catch(() => {
            store.dispatch('FedLogOut').then(() => {
              next({
                name: 'login'
              })
            })
          })
        } else {
          // 没有动态改变权限的需求可直接next() 删除下方权限判断 ↓
          if (hasPermission(store.getters.roles, to.meta.role)) {
            const curRouterObj = AppUtil.getRouterObjByName([otherRouter, ...appRouter], to.name)
            if (curRouterObj && curRouterObj.access !== undefined) { // 需要判断权限的路由
              if (curRouterObj.access === parseInt(Cookies.get('access'))) {
                AppUtil.toDefaultPage([otherRouter, ...appRouter], to.name, router, next) // 如果在地址栏输入的是一级菜单则默认打开其第一个二级菜单的页面
              } else {
                next({
                  replace: true,
                  name: 'error-403'
                })
              }
            } else { // 没有配置权限的路由, 直接通过
              AppUtil.toDefaultPage([...routers], to.name, router, next)
            }
          } else {
            next({
              path: '/401',
              query: {
                noGoBack: true
              }
            })
          }
          // 可删 ↑
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
