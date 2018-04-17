<template>
  <ECharts :options="option" auto-resize></ECharts>
</template>

<script>
import ECharts from 'vue-echarts/components/ECharts'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip'
export default {
  name: 'yssj',
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
          text: '最近12个月用水量分布'
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
            formatter: '{value} 吨'
          },
          axisPointer: {
            snap: true
          }
        },
        visualMap: {
          show: false,
          dimension: 0,
          pieces: [
            {
              lte: 6,
              color: 'green'
            },
            {
              gt: 6,
              lte: 8,
              color: 'red'
            },
            {
              gt: 8,
              lte: 14,
              color: 'green'
            },
            {
              gt: 14,
              lte: 17,
              color: 'red'
            },
            {
              gt: 17,
              color: 'green'
            }
          ]
        },
        series: [
          {
            name: '用水量',
            type: 'line',
            smooth: true,
            data: this.data.dataset.data
            // markArea: {
            //   data: [
            //     [
            //       {
            //         name: '早高峰',
            //         xAxis: '07:30'
            //       },
            //       {
            //         xAxis: '10:00'
            //       }
            //     ],
            //     [
            //       {
            //         name: '晚高峰',
            //         xAxis: '17:30'
            //       },
            //       {
            //         xAxis: '21:15'
            //       }
            //     ]
            //   ]
            // }
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
