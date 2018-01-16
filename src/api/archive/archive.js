import fetch from '@/utils/fetch'
// 查询房屋信息
export function fetchPersonalInfo (zjhm) {
  return fetch({
    url: '/archives/personalInfos/' + zjhm,
    method: 'get'
  })
}
