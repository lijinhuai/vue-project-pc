import fetch from '@/utils/fetch'

export function yblsTjData () {
  const params = {

  }
  return fetch({
    url: '/houses/amounts',
    method: 'get',
    params: params
  })
}
