import fetch from '@/utils/fetch'
// 查询房屋信息
export function fetchArchive (zjhm) {
  return fetch({
    url: '/archives/' + zjhm,
    method: 'get'
  })
}
