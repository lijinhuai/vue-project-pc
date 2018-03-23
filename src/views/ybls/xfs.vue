<template>
  <div class="main">
    <input hidden v-model="baseUrl" id="baseUrl" />
    <iframe src="static/html/ybls/xfs.html" style="width:100%; height:100%; border: 0px;"></iframe>
  </div>
</template>

<style scoped>
.main {
  height: 100%;
}
</style>
<script>
import config from '@/config/index'
export default {
  data () {
    return {
      baseUrl: ''
    }
  },
  mounted () {
    this.baseUrl = config.BASE_API
  }
}
</script>

