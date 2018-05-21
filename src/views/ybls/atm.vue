<template>
  <div class="main">
    <input hidden v-model="baseUrl" id="baseUrl" />
    <input hidden v-model="areaId" id="areaId" />
    <iframe src="static/html/ybls/atm.html" style="width:100%; height:100%; border: 0px;"></iframe>
  </div>
</template>

<style scoped>
.main {
  height: 100%;
}
</style>
<script>
import config from '@/config/index'
import {fetchAreaId} from '@/api/ybls/ybls'
export default {
  data () {
    return {
      baseUrl: '',
      areaId: ''
    }
  },
  mounted () {
    this.baseUrl = config.BASE_API
    fetchAreaId().then(response => {
      this.areaId = response.data
    })
  }
}
</script>

