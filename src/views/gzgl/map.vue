<template>
  <div class="main">
    <input hidden @click="switchCommunity" id="switchCommunity" />
    <input hidden v-model="baseUrl" id="baseUrl" />
    <input hidden v-model="facePicBaseUrl" id="facePicBaseUrl" />
    <input hidden v-model="carPicBaseUrl" id="carPicBaseUrl" />
    <input hidden v-model="mjPicBaseHost" id="mjPicBaseHost" />
    <input hidden v-model="rtspServer" id="rtspServer" />
    <input hidden v-model="pcsdm" id="pcsdm" />
    <input hidden v-model="xqbh" id="xqbh" />
    <input hidden v-model="jlxdm" id="jlxdm" />
    <input hidden v-model="jcwdm" id="jcwdm" />
    <input hidden v-model="name" id="name" />
    <input hidden v-model="center.lon" id="lon" />
    <input hidden v-model="center.lat" id="lat" />
    <input hidden v-model="center.zoom" id="zoom" />
    <input hidden v-model="intro" id="intro" />
    <iframe id="map" :src="iframeSrc" style="width:100%; height:100%; border: 0px;overflow:hidden;"></iframe>
    <el-dialog :visible.sync="dialogTableVisible" width="318px" :show-close="false" :close-on-click-modal="false" :close-on-press-escape="false" center lock-scroll>
        <cascading-address ref="cascading" :districts="districts" @confirm="confirmCity"></cascading-address>
    </el-dialog>
  </div>
</template>

<script>
import config from '@/config/index'
import cascadingAddress from './components/CascadingSelect/CascadingSelect.vue'
import { fetchXqxxPcs } from '@/api/cxtj/amap.js'
export default {
  data () {
    return {
      districts: [],
      dialogTableVisible: true,
      baseUrl: '',
      facePicBaseUrl: '',
      carPicBaseUrl: '',
      mjPicBaseHost: '',
      rtspServer: '',
      xqbh: '',
      pcsdm: '',
      jlxdm: '',
      jcwdm: '',
      name: '',
      iframeSrc: '',
      center: {
        lon: '',
        lat: '',
        zoom: ''
      },
      intro: ''
    }
  },
  components: {
    cascadingAddress
  },
  mounted () {
    const _self = this
    this.baseUrl = config.BASE_API
    this.facePicBaseUrl = config.facePicBaseUrl
    this.carPicBaseUrl = config.carPicBaseUrl
    this.mjPicBaseHost = config.mjPicBaseHost
    this.rtspServer = config.rtspServer
    fetchXqxxPcs().then(response => {
      this.districts = response.data
      setTimeout(function () {
        _self.initDefault()
      }, 0)
    })
  },
  methods: {
    confirmCity (data) {
      this.iframeSrc = ''
      this.pcsdm = data.pcs.pcsdm
      this.xqbh = data.community.xqbh
      this.jlxdm = data.community.jlxdm
      this.jcwdm = data.community.jcwdm
      this.name = data.community.name
      this.center = data.community.center
      if (data.community.type === 'city') {
        this.iframeSrc =
          'static/html/map_city.html?jdwdm=' + data.community.jcwdm
      } else {
        this.iframeSrc =
          'static/html/map_village.html?jdwdm=' + data.community.jcwdm
      }
      this.intro = data.community.intro
      this.dialogTableVisible = false
    },
    initDefault () {
      this.$refs.cascading.init('金山区', '310116560000', '16113006')
    },
    switchCommunity () {
      this.dialogTableVisible = true
    }
  }
}
</script>

<style lang="less">
body {
  padding: 0 !important;
}
.main {
  height: 100%;
  .el-dialog--center {
    .el-dialog__header {
      display: none;
    }
    .el-dialog__body {
      padding: 0px 0px;
    }
  }
}
</style>

