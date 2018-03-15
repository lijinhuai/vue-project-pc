import fetch from '@/utils/fetch'
// 根据字典名称查询字典集合
export function fetchDbDictList (dictName) {
  return fetch({
    url: '/dict/dbDictItems/' + dictName,
    method: 'get',
    headers: {'NoAppLoading': true}
  })
}
export function fetchDictList (dictName) {
  return fetch({
    url: '/dict/dictItems/' + dictName,
    method: 'get',
    headers: {'NoAppLoading': true}
  })
}

export function fetchRoadDictList () {
  return fetch({
    url: '/rfgl/listRoadDict',
    method: 'get',
    headers: {'NoAppLoading': true}
  })
}
