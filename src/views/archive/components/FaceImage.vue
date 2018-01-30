<template>
  <div>
    <div class="upload-list">
      <img :src="faceSrc">
      <div class="upload-list-cover" @click="handleView(pictureSrc)">
        <Icon type="ios-eye-outline"></Icon>
      </div>
    </div>
    <Modal height="100%" :styles="{top: '30px',left: '160px',width: 'calc(100vw - 400px)'}" v-model="visible">
      <!-- <img class="photo" v-for="item in uploadList" :key="item.index" v-if="item.zjhm==zjhm &&visible" :src="item.photoBase64" style="width: 50%"> -->
      <Carousel ref="carousel" v-if="visible" arrow="never" style="margin: 30px auto;">
        <Carousel-item>
          <img :src="imgSrc" style="width: 100%">
        </Carousel-item>
      </Carousel>
      <div slot="footer">
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  name: 'FaceImage',
  data () {
    return {
      imgSrc: '',
      visible: false
    }
  },
  props: {
    faceSrc: String,
    pictureSrc: String
  },
  methods: {
    handleView (src) {
      this.visible = true
      this.imgSrc = src
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
