import fetch from '@/utils/fetch'
// 查询房屋信息
export function fetchXqxxPcs () {
  return fetch({
    url: '/xqxxpcs/',
    method: 'get'
  })
}
