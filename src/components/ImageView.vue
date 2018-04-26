<template>
  <div>
    <div class="image-list">
      <img :src="imageSrc||smallImageSrc">
      <div class="image-list-cover" @click="handleView()">
        <Icon type="ios-eye-outline"></Icon>
      </div>
    </div>
    <Modal title="查看照片" :styles="styles" v-model="visible">
      <template v-if="imageList">
        <Carousel ref="carousel" v-model="value" v-if="visible" :arrow="arrow">
          <Carousel-item v-for="item in imageList" :key="item.index">
            <img :src="item.imageSrc" style="width: 100%">
          </Carousel-item>
        </Carousel>
      </template>
      <template v-if="imageSrc||bigImageSrc||smallImageSrc">
        <Carousel ref="carousel" v-model="value" v-if="visible" :arrow="arrow">
          <Carousel-item>
            <img :src="imageSrc||bigImageSrc||smallImageSrc" style="width: 100%">
          </Carousel-item>
        </Carousel>
      </template>
      <div slot="footer">
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  name: 'ImageView',
  data () {
    return {
      visible: false,
      value: 0
    }
  },
  props: {
    styles: Object,
    imageList: Array,
    image: Object,
    imageSrc: String,
    smallImageSrc: String,
    bigImageSrc: String
  },
  computed: {
    arrow () {
      if (this.imageList && this.imageList.length > 1) {
        return 'always'
      } else {
        return 'never'
      }
    }
  },
  methods: {
    handleView (src) {
      this.visible = true
      setTimeout(() => {
        this.$refs.carousel.handleResize()
      }, 10)
    }
  }
}
</script>

<style lang="less" scoped>
.image-list {
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
.image-list img {
  width: 100%;
  height: 100%;
}
.image-list-cover {
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
}
.image-list:hover .image-list-cover {
  display: block;
  cursor: pointer;
}
.image-list-cover i {
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  margin: 0 2px;
}
</style>
