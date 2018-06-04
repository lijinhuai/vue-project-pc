import fetch from '@/utils/fetch'
export function fetchZdryCount (data) {
  const params = {
    ...data
  }
  return fetch({
    url: '/zdry/countZdry',
    method: 'get',
    params: params
  })
}
export function fetchZdryList (data) {
  const params = {
    ...data
  }
  return fetch({
    url: '/zdry/listZdry',
    method: 'get',
    params: params
  })
}

export function fetchWordCloudList (data) {
  const params = {
    ...data
  }
  return fetch({
    url: '/zdry/listWordcloud',
    method: 'get',
    params: params
  })
}
