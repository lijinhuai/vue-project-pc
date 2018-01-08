import fetch from '@/utils/fetch'

export function yblsMzxxData () {
  const params = {

  }
  return fetch({
    url: '/yblsData/mzxx',
    method: 'get',
    params: params
  })
}

export function yblsHzData () {
  const params = {

  }
  return fetch({
    url: '/yblsData/mzxxH',
    method: 'get',
    params: params
  })
}
