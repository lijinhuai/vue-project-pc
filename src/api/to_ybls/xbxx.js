import fetch from '@/utils/fetch'

export function yblsXbxxData () {
	
  const params = {
  	
  }
  return fetch({
    url: '/yblsData/xbxx',
    method: 'get',
    params: params
  })
}

