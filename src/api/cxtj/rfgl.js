import fetch from '@/utils/fetch'
// 查询房屋地址信息
export function fetchRfglRoom (pageInfo, data) {
  const params = {
    ...pageInfo,
    ...data
  }
  return fetch({
    url: '/rfgl/rooms',
    method: 'get',
    params: params
  })
}
export function fetchRfglHouse (params, appLoading) {
  return fetch({
    url: '/rfgl/houses/' + params,
    method: 'get',
    noAppLoading: !appLoading
  })
}
export function fetchRfglRPerson (params) {
  return fetch({
    url: '/rfgl/rPersons/' + params,
    method: 'get'
  })
}
export function fetchRfglRHisPerson (params) {
  return fetch({
    url: '/rfgl/rHisPersons/' + params,
    method: 'get'
  })
}

export function fetchDlsj (params) {
  return fetch({
    url: '/rfgl/tjDlsj/' + params,
    method: 'get'
  })
}

export function fetchZlssj (params) {
  return fetch({
    url: '/rfgl/tjZlssj/' + params,
    method: 'get'
  })
}
