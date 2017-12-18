import fetch from '@/utils/fetch'
// 获取机构树
export function fetchDeptTreeList () {
  return fetch({
    url: '/dept/deptTree',
    method: 'get'
  })
}
