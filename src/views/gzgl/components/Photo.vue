<template>
  <div>
    <div class="upload-list" v-for="item in uploadList" :key="item.index" v-if="item.xh==1">
      <img :src="item.src">
      <div class="upload-list-cover" @click="handleView(item.src)">
        <Icon type="ios-eye-outline"></Icon>
      </div>
    </div>
    <Modal title="查看照片" :styles="{top: '100px'}" v-model="visible">
      <!-- <img class="photo" v-for="item in uploadList" :key="item.index" v-if="item.zjhm==zjhm &&visible" :src="item.photoBase64" style="width: 50%"> -->
      <Carousel ref="carousel" v-model="value" v-if="visible" :arrow="arrow">
        <Carousel-item v-for="item in uploadList" :key="item.index" v-if="item.xh==2">
          <img :src="item.src" style="width: 100%">
          <template v-if="item.message!=''">
            <div style="width:100%;position: relative;top: -10px;left: 0px;text-align:center;">
              <span style="color:#2d8cf0;font-size:20px;">{{item.message}}</span>
            </div>
</template>
        </Carousel-item>
      </Carousel>
      <div slot="footer">
      </div>
    </Modal>
  </div>
</template>

<script>
import config from '@/config/index'
export default {
  name: 'Photo',
  data () {
    return {
      imgSrc: '',
      visible: false,
      value: 0
    }
  },
  props: {
    uploadList: Array
  },
  computed: {
    arrow () {
      return 'never'
    }
  },
  mounted () {
    this.uploadList.forEach(function (currentValue) {
      currentValue.src = config.txwPicBaseUrl + currentValue.src
    })
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
