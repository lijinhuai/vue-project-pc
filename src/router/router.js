/* layout */
import Main from '@/views/main/Main.vue'
// in development env not use Lazy Loading,because Lazy Loading too many pages will cause webpack hot update too slow.so only in production use Lazy Loading
const _import = require('./_import_' + process.env.NODE_ENV)

/**
 * icon : the icon show in the sidebar
 * title : the name show in the sidebar
 * meta : { title: 'titleName' }  the title show in the Browser
 * meta : { privilege: ['privilegeName'] }  will control the page privilege
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
      // component: _import('home/home')
    component: _import('home-menu/home-menu')
  },
  {
    path: 'ownspace',
    title: '个人中心',
    name: 'ownspace_index',
    component: _import('own-space/own-space')
  },
  {
    path: 'message',
    title: '消息中心',
    name: 'message_index',
    component: _import('message/message')
  }
  ]
}

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [{
  path: 'gzgl',
  icon: 'social-buffer',
  name: 'gzgl',
  title: '感知管理',
  children: [{
    path: 'amapMenu',
    icon: 'earth',
    title: '智慧小区',
    name: 'amapMenu',
    redirect: {
      name: 'amap'
    }
  }, {
    path: 'gzgl1',
    icon: 'person-add',
    title: '测试1',
    name: 'gzgl1',
    redirect: {
      name: 'big_data'
    }
  }]
}, {
  path: '/sysmanage',
  icon: 'ios-gear',
  name: 'sysmanage',
  title: '系统管理',
  component: Main,
  children: [{
    path: 'usermanage',
    icon: 'compose',
    name: 'usermanage',
    meta: {
      privilege: 'USERMANAGE'
    },
    title: '用户管理',
    component: _import('sysmanage/user/user-manage')
  },
  {
    path: 'rolemanage',
    icon: 'compose',
    name: 'rolemanage',
    meta: {
      privilege: 'ROLEMANAGE'
    },
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
    meta: {
      privilege: 'RFGL'
    },
    title: '人房关联',
    component: _import('cxtj/rfgl/rfgl')
  },
  {
    path: 'rycx',
    icon: 'person',
    name: 'rycx',
    meta: {
      privilege: 'RYCX'
    },
    title: '人员查询',
    component: _import('cxtj/rycx/rycx')
  },
  {
    path: 'fwcx',
    icon: 'home',
    name: 'fwcx',
    meta: {
      privilege: 'FWCX'
    },
    title: '房屋查询',
    component: _import('cxtj/fwcx/fwcx')
  }
  ]
},
{
  path: '/mpgl',
  icon: 'social-buffer',
  name: 'mpgl',
  title: '门牌管理',
  component: Main,
  children: [{
    path: 'mpcx',
    icon: 'person-add',
    name: 'mpcx',
    meta: {
      privilege: 'MPCX'
    },
    title: '门牌查询',
    component: _import('mpgl/mpcx/mpcx')
  },
  {
    path: 'mpsq',
    icon: 'person-add',
    name: 'mpsq',
    meta: {
      privilege: 'MPSQ'
    },
    title: '门牌申请',
    component: _import('mpgl/mpsq/mpsq')
  },
  {
    path: 'mpsp',
    icon: 'person-add',
    name: 'mpsp',
    title: '门牌审批',
    meta: {
      privilege: 'MPSP'
    },
    component: _import('mpgl/mpsp/mpsp')
  }

  ]
}
]

// 独占页面的应用
export const singlePageRouter = [{
  path: '/bigdata',
  meta: {
    title: '大数据展示平台'
  },
  name: 'big_data',
  component: _import('big-data/big-data')
}, {
  path: '/amap',
  meta: {
    title: '地图展示'
  },
  name: 'amap',
  component: _import('map/map')
}, {
  path: '/ybls_home',
  name: 'ybls_home',
  meta: {
    title: '一标六实首页'
  },
  component: _import('ybls_home/ybls_home')
}, {
  path: '/ybls',
  name: 'ybls',
  meta: {
    title: '一标六实数据展示'
  },
  component: _import('map/components/Ybls')
}]

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
  ...appRouter,
  otherRouter,
  ...singlePageRouter,
  loginRouter,
  locking,
  page500,
  page401,
  page404
]
