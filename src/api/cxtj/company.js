import fetch from '@/utils/fetch'
// 查询房屋信息
export function fetchCompany (dwbh) {
  return fetch({
    url: '/companys/' + dwbh,
    method: 'get'
  })
}
