import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css' // Progress 进度条样式
// import * as dictUtil from './utils/dict'
import {
  getToken
} from '@/utils/auth' // 验权

import Util from './libs/util'
import Cookies from 'js-cookie'
import {
  otherRouter,
  appRouter
} from '@/router/index'

// permissiom judge
function hasPermission (roles, permissionRoles) {
  if (roles.indexOf('admin') >= 0) return true // admin权限 直接通过
  if (!permissionRoles) return true
  return roles.some(role => permissionRoles.indexOf(role) >= 0)
}

// register global progress.
const whiteList = ['/login'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  NProgress.start() // 开启Progress
  Util.title(to.meta.title === undefined ? '金山区一标六实系统' : to.meta.title)
  if (Cookies.get('locking') === '1' && to.name !== 'locking') { // 判断当前是否是锁定状态
    next(false)
    router.replace({
      name: 'locking'
    })
  } else if (Cookies.get('locking') === '0' && to.name === 'locking') {
    next(false)
  } else {
    if (getToken()) { // 判断是否有token
      if (to.name === 'login') {
        Util.title()
        next({
          name: 'home_index'
        })
      } else {
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
            // next() //
            if (Util.getRouterObjByName([otherRouter, ...appRouter], to.name).access !== undefined) { // 判断用户是否有权限访问当前页
              if (Util.getRouterObjByName([otherRouter, ...appRouter], to.name).access === parseInt(Cookies.get('access'))) {
                Util.toDefaultPage([otherRouter, ...appRouter], to.name, router, next) // 如果在地址栏输入的是一级菜单则默认打开其第一个二级菜单的页面
              } else {
                router.replace({
                  name: 'error_401'
                })
                next()
              }
            } else {
              Util.toDefaultPage([otherRouter, ...appRouter], to.name, router, next)
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
    } else {
      if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
        next()
      } else {
        next({
          name: 'login'
        }) // 否则全部重定向到登录页
        NProgress.done() // 在hash模式下 改变手动改变hash 重定向回来 不会触发afterEach 暂时hack方案 ps：history模式下无问题，可删除该行！
      }
    }
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
