import {
  appRouter
} from '@/router/router'

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
function hasPermission (roles, route) {
  if (route.meta && route.meta.privilege) {
    let hasPermission
    roles.map(role => {
      hasPermission = role.privileges.some(privilege => route.meta.privilege === privilege.code)
    })
    return hasPermission
  } else {
    return true
  }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param routerMap
 * @param roles
 */
function filterAsyncRouter (routerMap, roles) {
  const accessedRouters = routerMap.filter(route => {
    if (hasPermission(roles, route)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, roles)
      }
      return true
    }
    return false
  })
  return accessedRouters
}

const permission = {
  actions: {
    GenerateMenuRoutes ({
      commit
    }, data) {
      return new Promise(resolve => {
        const {
          roles
        } = data
        const accessedRouters = filterAsyncRouter(appRouter, roles)
        commit('updateMenulist', accessedRouters)
        resolve()
      })
    }
  }
}

export default permission
