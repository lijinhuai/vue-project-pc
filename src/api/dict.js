import fetch from '@/utils/fetch'
// 根据字典名称查询字典集合
export function fetchDictList (dictName) {
  return fetch({
    url: '/dict/dbDictItems/' + dictName,
    method: 'get'
  })
}
