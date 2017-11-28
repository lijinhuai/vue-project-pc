import fetch from '@/utils/fetch'
// 查询号牌种类字典
export function fetchRycxList (pageInfo, data) {
  const params = {
    ...pageInfo,
    ...data
  }
  console.log(params)
  return fetch({
    url: '/rjbxx',
    method: 'get',
    params: params
  })
}
