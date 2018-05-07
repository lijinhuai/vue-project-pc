<template>
  <div class="main">
    <input hidden @click="switchCommunity" id="switchCommunity" />
    <input hidden v-model="baseUrl" id="baseUrl" />
    <input hidden v-model="facePicBaseUrl" id="facePicBaseUrl" />
    <input hidden v-model="carPicBaseUrl" id="carPicBaseUrl" />
    <input hidden v-model="mjPicBaseHost" id="mjPicBaseHost" />
    <input hidden v-model="rtspServer" id="rtspServer" />
    <input hidden v-model="jcwdm" id="jcwdm" />
    <input hidden v-model="center.lon" id="lon" />
    <input hidden v-model="center.lat" id="lat" />
    <input hidden v-model="intro" id="intro" />
    <iframe id="map" :src="iframeSrc" style="width:100%; height:100%; border: 0px;overflow:hidden;"></iframe>
    <el-dialog :visible.sync="dialogTableVisible" width="318px" :show-close="false" :close-on-click-modal="false" :close-on-press-escape="false" center lock-scroll>
      <div>
        <cascading-address @confirm="confirmCity"></cascading-address>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import config from '@/config/index'
import cascadingAddress from './components/CascadingSelect/CascadingSelect.vue'
export default {
  data () {
    return {
      dialogTableVisible: true,
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
      },
      intro: ''
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
      this.jcwdm = data.xq.dm
      this.center = data.xq.center
      if (data.xq === 'city') {
        this.iframeSrc = 'static/html/map_city.html?jdwdm' + data.xq.dm
      } else {
        this.iframeSrc = 'static/html/map_village.html?jdwdm' + data.xq.dm
      }
      this.intro = data.xq.intro
      this.dialogTableVisible = false
    },
    switchCommunity () {
      this.dialogTableVisible = true
    }
  }
}
</script>

<style lang="less">
.main {
  height: 100%;
  .el-dialog--center {
    .el-dialog__body {
      padding: 0px 0px;
    }
  }
}
</style>

