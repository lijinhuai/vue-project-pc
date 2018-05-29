<template>
  <div class="body">
    <div v-show="showSyll" style="position: absolute; left: 0; right: 0; margin: 30px auto;">
      <div class="home-ranking-list" style="width: 350px;  margin-left: 30px;">
        <h4><label>实有力量</label></h4>
        <div style="height:260px; width:200px;left: 20px;background: url(static/image/bg-operator-top2.png) no-repeat;
                                          background-size: 80% auto; margin: 10px 10px 0 90px; color: #f6b407; text-align: center;background-position:center;">
          <span style="display: block;clear: both; font-size: 16px; padding-top: 80px; margin-left: -10px;">{{equipment.communityName}}</span>
          <b style="font-size: 36px; margin-left: -15px;">{{equipment.totalCount}}</b></div>
        <ul class="data-contents-height" style=" padding: 0px 20px; margin-top: -15px; height: 260px;">
          <li>
            <div>
              <ECharts :options="option" auto-resize style="height:250px;width:350px;"></ECharts>
            </div>
          </li>
        </ul>
      </div>
      <div class="home-ranking-list" style="margin-left: 400px;">
        <h4><label>可依靠力量</label>
          <label style="float: right; font-size: 14px; text-decoration: underline; color: #00d294;cursor:pointer;" @click="showEqup=true;showSyll=false;">警械装备</label>
        </h4>
        <ul class="data-contents-height" style=" padding: 0px 20px; height: 515px;overflow:auto;">
          <li v-for="(item, index) in equipment.dataList" :key="item.rybh" style="position:relative;">
            <b style="width:25px;display:inline-block;">{{index+1}}</b>
            <span style="width:60px;height:50px;display:inline-block;"><Photo :zjhm="item.sfzh"></Photo></span>
            <label style="width:60px;display:inline-block;">{{item.xm}}</label>
            <label style="width:30px;;display:inline-block;">{{item.xbhz}}</label>
            <span style="width:165px;display:inline-block;">{{item.sfzh}}</span>
            <span style="width:100px;display:inline-block;"><strong>{{item.sjhm}}</strong></span>
            <span style="width:100px;display:inline-block; "><strong>{{item.bmzw}}</strong></span>
            <label v-show="index==0" style="display:inline-block;">户籍地址：</label>
            <span>{{item.hjdz}}</span>
          </li>
        </ul>
      </div>
    </div>
    <transition name="bounce">
      <div v-show="showEqup" style="position: absolute; left: 0; right: 0; margin: 30px auto;">
        <div class="home-ranking-list" style="width: 350px;  margin-left: 30px;">
          <h4><label>警械装备</label>
          </h4>
          <ul class="data-contents-height" style=" padding: 0px 20px; height: 515px;overflow:auto;">
            <li v-for="(item, index) in equipment.syllzb" :key="item.id">
              <b style="width:90px;display:inline-block;">{{index+1}}</b>
              <label style="width:150px;display:inline-block;">{{item.x}}</label>
              <label style="width:50px;;display:inline-block;">{{item.y}}</label>
            </li>
          </ul>
        </div>
        <div class="home-ranking-list" style="margin-left: 400px;">
          <h4><label>警械装备饼图</label>
            <label style="float: right; font-size: 14px; text-decoration: underline; color: #00d294;cursor:pointer;" @click="showEqupPic=true">警械装备(图)</label>
            <label style="float: right; font-size: 14px; text-decoration: underline; color: #00d294;cursor:pointer;margin-right:10px;" @click="showSyll=true;showEqup=false">实有力量</label>
          </h4>
          <Row>
            <Col span="8">
            <div>
              <ECharts :options="pie.option1" auto-resize style="height:257px;width:250px;"></ECharts>
            </div>
            </Col>
            <Col span="8">
            <div>
              <ECharts :options="pie.option2" auto-resize style="height:257px;width:250px;"></ECharts>
            </div>
            </Col>
            <Col span="8">
            <div>
              <ECharts :options="pie.option3" auto-resize style="height:257px;width:250px;"></ECharts>
            </div>
            </Col>
            <Col span="8">
            <div>
              <ECharts :options="pie.option4" auto-resize style="height:257px;width:250px;"></ECharts>
            </div>
            </Col>
            <Col span="8">
            <div>
              <ECharts :options="pie.option5" auto-resize style="height:257px;width:250px;"></ECharts>
            </div>
            </Col>
            <Col span="8">
            <div>
              <ECharts :options="pie.option6" auto-resize style="height:257px;width:250px;"></ECharts>
            </div>
            </Col>
          </Row>
          <!-- <ul class="data-contents-height" style=" padding: 0px 20px; margin-top: -15px;">
                        <li style="width:200px;display:inline-block;">
                        </li>
                        <li style="width:200px;display:inline-block;">
                          <div style="width:200px;display:inline-block;">
                            <ECharts :options="pie.option" auto-resize style="height:200px;"></ECharts>
                          </div>
                        </li>
                        <li style="width:200px;display:inline-block;">
                          <div style="width:200px;display:inline-block;">
                            <ECharts :options="pie.option" auto-resize style="height:200px;"></ECharts>
                          </div>
                        </li>
                      </ul> -->
        </div>
      </div>
    </transition>
    <transition name="bounce">
      <div v-show="showEqupPic" class="cont s--inactive">
        <div style="height:60px;background:#1f1f1f" class="el s--active">
          <div class="close el__equp_close-btn" @click="showEqupPic=false" style="width:40px;height:40px;"></div>
        </div>
        <!-- cont inner start -->
        <div class="cont__inner">
          <!-- el start -->
          <div class="el close">
            <div class="el__overflow">
              <div class="el__inner">
                <div class="el__bg"></div>
                <div class="el__preview-cont">
                  <h2 class="el__heading">警务车辆</h2>
                </div>
                <div class="el__content">
                  <div class="el__text">警务车辆</div>
                  <div class="close el__close-btn"></div>
                </div>
              </div>
            </div>
            <div class="el__index">
              <div class="el__index-back">1</div>
              <div class="el__index-front">
                <div class="el__index-overlay" data-index="1">1</div>
              </div>
            </div>
          </div>
          <!-- el end -->
          <!-- el start -->
          <div class="el close">
            <div class="el__overflow">
              <div class="el__inner">
                <div class="el__bg"></div>
                <div class="el__preview-cont">
                  <h2 class="el__heading">执法记录仪</h2>
                </div>
                <div class="el__content">
                  <div class="el__text">执法记录仪</div>
                  <div class="close el__close-btn"></div>
                </div>
              </div>
            </div>
            <div class="el__index">
              <div class="el__index-back">2</div>
              <div class="el__index-front">
                <div class="el__index-overlay" data-index="2">2</div>
              </div>
            </div>
          </div>
          <!-- el end -->
          <!-- el start -->
          <div class="el close">
            <div class="el__overflow">
              <div class="el__inner">
                <div class="el__bg"></div>
                <div class="el__preview-cont">
                  <h2 class="el__heading">数字电台</h2>
                </div>
                <div class="el__content">
                  <div class="el__text">350M数字电台</div>
                  <div class="close el__close-btn"></div>
                </div>
              </div>
            </div>
            <div class="el__index">
              <div class="el__index-back">3</div>
              <div class="el__index-front">
                <div class="el__index-overlay" data-index="3">3</div>
              </div>
            </div>
          </div>
          <!-- el end -->
          <!-- el start -->
          <div class="el close">
            <div class="el__overflow">
              <div class="el__inner">
                <div class="el__bg"></div>
                <div class="el__preview-cont">
                  <h2 class="el__heading">单警装备</h2>
                </div>
                <div class="el__content">
                  <div class="el__text">单警装备</div>
                  <div class="close el__close-btn"></div>
                </div>
              </div>
            </div>
            <div class="el__index">
              <div class="el__index-back">4</div>
              <div class="el__index-front">
                <div class="el__index-overlay" data-index="4">4</div>
              </div>
            </div>
          </div>
          <!-- el end -->
          <!-- el start -->
          <div class="el close">
            <div class="el__overflow">
              <div class="el__inner">
                <div class="el__bg"></div>
                <div class="el__preview-cont">
                  <h2 class="el__heading">警务终端</h2>
                </div>
                <div class="el__content">
                  <div class="el__text">警务终端及微信警务室</div>
                  <div class="close el__close-btn"></div>
                </div>
              </div>
            </div>
            <div class="el__index">
              <div class="el__index-back">5</div>
              <div class="el__index-front">
                <div class="el__index-overlay" data-index="5">5</div>
              </div>
            </div>
          </div>
          <!-- el end -->
        </div>
        <!-- cont inner end -->
      </div>
    </transition>
  </div>
</template>

<script>
import ECharts from 'vue-echarts/components/ECharts'
import Photo from './components/Photo'
import {
  fetchEquipmentCount,
  fetchEquipmentList,
  fetchWordCloudList,
  fetchSyllzb,
  fetchSyllzbByLb
} from '@/api/cxtj/equipment'
import 'echarts-wordcloud'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/title'
import 'echarts/lib/component/tooltip'
export default {
  name: 'equipment',
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
      pie: {
        option1: {
          title: {
            text: '持枪证人员',
            x: 'center',
            textStyle: {
              color: '#fff'
            },
            top: 30
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          series: [
            {
              name: '持枪证人员',
              type: 'pie',
              radius: '40%',
              center: ['50%', '50%'],
              data: [],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        },
        option2: {
          title: {
            text: '防护装备',
            x: 'center',
            textStyle: {
              color: '#fff'
            },
            top: 30
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          series: [
            {
              name: '防护装备',
              type: 'pie',
              radius: '40%',
              center: ['50%', '50%'],
              data: [],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        },
        option3: {
          title: {
            text: '警械装备',
            x: 'center',
            textStyle: {
              color: '#fff'
            },
            top: 30
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          series: [
            {
              name: '警械装备',
              type: 'pie',
              radius: '40%',
              center: ['50%', '50%'],
              data: [],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        },
        option4: {
          title: {
            text: '枪弹配置',
            x: 'center',
            textStyle: {
              color: '#fff'
            },
            top: 30
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          series: [
            {
              name: '枪弹配置',
              type: 'pie',
              radius: '40%',
              center: ['50%', '50%'],
              data: [],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        },
        option5: {
          title: {
            text: '枪支配额',
            x: 'center',
            textStyle: {
              color: '#fff'
            },
            top: 30
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          series: [
            {
              name: '枪支配额',
              type: 'pie',
              radius: '40%',
              center: ['50%', '50%'],
              data: [],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        },
        option6: {
          title: {
            text: '武器库室',
            x: 'center',
            textStyle: {
              color: '#fff'
            },
            top: 30
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          series: [
            {
              name: '武器库室',
              type: 'pie',
              radius: '40%',
              center: ['50%', '50%'],
              data: [],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        }
      },
      showSyll: true,
      showEqupPic: false,
      showEqup: false,
      queryFrom: {
        pcsdm: '',
        jcwdm: '',
        jlxdm: ''
      },
      equipment: {
        totalCount: 0,
        communityName: '',
        dataList: [],
        syllzb: []
      }
    }
  },
  mounted () {
    this.queryFrom.pcsdm = this.$route.query.pcsdm
    this.queryFrom.jcwdm = this.$route.query.jcwdm
    this.queryFrom.jlxdm = this.$route.query.jlxdm
    this.equipment.communityName = this.$route.query.name
    fetchEquipmentCount(this.queryFrom).then(response => {
      this.equipment.totalCount = response.data
    })
    fetchEquipmentList(this.queryFrom).then(response => {
      this.equipment.dataList = response.data
    })
    fetchWordCloudList(this.queryFrom).then(response => {
      this.option.series[0].data = response.data
    })
    fetchSyllzb(this.queryFrom).then(response => {
      this.equipment.syllzb = response.data
    })
    fetchSyllzbByLb(this.queryFrom, 'CQZ').then(response => {
      this.pie.option1.series[0].data = response.data
    })
    fetchSyllzbByLb(this.queryFrom, 'FHZB').then(response => {
      this.pie.option2.series[0].data = response.data
    })
    fetchSyllzbByLb(this.queryFrom, 'JXZB').then(response => {
      this.pie.option3.series[0].data = response.data
    })
    fetchSyllzbByLb(this.queryFrom, 'QD').then(response => {
      this.pie.option4.series[0].data = response.data
    })
    fetchSyllzbByLb(this.queryFrom, 'QZ').then(response => {
      this.pie.option5.series[0].data = response.data
    })
    fetchSyllzbByLb(this.queryFrom, 'WQK').then(response => {
      this.pie.option6.series[0].data = response.data
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
    },
    showPersonPic () {
      alert(1)
    }
  }
}
</script>

<style scoped>
@import "~@/views/archive/style.css";
@import "./style.css";
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
