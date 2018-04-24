<template>
  <ECharts :options="option" auto-resize></ECharts>
</template>

<script>
import ECharts from 'vue-echarts/components/ECharts'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip'
export default {
  name: 'dlsj',
  data () {
    return {
      option: {}
    }
  },
  components: {
    ECharts
  },
  props: {
    data: Object
  },
  methods: {
    showChart () {
      this.option = {
        title: {
          text: '最近12个月用电量分布'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.data.labels
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value} 度'
          },
          axisPointer: {
            snap: true
          }
        },
        series: [
          {
            name: '用电量',
            type: 'line',
            smooth: true,
            data: this.data.dataset.data
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
.echarts {
  width: 100%;
  height: 100%;
}
</style>

