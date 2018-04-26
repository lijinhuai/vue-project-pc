const Env = process.env.NODE_ENV
const network = ''

let BASE_API = 'txw'
if (Env === 'development') {
  BASE_API = 'http://localhost:8081/api'
} else if (Env === 'production') {
  if (network === 'txw') {
    BASE_API = 'http://15.216.17.104:14310/api'
  } else {
    BASE_API = 'http://116.228.125.235:14310/api'
  }
}

const facePicBaseUrl = network === 'txw' ? 'http://15.216.17.104:18181/' : 'http://116.228.125.235:18181/'
const carPicBaseUrl = network === 'txw' ? 'http://15.216.17.205:18182/' : 'http://116.228.125.236:18181/'
const mjPicBaseHost = network === 'txw' ? 'http://15.216.17.205:18182/' : 'https://3thapi.lookdoor.cn/'

let config = {
  env: Env,
  BASE_API: BASE_API,
  systemTitle: '智慧社区',
  facePicBaseUrl: facePicBaseUrl,
  carPicBaseUrl: carPicBaseUrl,
  mjPicBaseHost: mjPicBaseHost

}
export default config
