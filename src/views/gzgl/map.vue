<template>
  <div class="main">
    <input hidden v-model="baseUrl" id="baseUrl" />
    <input hidden v-model="facePicBaseUrl" id="facePicBaseUrl" />
    <input hidden v-model="carPicBaseUrl" id="carPicBaseUrl" />
    <input hidden v-model="mjPicBaseHost" id="mjPicBaseHost" />
    <input hidden v-model="rtspServer" id="rtspServer" />
    <input hidden v-model="jcwdm" id="jcwdm" />
    <input hidden v-model="center.lon" id="lon" />
    <input hidden v-model="center.lat" id="lat" />
    <div style="position:fixed;">
      <cascading-address @confirm="confirmCity"></cascading-address>
    </div>
    <iframe id="map" :src="iframeSrc" style="width:100%; height:100%; border: 0px;"></iframe>
  </div>
</template>

<script>
import config from '@/config/index'
import cascadingAddress from './components/CascadingSelect/CascadingSelect.vue'
export default {
  data () {
    return {
      baseUrl: '',
      facePicBaseUrl: '',
      carPicBaseUrl: '',
      mjPicBaseHost: '',
      rtspServer: '',
      jcwdm: '',
      iframeSrc: '',
      center: {
        lon: '',
        lat: ''
      }
    }
  },
  components: {
    cascadingAddress
  },
  mounted () {
    this.baseUrl = config.BASE_API
    this.facePicBaseUrl = config.facePicBaseUrl
    this.carPicBaseUrl = config.carPicBaseUrl
    this.mjPicBaseHost = config.mjPicBaseHost
    this.rtspServer = config.rtspServer
  },
  methods: {
    confirmCity (data) {
      this.iframeSrc = ''
      console.log(data.xq)
      this.jcwdm = data.xq.dm
      this.center = data.xq.center
      this.iframeSrc = 'static/html/map_village.html?jdwdm' + data.xq.dm
    }
  }
}
</script>

<style lang="less" scoped>
.main {
  height: 100%;
}
</style>

