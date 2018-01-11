import fetch from '@/utils/fetch'
// 查询人员信息

export function fetchSyrkRjbxxList (pageInfo, data) {
  const params = {
    ...pageInfo,
    ...data
  }
  return fetch({
    url: '/houses/toryxx',
    method: 'get',
    params: params
  })
}
