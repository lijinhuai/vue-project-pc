import fetch from '@/utils/fetch'
// 查询人员信息
export function fetchRfglFw (pageInfo, data) {
  const params = {
    ...pageInfo,
    ...data
  }
  return fetch({
    url: '/listRfglFw',
    method: 'get',
    params: params
  })
}
