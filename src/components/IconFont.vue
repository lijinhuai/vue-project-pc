<template>
<svg class="icon" :style="styles" aria-hidden="true">
  <use :xlink:href="classes"></use>
</svg>
</template>
<script>
import '@/assets/iconfont/iconfont.js'
const prefixCls = 'icon'
export default {
  props: {
    type: String,
    size: [Number, String],
    color: String
  },
  computed: {
    classes () {
      return `#${prefixCls}-${this.type}`
    },
    styles () {
      let style = {}
      if (this.size) {
        style['font-size'] = `${this.size}px`
      }
      if (this.color) {
        style.color = this.color
      }
      return style
    }
  }
}
</script>

<style scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>

