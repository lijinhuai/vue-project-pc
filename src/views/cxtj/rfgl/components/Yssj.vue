<template>
  <ECharts ref="echarts" :options="option" auto-resize></ECharts>
</template>

<script>
import ECharts from 'vue-echarts/components/ECharts'
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
            data: [50, 20, 20, 60, 70, 30, 50, 100, 200, 40, 280, 100]
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
