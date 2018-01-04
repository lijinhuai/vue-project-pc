import fetch from '@/utils/fetch'

export function yblsRyxxData () {
	
  const params = {
  	
  }
  return fetch({
    url: '/yblsData/ryxx',
    method: 'get',
    params: params
  })
}

