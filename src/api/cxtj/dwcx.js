import fetch from '@/utils/fetch'
// 查询房屋信息
export function fetchDwxxList (pageInfo, data) {
  const params = {
    ...pageInfo,
    ...data
  }
  return fetch({
    url: '/dwxx',
    method: 'get',
    params: params,
    loadingText: '111'
  })
}

export function fetchExportXml (data, cjlx) {
  const params = {
    ...data,
    cjlx
  }
  return fetch({
    url: '/dwxx/exportXml',
    method: 'get',
    params: params
  })
}
