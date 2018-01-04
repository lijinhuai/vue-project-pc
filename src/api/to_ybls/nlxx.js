import fetch from '@/utils/fetch'

export function yblsNlxxData () {
	
  const params = {
  	
  }
  return fetch({
    url: '/yblsData/nlxx',
    method: 'get',
    params: params
  })
}

