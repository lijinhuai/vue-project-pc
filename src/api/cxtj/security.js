import fetch from '@/utils/fetch'
export function fetchCameraList (data) {
  const params = {
    ...data
  }
  return fetch({
    url: '/camera/locations',
    method: 'get',
    params: params
  })
}

export function fetchYwgyList (data) {
  const params = {
    ...data
  }
  return fetch({
    url: '/xqxx/ywgy/locations',
    method: 'get',
    params: params
  })
}

export function fetchXfsList (data) {
  const params = {
    ...data
  }
  return fetch({
    url: '/xqxx/xfs/locations',
    method: 'get',
    params: params
  })
}

export function fetchWifiList (data) {
  const params = {
    ...data
  }
  return fetch({
    url: '/wifi/all/locations',
    method: 'get',
    params: params
  })
}
