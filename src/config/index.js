const Env = process.env.NODE_ENV

const BASE_API = Env === 'development'
  ? 'http://localhost:8081/api'
  : Env === 'production'
  ? 'http://116.228.125.236:14310/api'
  : 'https://debug.url.com'

let config = {
  env: Env,
  BASE_API: BASE_API,
  systemTitle: '金山区一标六实管理系统'
}
export default config
