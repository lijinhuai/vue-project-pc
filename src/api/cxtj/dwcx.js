import fetch from '@/utils/fetch'
// 查询房屋信息
export function fetchDwxxList (pageInfo, data) {
  const params = {
    ...pageInfo,
    ...data
  }
  return fetch({
    url: '/dwxx',
    method: 'get',
    params: params
  })
}
