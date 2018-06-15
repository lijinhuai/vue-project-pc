import fetch from '@/utils/fetch'
// 查询角色树列表
export function fetchRoleTreeList () {
  return fetch({
    url: '/roles/roleTree',
    method: 'get'
  })
}

// 查询权限树列表
export function fetchPrivilegeTreeList () {
  return fetch({
    url: '/privileges/privilegeTree',
    method: 'get'
  })
}

// 获取角色拥有的权限id
export function fetchRolePrivilegeIdList (roleId) {
  return fetch({
    url: '/roles/' + roleId + '/privilegeIds',
    method: 'get'
  })
}

// 新增角色
export function roleAdd (data) {
  return fetch({
    url: '/roles',
    method: 'post',
    data: data
  })
}

// 更新角色
export function roleUpdate (roleId, data) {
  return fetch({
    url: '/roles/' + roleId,
    method: 'put',
    data: data
  })
}

// 删除角色
export function roleDelete (roleId) {
  return fetch({
    url: '/roles/' + roleId,
    method: 'delete'
  })
}

// 角色分配权限
export function rolePrivielgesConfig (roleId, privilegeIds) {
  const params = {
    'privilegeIds': privilegeIds
  }
  return fetch({
    url: '/roles/' + roleId + '/privileges',
    method: 'put',
    params: params
  })
}
