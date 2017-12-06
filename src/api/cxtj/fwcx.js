import fetch from '@/utils/fetch'
// 查询房屋信息
export function fetchFwjbxxList (pageInfo, data) {
  const params = {
    ...pageInfo,
    ...data
  }
  return fetch({
    url: '/fwjbxx',
    method: 'get',
    params: params
  })
}
