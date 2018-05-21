import fetch from '@/utils/fetch'
// 查询人员信息

export function fetchAreaId () {
  return fetch({
    url: '/dutyArea/getUserAreaId',
    method: 'get'
  })
}
