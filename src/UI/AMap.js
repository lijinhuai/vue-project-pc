/*
 * 导入AMap组件
 */
import Vue from 'vue'
import AMap from 'vue-amap'

Vue.use(AMap)
AMap.initAMapApiLoader({
  key: 'your amap key',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
})
