<template>
  <div class="main">
    <input hidden v-model="baseUrl" id="baseUrl" />
    <input hidden v-model="facePicBaseUrl" id="facePicBaseUrl" />
    <input hidden v-model="carPicBaseUrl" id="carPicBaseUrl" />
    <input hidden v-model="mjPicBaseHost" id="mjPicBaseHost" />
    <input hidden v-model="rtspServer" id="rtspServer" />
    <iframe src="static/html/map.html" style="width:100%; height:100%; border: 0px;"></iframe>
  </div>
</template>

<script>
import config from '@/config/index'
export default {
  data () {
    return {
      baseUrl: '',
      facePicBaseUrl: '',
      carPicBaseUrl: '',
      mjPicBaseHost: '',
      rtspServer: ''
    }
  },
  mounted () {
    this.baseUrl = config.BASE_API
    this.facePicBaseUrl = config.facePicBaseUrl
    this.carPicBaseUrl = config.carPicBaseUrl
    this.mjPicBaseHost = config.mjPicBaseHost
    this.rtspServer = config.rtspServer
  }
}
</script>

<style lang="less" scoped>
.main {
  height: 100%;
}
</style>

