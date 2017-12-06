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
export function fetchRfglHouse (params) {
  return fetch({
    url: '/rfgl/houses/' + params,
    method: 'get'
  })
}
export function fetchRfglRPerson (params) {
  return fetch({
    url: '/rfgl/rPersons/' + params,
    method: 'get'
  })
}
