import fetch from '@/utils/fetch'
export function fetchEquipmentCount (data) {
  const params = {
    ...data
  }
  return fetch({
    url: '/equipment/countWyglsjInfo',
    method: 'get',
    params: params
  })
}
export function fetchEquipmentList (data) {
  const params = {
    ...data
  }
  return fetch({
    url: '/equipment/listWyglsjInfo',
    method: 'get',
    params: params
  })
}

export function fetchWordCloudList (data) {
  const params = {
    ...data
  }
  return fetch({
    url: '/equipment/listWordcloud',
    method: 'get',
    params: params
  })
}
