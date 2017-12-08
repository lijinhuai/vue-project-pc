import fetch from '@/utils/fetch'
// 查询地址信息
export function fetchAddressInfoList (pageInfo, query) {
  const params = {
    ...pageInfo,
    ...query
  }
  return fetch({
    url: '/addressinfos',
    method: 'get',
    params: params
  })
}
