<template>
  <ECharts :options="option" auto-resize></ECharts>
</template>

<script>
import ECharts from 'vue-echarts/components/ECharts'
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
          data: [
            '1月',
            '2月',
            '3月',
            '4月',
            '5月',
            '6月',
            '7月',
            '8月',
            '9月',
            '10月',
            '11月',
            '12月'
          ]
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
            name: '用电量',
            type: 'line',
            smooth: true,
            data: [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390]
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

