import fetch from '@/utils/fetch'
// 查询用户列表
export function fetchUserList (pageInfo, data) {
  const params = {
    ...pageInfo,
    ...data
  }
  return fetch({
    url: '/users',
    method: 'get',
    params: params
  })
}
