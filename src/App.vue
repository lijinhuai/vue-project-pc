<template>
  <div id="main" class="app-main">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  data () {
    return {
      theme: this.$store.getters.theme
    }
  },
  mounted () {},
  beforeDestroy () {},
  methods: {}
}
</script>

<style>
*{
  font-size: 14px;
}
.app-main {
  width: 100%;
  height: 100%;
}
</style>
