import fetch from '@/utils/fetch'
// 查询用户列表
export function fetchUserList (pageInfo, data) {
  const params = {
    ...pageInfo,
    ...data
  }
  return fetch({
    url: '/users',
    method: 'get',
    params: params
  })
}

// 获取用户所拥有的角色id
export function fetchUserRoleIdList (userId) {
  return fetch({
    url: '/users/' + userId + '/roleIds',
    method: 'get'
  })
}

// 用户分配权限
export function userRolesConfig (userId, roleIds) {
  const params = {
    'roleIds': roleIds
  }
  return fetch({
    url: '/users/' + userId + '/roles',
    method: 'put',
    params: params
  })
}

// 新增用户
export function userAdd (data) {
  return fetch({
    url: '/users',
    method: 'post',
    data: data
  })
}

// 修改用户
export function userEdit (userId, data) {
  return fetch({
    url: '/users/' + userId,
    method: 'put',
    data: data
  })
}

// 删除用户
export function userDelete (userId) {
  return fetch({
    url: '/users/' + userId,
    method: 'delete'
  })
}
