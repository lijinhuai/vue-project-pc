/* layout */
import Main from '@/views/main/Main.vue'
const _import = require('./_import_' + process.env.NODE_ENV)
// in development env not use Lazy Loading,because Lazy Loading too many pages will cause webpack hot update too slow.so only in production use Lazy Loading

/**
 * icon : the icon show in the sidebar
 * hidden : if `hidden:true` will not show in the sidebar
 * redirect : if `redirect:noredirect` will no redirct in the levelbar
 * noDropdown : if `noDropdown:true` will has no submenu
 * meta : { role: ['admin'] }  will control the page role
 **/

// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
  path: '/login',
  name: 'login',
  meta: {
    title: 'Login - 登录'
  },
  component: _import('login/login')
}

export const page404 = {
  path: '/*',
  name: 'error_404',
  meta: {
    title: '404-页面不存在'
  },
  component: _import('error_page/404')
}

export const page401 = {
  path: '/401',
  meta: {
    title: '401-权限不足'
  },
  name: 'error_401',
  component: _import('error_page/401')
}

export const page500 = {
  path: '/500',
  meta: {
    title: '500-服务端错误'
  },
  name: 'error_500',
  component: _import('error_page/500')
}

export const locking = {
  path: '/locking',
  name: 'locking',
  component: _import('main/components/lockscreen/components/locking-page')
}

export const bigData = {
  path: '/bigdata',
  meta: {
    title: '大数据展示平台'
  },
  name: 'big_data',
  component: _import('big-data/big-data')
}

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
  path: '/',
  name: 'otherRouter',
  component: Main,
  children: [{
    path: 'home',
    title: {
      i18n: 'home'
    },
    name: 'home_index',
    component: resolve => {
      require(['../views/home/home.vue'], resolve)
    }
  },
  {
    path: 'ownspace',
    title: '个人中心',
    name: 'ownspace_index',
    component: resolve => {
      require(['../views/own-space/own-space.vue'], resolve)
    }
  },
  {
    path: 'message',
    title: '消息中心',
    name: 'message_index',
    component: resolve => {
      require(['../views/message/message.vue'], resolve)
    }
  }
  ]
}

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [{
  path: '/sysmanage',
  icon: 'ios-gear',
  name: 'sysmanage',
  title: '系统管理',
  component: Main,
  children: [{
    path: 'usermanage',
    icon: 'compose',
    name: 'usermanage',
    title: '用户管理',
    component: _import('sysmanage/user/user-manage')
  },
  {
    path: 'rolemanage',
    icon: 'compose',
    name: 'rolemanage',
    title: '角色管理',
    component: _import('sysmanage/role/role-manage')
  }
  ]
},
{
  path: '/cxtj',
  icon: 'social-buffer',
  name: 'cxtj',
  title: '查询统计',
  component: Main,
  children: [{
    path: 'rfgl',
    icon: 'person-add',
    name: 'rfgl',
    title: '人房关联',
    component: _import('cxtj/rfgl/rfgl')
  },
  {
    path: 'rycx',
    icon: 'person',
    name: 'rycx',
    title: '人员查询',
    component: _import('cxtj/rycx/rycx')
  },
  {
    path: 'fwcx',
    icon: 'home',
    name: 'fwcx',
    title: '房屋查询',
    component: _import('cxtj/fwcx/fwcx')
  }
  ]
}
]

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
  loginRouter,
  otherRouter,
  locking,
  ...appRouter,
  page500,
  page401,
  page404,
  bigData
]

export const constantRouterMap = [loginRouter,
  otherRouter,
  locking,
  page500,
  page401,
  page404,
  bigData
]

export const asyncRouterMap = [
  otherRouter,
  ...appRouter
]
