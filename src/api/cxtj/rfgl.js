import fetch from '@/utils/fetch'
// 查询房屋地址信息
export function fetchRfglFwAddress (pageInfo, data) {
  const params = {
    ...pageInfo,
    ...data
  }
  return fetch({
    url: '/rfgl/fwAddresss',
    method: 'get',
    params: params
  })
}
export function fetchRfglFw (params) {
  return fetch({
    url: '/rfgl/fws/' + params,
    method: 'get'
  })
}
export function fetchRfglFwry (params) {
  return fetch({
    url: '/rfgl/fwrys/' + params,
    method: 'get'
  })
}
