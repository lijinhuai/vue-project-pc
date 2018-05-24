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

export function fetchSyllzb (data) {
  const params = {
    ...data
  }
  return fetch({
    url: '/equipment/listSyllzb',
    method: 'get',
    params: params,
    noAppLoading: true
  })
}

export function fetchSyllzbByLb (data, lb) {
  const params = {
    ...data,
    'lb': lb
  }
  return fetch({
    url: '/equipment/listSyllzbChartByLb',
    method: 'get',
    params: params,
    noAppLoading: true
  })
}
