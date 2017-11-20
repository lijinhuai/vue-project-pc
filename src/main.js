// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './permission' // 权限
import './UI'
// import './mock' // 该项目所有请求使用mockjs模拟
import {appRouter} from '@/router'
import './i18n'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  // el: '#app',
  // router,
  // store,
  // template: '<App/>',
  // components: { App }
  el: '#app',
  router: router,
  store: store,
  render: h => h(App),
  data: {
    currentPageName: ''
  },
  mounted () {
    this.currentPageName = this.$route.name
    this.$store.commit('initCachepage')
      // 权限菜单过滤相关
    this.$store.commit('updateMenulist')
      // 全屏相关
    document.addEventListener('fullscreenchange', () => {
      this.$store.commit('changeFullScreenState')
    })
    document.addEventListener('mozfullscreenchange', () => {
      this.$store.commit('changeFullScreenState')
    })
    document.addEventListener('webkitfullscreenchange', () => {
      this.$store.commit('changeFullScreenState')
    })
    document.addEventListener('msfullscreenchange', () => {
      this.$store.commit('changeFullScreenState')
    })
  },
  created () {
    let tagsList = []
    appRouter.map((item) => {
      if (item.children.length <= 1) {
        tagsList.push(item.children[0])
      } else {
        tagsList.push(...item.children)
      }
    })
    this.$store.commit('setTagsList', tagsList)
  }
})
