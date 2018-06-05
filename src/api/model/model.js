import fetch from '@/utils/fetch'
export function fetchKfydCount () {
  return fetch({
    url: '/model/countKfydYj',
    method: 'get'
  })
}

export function fetchFkfydCount () {
  return fetch({
    url: '/model/countFkfydYj',
    method: 'get'
  })
}
export function fetch5rysqzCount () {
  return fetch({
    url: '/model/count5rysqzYj',
    method: 'get'
  })
}

export function fetchWcndjCount () {
  return fetch({
    url: '/model/countWcndjYj',
    method: 'get'
  })
}

export function fetchWdjzjCount () {
  return fetch({
    url: '/model/countWdjzjYj',
    method: 'get'
  })
}

export function fetchWrjzkCount () {
  return fetch({
    url: '/model/countWrjzkfYj',
    method: 'get'
  })
}

export function fetchHhjzfCount () {
  return fetch({
    url: '/model/countHhjzfYj',
    method: 'get'
  })
}

export function fetchKfydList (pageInfo, query) {
  const params = {
    ...pageInfo,
    ...query
  }
  return fetch({
    url: '/model/listKfydYj',
    method: 'get',
    params: params
  })
}

export function fetchFkfydList (pageInfo, query) {
  const params = {
    ...pageInfo,
    ...query
  }
  return fetch({
    url: '/model/listFkfydYj',
    method: 'get',
    params: params
  })
}

export function fetch5rysqzList (pageInfo, query) {
  const params = {
    ...pageInfo,
    ...query
  }
  return fetch({
    url: '/model/list5rysqzYj',
    method: 'get',
    params: params
  })
}

export function fetchWcndjList (pageInfo, query) {
  const params = {
    ...pageInfo,
    ...query
  }
  return fetch({
    url: '/model/listWcndjYj',
    method: 'get',
    params: params
  })
}

export function fetchWdjzjList (pageInfo, query) {
  const params = {
    ...pageInfo,
    ...query
  }
  return fetch({
    url: '/model/listWdjzjYj',
    method: 'get',
    params: params
  })
}

export function fetchWrjzkfList (pageInfo, query) {
  const params = {
    ...pageInfo,
    ...query
  }
  return fetch({
    url: '/model/listWrjzkfYj',
    method: 'get',
    params: params
  })
}

export function fetchHhjzList (pageInfo, query) {
  const params = {
    ...pageInfo,
    ...query
  }
  return fetch({
    url: '/model/listHhjzYj',
    method: 'get',
    params: params
  })
}
