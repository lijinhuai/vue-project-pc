<template>
  <div class="body">
    <div style="position: absolute; left: 0; right: 0; margin: 30px auto;">
      <div class="home-ranking-list" style="width: 350px;  margin-left: 30px;">
        <h4><label>实有力量</label></h4>
        <div style="height:260px; width:200px;left: 20px;background: url(static/image/bg-operator-top2.png) no-repeat;
              background-size: 80% auto; margin: 10px 10px 0 90px; color: #f6b407; text-align: center;background-position:center;">
          <span style="display: block;clear: both; font-size: 16px; padding-top: 80px; margin-left: -10px;">万盛金邸</span>
          <b style="font-size: 36px; margin-left: -15px;">126</b></div>
        <ul class="data-contents-height" style=" padding: 0px 20px; margin-top: -15px; height: 260px;">
          <li>
            <div>
              <ECharts :options="option" auto-resize style="height:250px;width:350px;"></ECharts>
            </div>
          </li>
        </ul>
      </div>
      <div class="home-ranking-list" style="width: 860px; margin-left: 400px;">
        <h4><label>可依靠力量</label><label style="float: right; font-size: 14px; text-decoration: underline; color: #00d294;cursor:pointer;" @click="showEqup=true">警械装备</label></h4>
        <ul class="data-contents-height" style=" padding: 0px 20px; height: 500px;">
          <li><b>１</b><label style="width:70px;display:inline-block;padding-left: 20px;">方臣</label><label style=" padding-left: 20px;">男</label>
            <span style="width:165px;display:inline-block;padding-left: 20px;">310107198305073438</span>
            <span style=" padding-left: 30px;"><strong>13795349139</strong></span>
            <span style=" padding-left: 30px;"><strong>社区民警</strong></span>
            <span class="r">海芙路228弄371号1102室</span>
            <label class="r">户籍地址：</label></li>
          <li><b>2</b><label style="width:70px;display:inline-block;padding-left: 20px;">马印珠</label><label style=" padding-left: 20px;">女</label>
            <span style="width:165px;display:inline-block;padding-left: 20px;">31022919800603124X</span>
            <span style=" padding-left: 30px;"><strong>13482183678</strong></span>
            <span style=" padding-left: 30px;"><strong>项目经理</strong></span>
            <span class="r">上海市青浦区华新镇坚强村240号</span>
            <li><b>3</b><label style="width:70px;display:inline-block; padding-left: 20px;">严&nbsp;&nbsp;&nbsp;&nbsp;斌</label><label style=" padding-left: 20px;">男</label>
              <span style="width:165px;display:inline-block; padding-left: 20px;">330402198811280614</span>
              <span style=" padding-left: 30px;"><strong>13621854226</strong></span>
              <span style=" padding-left: 30px;"><strong>消防事故应急</strong></span>
              <span class="r">浙江省嘉兴市洪波路菜场6栋602</span></li>
            <li><b>4</b><label style="width:70px;display:inline-block; padding-left: 20px;">张振军</label><label style=" padding-left: 20px;">男</label>
              <span style="width:165px;display:inline-block; padding-left: 20px;">330422196909266032</span>
              <span style=" padding-left: 30px;"><strong>15121086276</strong></span>
              <span style=" padding-left: 30px;"><strong>维修工</strong></span>
              <span class="r">浙江省平湖市新仓镇庆丰村张家宅基19号</span></li>
            <li><b>5</b><label style="width:70px;display:inline-block; padding-left: 20px;">沈元军</label><label style=" padding-left: 20px;">男</label>
              <span style="width:165px;display:inline-block; padding-left: 20px;">310228196501295810</span>
              <span style=" padding-left: 30px;"><strong>18201926309</strong></span>
              <span style=" padding-left: 30px;"><strong>维修工</strong></span>
              <span class="r">上海市金山区黄弄村12号</span></li>
            <li><b>6</b><label style="width:70px;display:inline-block; padding-left: 20px;">叶&nbsp;&nbsp;&nbsp;&nbsp;燕</label><label style=" padding-left: 20px;">女</label>
              <span style="width:165px;display:inline-block; padding-left: 20px;">310228198207251226</span>
              <span style=" padding-left: 30px;"><strong>15000576651</strong></span>
              <span style=" padding-left: 30px;"><strong>管理员</strong></span>
              <span class="r">金山廊下光明8组5035号</span></li>
            <li><b>7</b><label style="width:70px;display:inline-block; padding-left: 20px;">周士娇</label><label style=" padding-left: 20px;">女</label>
              <span style="width:165px;display:inline-block; padding-left: 20px;">452124198406010347</span>
              <span style=" padding-left: 30px;"><strong>15221806160</strong></span>
              <span style=" padding-left: 30px;"><strong>管理员</strong></span>
              <span class="r">广西省上林县巷贤镇大山村朝京庄15号</span></li>
            <li><b>8</b><label style="width:70px;display:inline-block; padding-left: 20px;">丁红珍</label><label style=" padding-left: 20px;">女</label>
              <span style="width:165px;display:inline-block; padding-left: 20px;">310228197404031826</span>
              <span style=" padding-left: 30px;"><strong>18916006985</strong></span>
              <span style=" padding-left: 30px;"><strong>监控员</strong></span>
              <span class="r">上海市金山区张堰镇建农村4组3033号</span></li>
            <li><b>9</b><label style="width:70px;display:inline-block; padding-left: 20px;">沈&nbsp;&nbsp;&nbsp;&nbsp;华</label><label style=" padding-left: 20px;">女</label>
              <span style="width:165px;display:inline-block; padding-left: 20px;">310228197309161825</span>
              <span style=" padding-left: 30px;"><strong>13916957515</strong></span>
              <span style=" padding-left: 30px;"><strong>班长</strong></span>
              <span class="r">上海市金山区张堰镇张溪路435弄15号</span></li>
            <li><b>10</b><label style="width:70px;display:inline-block; padding-left: 20px;">周兴龙</label><label style=" padding-left: 20px;">男</label>
              <span style="width:165px;display:inline-block; padding-left: 20px;">310228196606163814</span>
              <span style=" padding-left: 30px;"><strong>15316675015</strong></span>
              <span style=" padding-left: 30px;"><strong>保安</strong></span>
              <span class="r">上海市金山区山阳镇卫东村14组7052号</span></li>
            <li><b>11</b><label style="width:70px;display:inline-block; padding-left: 20px;">张冲观</label><label style=" padding-left: 20px;">男</label>
              <span style="width:165px;display:inline-block; padding-left: 20px;">310228196108142033</span>
              <span style=" padding-left: 30px;"><strong>18149791617</strong></span>
              <span style=" padding-left: 30px;"><strong>保洁</strong></span>
              <span class="r">金山区金山卫镇八字村联星26组8019号</span></li>
        </ul>
      </div>
    </div>
    <transition name="bounce">
    <div v-show="showEqup" class="cont s--inactive">
      <div style="height:60px;background:#1f1f1f" class="el s--active">
        <div class="close el__equp_close-btn" @click="showEqup=false" style="width:40px;height:40px;"></div>
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
import 'echarts-wordcloud'
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
            data: [
              {
                name: '保安',
                value: 41
              },
              {
                name: '协管员',
                value: 21
              },
              {
                name: '社区民警',
                value: 10
              },
              {
                name: '维修工',
                value: 6
              },
              {
                name: '保安班长',
                value: 5
              },
              {
                name: '监控',
                value: 4
              },
              {
                name: '监控员',
                value: 4
              },
              {
                name: '客服主管',
                value: 2
              },
              {
                name: '保洁班长',
                value: 2
              },
              {
                name: '经理助理',
                value: 2
              },
              {
                name: '项目副经理',
                value: 2
              },
              {
                name: '项目经理',
                value: 2
              },
              {
                name: '班长',
                value: 2
              },
              {
                name: '保安队长',
                value: 1
              },
              {
                name: '收营员',
                value: 1
              },
              {
                name: '收银员',
                value: 1
              },
              {
                name: '工程经理',
                value: 1
              }
            ]
          }
        ]
      },
      showEqup: false
    }
  },
  mounted () {
    this.init()
  },
  components: {
    ECharts
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
          document.querySelector('.el.close.s--active').classList.remove('s--active')
        })
      })
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
.data-contents-height {
  box-sizing: border-box;
  /* height: 350px; */
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
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
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

</style>
