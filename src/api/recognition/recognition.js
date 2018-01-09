import fetch from '@/utils/fetch'
// 识别信息
export function fetchFaceList (pageInfo, data) {
  const params = {
    ...pageInfo,
    ...data
  }
  return fetch({
    url: '/recognitions/faces',
    method: 'get',
    params: params
  })
}

// 识别信息
export function fetchCarList (pageInfo, data) {
  const params = {
    ...pageInfo,
    ...data
  }
  return fetch({
    url: '/recognitions/cars',
    method: 'get',
    params: params
  })
}
