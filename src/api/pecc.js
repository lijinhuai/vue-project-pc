import fetch from '@/utils/fetch'
// 查询号牌种类字典
export function fetchHpzlList () {
  return fetch({
    url: '/dict/hpzls',
    method: 'get'
  })
}

// 查询道路性质字典
export function fetchDlxzList () {
  return fetch({
    url: '/dict/dlxzs',
    method: 'get'
  })
}
// 查询普通道路代码字典
export function fetchPtDldmList () {
  return fetch({
    url: '/dict/ptdldms',
    method: 'get'
  })
}

// 查询普通路段代码字典
export function fetchPtLddmList () {
  return fetch({
    url: '/dict/ptlddms',
    method: 'get'
  })
}

// 查询普通道路代码字典
export function fetchZdDldmList () {
  return fetch({
    url: '/dict/zddldms',
    method: 'get'
  })
}

// 查询普通路段代码字典
export function fetchZdLddmList () {
  return fetch({
    url: '/dict/zdlddms',
    method: 'get'
  })
}

// 查询车身颜色字典
export function fetchCsysList () {
  return fetch({
    url: '/dict/csyss',
    method: 'get'
  })
}

// 查询车辆分类字典
export function fetchClflList () {
  return fetch({
    url: '/dict/clfls',
    method: 'get'
  })
}

// 查询车辆类型字典
export function fetchCllxList () {
  return fetch({
    url: '/dict/cllxs',
    method: 'get'
  })
}

// 查询车辆拖移字典
export function fetchCltyList () {
  return fetch({
    url: '/dict/cltys',
    method: 'get'
  })
}

// 上传违停拍照数据
export function uploadPecc (data) {
  return fetch({
    url: '/pecc/pecc',
    method: 'post',
    data: data
  })
}

export function fetchVehicleInfo (params) {
  return fetch({
    url: '/pecc/vehcileInfo',
    method: 'get',
    params: params
  })
}
