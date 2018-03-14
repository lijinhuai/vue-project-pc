<template>
  <div class="main">
    <input hidden v-model="baseUrl" id="baseUrl" />
    <input hidden v-model="deptCode" id="deptCode" />
    <iframe src="static/html/ybls/unit.html" style="width:100%; height:100%; border: 0px;"></iframe>
  </div>
</template>

<style scoped>
.main {
  height: 100%;
}
</style>
<script>
import { getUserInfo } from '@/api/login'
import config from '@/config/index'
export default {
  data () {
    return {
      baseUrl: '',
      deptCode: ''
    }
  },
  mounted () {
    this.baseUrl = config.BASE_API
    getUserInfo().then(response => {
      this.deptCode = response.data.deptCode
    })
  }
}
</script>

