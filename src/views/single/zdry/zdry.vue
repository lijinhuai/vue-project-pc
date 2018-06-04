<template>
  <div class="body">
    <div style="position: absolute; left: 0; right: 0; margin: 30px auto;">
      <div class="home-ranking-list" style="width: 350px;  margin-left: 30px;">
        <h4><label>重点人员</label></h4>
        <div style="height:260px; width:200px;left: 20px;background: url(static/image/bg-operator-top2.png) no-repeat;
                                          background-size: 80% auto; margin: 10px 10px 0 90px; color: #f6b407; text-align: center;background-position:center;">
          <span style="display: block;clear: both; font-size: 16px; padding-top: 80px; margin-left: -10px;">{{zdry.communityName}}</span>
          <b style="font-size: 36px; margin-left: -15px;">{{zdry.totalCount}}</b></div>
        <ul class="data-contents-height" style=" padding: 0px 20px; margin-top: -15px; height: 260px;">
          <li>
            <div>
              <ECharts :options="option" auto-resize style="height:250px;width:350px;"></ECharts>
            </div>
          </li>
        </ul>
      </div>
      <div class="home-ranking-list" style="margin-left: 400px;width:calc(100% - 420px);">
        <h4><label>重点人员明细</label>
        </h4>
        <ul class="data-contents-height" style=" padding: 0px 20px; height: 515px;overflow:auto;">
          <li :title="item.bz" v-for="(item, index) in zdry.dataList" :key="item.rybh" style="position:relative;">
            <b style="width:25px;display:inline-block;">{{index+1}}</b>
            <span style="width:60px;height:50px;display:inline-block;"><Photo :zjhm="item.zjhm"></Photo></span>
            <label style="width:60px;display:inline-block;">{{item.bqName}}</label>
            <label v-if="item.xm.length>5" style="min-width:60px;width:145px;display:inline-block;margin-left:10px;">{{item.xm}}</label>
            <label v-else style="min-width:60px;width:60px;display:inline-block;margin-left:10px;">{{item.xm}}</label>
            <span style="width:160px;display:inline-block;margin-left:10px;">{{item.zjhm}}</span>
            <label v-show="index==0" style="display:inline-block;">居住地址：</label>
            <span>{{item.jzdz}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ECharts from 'vue-echarts/components/ECharts'
import Photo from '../equipment/components/Photo'
import {
  fetchZdryCount,
  fetchZdryList,
  fetchWordCloudList
} from '@/api/cxtj/zdry'
import 'echarts-wordcloud'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/title'
import 'echarts/lib/component/tooltip'
export default {
  name: 'zdry',
  data () {
    return {
      option: {
        title: {
          show: false
        },
        tooltip: {
          show: false
        },
        grid: {
          left: 500,
          y: 0,
          x2: 0,
          y2: 0
        },
        series: [
          {
            name: 'Google Trends',
            type: 'wordCloud',
            size: ['80%', '80%'],
            textRotation: [0, 45, 90, -45],
            textPadding: 0,
            autoSize: {
              enable: true,
              minSize: 14
            },
            // Global text style
            textStyle: {
              normal: {
                fontFamily: 'sans-serif',
                fontWeight: 'bold',
                // Color can be a callback function or a color string
                color: function () {
                  // Random color
                  return (
                    'rgb(' +
                    [
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160)
                    ].join(',') +
                    ')'
                  )
                }
              },
              emphasis: {
                shadowBlur: 10,
                shadowColor: '#333'
              }
            },
            data: []
          }
        ]
      },
      queryFrom: {
        xqbh: ''
      },
      zdry: {
        totalCount: 0,
        communityName: '',
        dataList: []
      }
    }
  },
  mounted () {
    this.queryFrom.xqbh = this.$route.query.xqbh
    this.zdry.communityName = this.$route.query.name
    fetchZdryCount(this.queryFrom).then(response => {
      this.zdry.totalCount = response.data
    })
    fetchZdryList(this.queryFrom).then(response => {
      this.zdry.dataList = response.data
    })
    fetchWordCloudList(this.queryFrom).then(response => {
      this.option.series[0].data = response.data
    })
    this.init()
  },
  components: {
    ECharts,
    Photo
  },
  methods: {
    createRandomItemStyle () {
      return {
        normal: {
          color:
            'rgb(' +
            [
              Math.round(Math.random() * 160),
              Math.round(Math.random() * 160),
              Math.round(Math.random() * 160)
            ].join(',') +
            ')'
        }
      }
    },
    init () {
      var $cont = document.querySelector('.cont')
      var $elsArr = [].slice.call(document.querySelectorAll('.el.close'))
      var $closeBtnsArr = [].slice.call(
        document.querySelectorAll('.close.el__close-btn')
      )
      setTimeout(function () {
        $cont.classList.remove('s--inactive')
      }, 200)
      $elsArr.forEach(function ($el) {
        $el.addEventListener('click', function () {
          if (this.classList.contains('s--active')) return
          $cont.classList.add('s--el-active')
          $cont.classList.add('close')
          this.classList.add('s--active')
          this.classList.add('close')
        })
      })
      $closeBtnsArr.forEach(function ($btn) {
        $btn.addEventListener('click', function (e) {
          e.stopPropagation()
          $cont.classList.remove('s--el-active')
          document
            .querySelector('.el.close.s--active')
            .classList.remove('s--active')
        })
      })
    }
  }
}
</script>

<style scoped>
@import "~@/views/archive/style.css";
@import "../equipment/style.css";
.dataPic-container.compare .datas-container.trend {
  width: 60%;
}
.dataPic-container .datas-container.trend {
  width: 49%;
  margin: 0 0 30px;
}
.datas-container.trend,
.mainDatas-container.trend {
  background: rgba(29, 51, 121, 0.5);
  padding-bottom: 20px;
  margin: 28px auto 0 20px;
  box-shadow: 0 0 12px rgba(0, 0, 7, 0.4);
  border-radius: 4px;
  width: 320px;
  height: 90%;
  position: relative;
  box-sizing: border-box;
  z-index: 200;
}
.trend-ope {
  background: rgba(62, 69, 131, 0.32);
  height: 52px;
  line-height: 52px;
}
.trend-ope > h3 {
  font-family: montserrat;
  color: rgba(255, 255, 255, 0.7);
  line-height: 49px;
  border-bottom: 3px solid transparent;
  position: relative;
  margin: 0 40px 0 20px;
  font-size: 16px;
}
.behavior-total-data label {
  color: #00d294;
  font-size: 14px !important;
}
.data-container {
  color: #1588ef;
  font-weight: bold;
  font-size: 14px !important;
}
.data-container span {
  font-size: 14px;
  font-weight: normal;
  line-height: 2rem;
  color: hsla(0, 0%, 100%, 0.7);
}
.data-contents-height * {
  box-sizing: border-box;
}
.data-contents-height::-webkit-scrollbar {
  width: 6px;
  height: 2px;
}
.data-contents-height::-webkit-scrollbar-thumb {
  border-radius: 1px;
  background: #2b85e4;
}
.data-contents-height::-webkit-scrollbar-track {
  border-radius: 1px;
  background: #033447;
}
.home-ranking-list {
  background: rgba(29, 51, 121, 0.5);
  border-radius: 4px;
  box-shadow: 0 0 16px 8px rgba(3, 2, 8, 0.1);
  margin-right: 15px;
  position: absolute;
}
.home-ranking-list h4 {
  background: rgba(58, 123, 255, 0.2);
  height: 48px;
  line-height: 48px;
  padding: 0 20px;
  color: rgba(255, 255, 255, 0.8);
}
.home-ranking-list ul {
  padding: 12px 20px;
}
.home-ranking-list ul li {
  font-size: 14px;
  line-height: 46px;
  border-bottom: 1px solid rgba(67, 104, 199, 0.2);
  color: #3690ff;
  list-style: none;
}
.home-ranking-list ul li label {
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
}
.r {
  float: right;
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>

<style lang="less" scoped>
.body {
  background: url(~@/images/archives/bg-container.jpg) top center no-repeat
    fixed;
  background-size: cover;
}
.future_ui__piece {
  span {
    font-size: 30px;
  }
}
</style>
