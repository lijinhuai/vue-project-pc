import fetch from '@/utils/fetch'
export function fetchCompany (dwbh) {
  return fetch({
    url: '/companys/' + dwbh,
    method: 'get'
  })
}

export function fetchCompanyCyry (dwbh, pageInfo) {
  const params = {
    ...pageInfo
  }
  return fetch({
    url: '/companys/' + dwbh + '/cyrys',
    method: 'get',
    params: params
  })
}
