<template>
  <div>
    <div class="upload-list">
      <img :src="src">
      <div class="upload-list-cover" @click="handleView(src)">
        <Icon type="ios-eye-outline"></Icon>
      </div>
    </div>
    <Modal title="查看照片" :styles="{top: '20px',width:'400px'}" v-model="visible">
      <!-- <img class="photo" v-for="item in uploadList" :key="item.index" v-if="item.zjhm==zjhm &&visible" :src="item.photoBase64" style="width: 50%"> -->
      <Carousel ref="carousel" v-model="value" v-if="visible" :arrow="arrow">
        <Carousel-item>
          <img :src="imgSrc" style="width: 100%">
          <div style="width:100%;position: relative;top: -10px;left: 0px;text-align:center;">
          </div>
        </Carousel-item>
      </Carousel>
      <div slot="footer">
      </div>
    </Modal>
  </div>
</template>

<script>
import config from '@/config/index'
import { getToken } from '@/utils/auth' // 验权
export default {
  name: 'PersonPhoto',
  data () {
    return {
      visible: false,
      value: 0
    }
  },
  props: {
    zjhm: String
  },
  computed: {
    src () {
      return (
        config.BASE_API +
        '/rjbxx/zps/' +
        this.zjhm +
        '?Authorization=' +
        getToken()
      )
    },
    arrow () {
      return 'never'
    }
  },
  methods: {
    handleView (photoBase64) {
      this.visible = true
      this.imgSrc = photoBase64
      setTimeout(() => {
        this.$refs.carousel.handleResize()
      }, 10)
    }
  }
}
</script>

<style lang="less" scoped>
.upload-list {
  display: inline-block;
  width: 60px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  border: 1px solid transparent;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  position: relative;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  margin-right: 4px;
}
.upload-list img {
  width: 100%;
  height: 100%;
}
.upload-list-cover {
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
}
.upload-list:hover .upload-list-cover {
  display: block;
  cursor: pointer;
}
.upload-list-cover i {
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  margin: 0 2px;
}
</style>
