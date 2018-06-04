import fetch from '@/utils/fetch'
export function fetchCase (data) {
  const params = {
    ...data
  }
  return fetch({
    url: '/syjq',
    method: 'get',
    params: params
  })
}
