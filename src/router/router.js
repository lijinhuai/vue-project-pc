/* layout */
import Main from '@/views/main/Main.vue'
// in development env not use Lazy Loading,because Lazy Loading too many pages will cause webpack hot update too slow.so only in production use Lazy Loading
const _import = require('./_import_' + process.env.NODE_ENV)

/**
 * icon : the icon show in the sidebar
 * style : the style of the icon
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
  path: '/perception',
  icon: 'perception',
  name: 'perception',
  title: '感知管理',
  component: Main,
  children: [{
    path: 'amapMenu',
    icon: 'community',
    title: '智慧社区',
    name: 'amapMenu',
    meta: {
      privilege: 'ZHSQ'
    },
    redirect: {
      name: 'amap'
    }
  }, {
    path: 'yblsMenu',
    icon: 'ybls',
    title: '一标六实',
    name: 'yblsMenu',
    meta: {
      privilege: 'YBLS'
    },
    redirect: {
      name: 'ybls_unit'
    }
  }, {
    path: 'face',
    icon: 'face-recognition',
    style: 'background-color: #93ca08;',
    title: '人脸抓拍',
    name: 'face',
    meta: {
      privilege: 'RLZP'
    },
    component: _import('gzgl/face/face')
  }, {
    path: 'car',
    icon: 'car-recognition',
    style: 'background-color: #2b85e4;',
    title: '车辆识别',
    name: 'car',
    meta: {
      privilege: 'CPSB'
    },
    component: _import('gzgl/car/car')
  },
  {
    path: 'searchMenu',
    icon: 'search',
    title: '一键搜',
    name: 'searchMenu',
    meta: {
      privilege: 'YJS'
    },
    redirect: {
      name: 'search'
    }
  },
  {
    path: 'mapeditMenu',
    icon: 'duty-area',
    title: '责任区',
    name: 'mapeditMenu',
    meta: {
      privilege: 'ZRQ'
    },
    redirect: {
      name: 'mapedit'
    }
  }, {
    path: 'mappointMenu',
    icon: 'map-point',
    title: '点位标注',
    name: 'mappointMenu',
    meta: {
      privilege: 'DWBZ'
    },
    redirect: {
      name: 'mappoint'
    }
  },
  {
    path: 'model',
    icon: 'model',
    title: '模型',
    name: 'modelMenu',
    meta: {
      privilege: 'MODEL'
    },
    redirect: {
      name: 'model'
    }
  }
  ]
}, {
  path: '/sysmanage',
  icon: 'sysmanage',
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
  path: '/analysis',
  icon: 'analysis',
  name: 'analysis',
  title: '查询统计',
  component: Main,
  children: [{
    path: 'rfgl',
    icon: 'person-house',
    style: 'background-color:#f55a49;',
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
    style: 'background-color: #a36ded;',
    name: 'rycx',
    meta: {
      privilege: 'RYCX'
    },
    title: '人员查询',
    component: _import('cxtj/rycx/rycx')
  },
  {
    path: 'fwcx',
    icon: 'house',
    style: 'background-color:#ff3e99;',
    name: 'fwcx',
    meta: {
      privilege: 'FWCX'
    },
    title: '房屋查询',
    component: _import('cxtj/fwcx/fwcx')
  },
  {
    path: 'dwcx',
    icon: 'company',
    style: 'background-color:#ff3e99;',
    name: 'dwcx',
    meta: {
      privilege: 'DWCX'
    },
    title: '单位查询',
    component: _import('cxtj/dwcx/dwcx')
  }
  ]
},
{
  path: '/mpgl',
  icon: 'house-number',
  name: 'mpgl',
  title: '门牌管理',
  component: Main,
  children: [{
    path: 'mpcx',
    icon: 'house-number',
    name: 'mpcx',
    meta: {
      privilege: 'MPCX'
    },
    title: '门牌查询',
    component: _import('mpgl/mpcx/mpcx')
  },
  {
    path: 'mpsq',
    icon: 'house-number',
    name: 'mpsq',
    meta: {
      privilege: 'MPSQ'
    },
    title: '门牌申请',
    component: _import('mpgl/mpsq/mpsq')
  },
  {
    path: 'mpsp',
    icon: 'house-number',
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
    title: '智慧社区',
    privilege: 'ZHSQ'
  },
  name: 'amap',
  component: _import('gzgl/map')
}, {
  path: '/ybls_home',
  name: 'ybls_home',
  meta: {
    title: '一标六实首页',
    privilege: 'YBLS'
  },
  component: _import('ybls_home/ybls_home')
}, {
  path: '/ybls',
  name: 'ybls',
  meta: {
    title: '一标六实数据展示'
  },
  component: _import('gzgl/components/ybls')
}, {
  path: '/archive',
  name: 'archive',
  meta: {
    title: '一人一档'
  },
  component: _import('archive/index')
}, {
  path: '/search',
  name: 'search',
  meta: {
    title: '一键搜',
    privilege: 'YJS'
  },
  component: _import('yjs/yjs')
}, {
  path: '/company',
  name: 'company',
  meta: {
    title: '实有单位'
  },
  component: _import('single/company/company')
},
{
  path: '/equipment',
  name: 'equipment',
  meta: {
    title: '实有装备力量'
  },
  component: _import('single/equipment/equipment')
},
{
  path: '/case',
  name: 'case',
  meta: {
    title: '实有警情'
  },
  component: _import('single/case/case')
},
{
  path: '/zdry',
  name: 'zdry',
  meta: {
    title: '重点人员'
  },
  component: _import('single/zdry/zdry')
},
{
  path: '/security',
  name: 'security',
  meta: {
    title: '实有安防'
  },
  component: _import('single/security/security')
},
{
  path: '/ybls_unit',
  name: 'ybls_unit',
  meta: {
    title: '金山区实有单位',
    privilege: 'YBLS'
  },
  component: _import('ybls/unit')
},
{
  path: '/ybls_house',
  name: 'ybls_house',
  meta: {
    title: '金山区实有房屋',
    privilege: 'YBLS'
  },
  component: _import('ybls/house')
},
{
  path: '/ybls_afss',
  name: 'ybls_afss',
  meta: {
    title: '实有安防设施',
    privilege: 'YBLS'
  },
  component: _import('ybls/afss')
}, {
  path: '/ybls_atm',
  name: 'ybls_atm',
  meta: {
    title: '金山区银行ATM',
    privilege: 'YBLS'
  },
  component: _import('ybls/atm')
}, {
  path: '/ybls_gydh',
  name: 'ybls_gydh',
  meta: {
    title: '金山区公用电话',
    privilege: 'YBLS'
  },
  component: _import('ybls/gydh')
},
{
  path: '/mapedit',
  name: 'mapedit',
  meta: {
    title: '责任区管理',
    privilege: 'ZRQ'
  },
  component: _import('gzgl/mapedit')
},
{
  path: '/mappoint',
  name: 'mappoint',
  meta: {
    title: '点位标注',
    privilege: 'DWBZ'
  },
  component: _import('gzgl/mappoint')
},
{
  path: '/model',
  meta: {
    title: '模型',
    privilege: 'MODEL'
  },
  name: 'model',
  component: _import('single/model/model')
}
]

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
