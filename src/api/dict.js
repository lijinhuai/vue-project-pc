import fetch from '@/utils/fetch'
// 根据字典名称查询字典集合
export function fetchDbDictList (dictName) {
  return fetch({
    url: '/dict/dbDictItems/' + dictName,
    method: 'get'
  })
}
export function fetchDictList (dictName) {
  return fetch({
    url: '/dict/dictItems/' + dictName,
    method: 'get'
  })
}

export function fetchRoadDictList (dictName) {
  return fetch({
    url: '/rfgl/listRoadDict',
    method: 'get'
  })
}
