<template>
  <div class="main">
    <input hidden @click="switchCommunity" id="switchCommunity" />
    <input hidden v-model="baseUrl" id="baseUrl" />
    <input hidden v-model="facePicBaseUrl" id="facePicBaseUrl" />
    <input hidden v-model="carPicBaseUrl" id="carPicBaseUrl" />
    <input hidden v-model="mjPicBaseHost" id="mjPicBaseHost" />
    <input hidden v-model="rtspServer" id="rtspServer" />
    <input hidden v-model="pcsdm" id="pcsdm" />
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
      dialogTableVisible: false,
      baseUrl: '',
      facePicBaseUrl: '',
      carPicBaseUrl: '',
      mjPicBaseHost: '',
      rtspServer: '',
      pcsdm: '',
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
    this.initDefault()
  },
  methods: {
    confirmCity (data) {
      this.iframeSrc = ''
      this.pcsdm = data.pcs.pcsdm
      this.jcwdm = data.xq.jcwdm
      this.center = data.xq.center
      if (data.xq.type === 'city') {
        this.iframeSrc = 'static/html/map_city.html?jdwdm=' + data.xq.jcwdm
      } else {
        this.iframeSrc = 'static/html/map_village.html?jdwdm=' + data.xq.jcwdm
      }
      this.intro = data.xq.intro
      this.dialogTableVisible = false
    },
    initDefault () {
      this.pcsdm = '310116560000'
      this.jcwdm = '16113006'
      this.center = {
        lon: '121.3377285004',
        lat: '30.7521905824'
      }
      this.iframeSrc = 'static/html/map_city.html?jdwdm=16113006'
      this.intro =
        '万盛金邸小区位于金山区龙轩路1000弄、866弄，总占地面积22.5万平方米，居民楼栋66栋，主要出入口4个，南北向的海汇商业街将住宅小区划分为东、西两区，海汇街面积9.5万平方米。'
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

