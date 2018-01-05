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
.rybq {
  width: 32px;
  height: 32px;
  background-size: 32px 32px;
  background-repeat: no-repeat;
  display: inline-block;
  &_sk {
    background-image: url("~@/images/rfgl/rybq/sk.png");
  }
  &_sw {
    background-image: url("~@/images/rfgl/rybq/sw.png");
  }
  &_xsqk {
    background-image: url("~@/images/rfgl/rybq/xsqk.png");
  }
  &_jsb {
    background-image: url("~@/images/rfgl/rybq/jsb.png");
  }
  &_zdsf {
    background-image: url("~@/images/rfgl/rybq/zdsf.png");
  }
  &_czcsj {
    background-image: url("~@/images/rfgl/rybq/czcsj.png");
  }
  &_hwzm {
    background-image: url("~@/images/rfgl/rybq/h、w、zm.png");
  }
  &_gbzdr {
    background-image: url("~@/images/rfgl/rybq/gbzdry.png");
  }
  &_sd {
    background-image: url("~@/images/rfgl/rybq/sd.png");
  }
  &_fzry {
    background-image: url("~@/images/rfgl/rybq/fzry.png");
  }
  &_hcsj {
    background-image: url("~@/images/rfgl/rybq/hcsj.png");
  }
  &_jwry {
    background-image: url("~@/images/rfgl/rybq/jwry.png");
  }
  &_djlr {
    background-image: url("~@/images/rfgl/rybq/djlr.png");
  }
}
</style>

