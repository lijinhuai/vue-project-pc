<template>
  <div>
    <Poptip v-for="rybq in rybqList" :key="rybq.index" trigger="hover" :content="rybq.name">
    <div class="rybq" :class="rybq.colorPng"></div>
    </Poptip>
  </div>
</template>

<script>
export default {
  name: 'Rybq',
  props: {
    rybqList: Array
  }
}
</script>

<style lang="less" scoped>
@import "../rybq.less";
.rybq {
  width: 32px;
  height: 32px;
  background-size: 32px 32px;
  background-repeat: no-repeat;
  display: inline-block;
}
</style>

