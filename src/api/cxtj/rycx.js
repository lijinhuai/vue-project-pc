import fetch from '@/utils/fetch'
// 查询人员信息
export function fetchRjbxxList (pageInfo, data) {
  const params = {
    ...pageInfo,
    ...data
  }
  return fetch({
    url: '/rjbxx',
    method: 'get',
    params: params
  })
}
