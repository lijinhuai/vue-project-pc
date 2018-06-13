import fetch from '@/utils/fetch'
// 查询角色树列表
export function fetchRoleTreeList () {
  return fetch({
    url: '/roles/roleTree',
    method: 'get'
  })
}

export function fetchPrivilegeTreeList () {
  return fetch({
    url: '/privileges/privilegeTree',
    method: 'get'
  })
}
