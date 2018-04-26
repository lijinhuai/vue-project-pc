const Env = process.env.NODE_ENV
const network = ''

const BASE_API = Env === 'development'
  ? 'http://localhost:8081/api'
  : Env === 'production'
  // ? 'http://116.228.125.235:14310/api'
  ? 'http://15.216.17.104:14310/api'
  : 'https://debug.url.com'

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
