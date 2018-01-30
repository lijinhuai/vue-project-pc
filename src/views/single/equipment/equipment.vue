<template>
  <div class="body">
    <div style="position: absolute; left: 0; right: 0; margin: 30px auto;">
      <div class="home-ranking-list" style="width: 350px;  margin-left: 30px;">
        <h4><label>实有力量</label></h4>
        <div style="height:240px; width:200px;left: 20px;background: url(static/image/bg-operator-top2.png) no-repeat;
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
        <h4><label>人员信息</label></h4>
        <ul class="data-contents-height" style=" padding: 0px 20px; height: 500px;">
          <li><b>１</b><label style="width:70px;display:inline-block;padding-left: 20px;">马印珠</label><label style=" padding-left: 20px;">女</label>
            <span style="width:165px;display:inline-block;padding-left: 20px;">31022919800603124X</span>
            <span style=" padding-left: 30px;"><strong>13482183678</strong></span>
            <span style=" padding-left: 30px;"><strong>项目经理</strong></span>
            <span class="r">上海市青浦区华新镇坚强村240号</span>
            <label class="r">户籍地址：</label></li>
          <li><b>２</b><label style="width:70px;display:inline-block; padding-left: 20px;">严&nbsp;&nbsp;&nbsp;&nbsp;斌</label><label style=" padding-left: 20px;">男</label>
            <span style="width:165px;display:inline-block; padding-left: 20px;">330402198811280614</span>
            <span style=" padding-left: 30px;"><strong>13621854226</strong></span>
            <span style=" padding-left: 30px;"><strong>消防事故应急</strong></span>
            <span class="r">浙江省嘉兴市洪波路菜场6栋602</span></li>
          <li><b>３</b><label style="width:70px;display:inline-block; padding-left: 20px;">张振军</label><label style=" padding-left: 20px;">男</label>
            <span style="width:165px;display:inline-block; padding-left: 20px;">330422196909266032</span>
            <span style=" padding-left: 30px;"><strong>15121086276</strong></span>
            <span style=" padding-left: 30px;"><strong>维修工</strong></span>
            <span class="r">浙江省平湖市新仓镇庆丰村张家宅基19号</span></li>
          <li><b>４</b><label style="width:70px;display:inline-block; padding-left: 20px;">沈元军</label><label style=" padding-left: 20px;">男</label>
            <span style="width:165px;display:inline-block; padding-left: 20px;">310228196501295810</span>
            <span style=" padding-left: 30px;"><strong>18201926309</strong></span>
            <span style=" padding-left: 30px;"><strong>维修工</strong></span>
            <span class="r">上海市金山区黄弄村12号</span></li>
          <li><b>５</b><label style="width:70px;display:inline-block; padding-left: 20px;">叶&nbsp;&nbsp;&nbsp;&nbsp;燕</label><label style=" padding-left: 20px;">女</label>
            <span style="width:165px;display:inline-block; padding-left: 20px;">310228198207251226</span>
            <span style=" padding-left: 30px;"><strong>15000576651</strong></span>
            <span style=" padding-left: 30px;"><strong>管理员</strong></span>
            <span class="r">金山廊下光明8组5035号</span></li>
          <li><b>６</b><label style="width:70px;display:inline-block; padding-left: 20px;">周士娇</label><label style=" padding-left: 20px;">女</label>
            <span style="width:165px;display:inline-block; padding-left: 20px;">452124198406010347</span>
            <span style=" padding-left: 30px;"><strong>15221806160</strong></span>
            <span style=" padding-left: 30px;"><strong>管理员</strong></span>
            <span class="r">广西省上林县巷贤镇大山村朝京庄15号</span></li>
          <li><b>７</b><label style="width:70px;display:inline-block; padding-left: 20px;">丁红珍</label><label style=" padding-left: 20px;">女</label>
            <span style="width:165px;display:inline-block; padding-left: 20px;">310228197404031826</span>
            <span style=" padding-left: 30px;"><strong>18916006985</strong></span>
            <span style=" padding-left: 30px;"><strong>监控员</strong></span>
            <span class="r">上海市金山区张堰镇建农村4组3033号</span></li>
          <li><b>８</b><label style="width:70px;display:inline-block; padding-left: 20px;">沈&nbsp;&nbsp;&nbsp;&nbsp;华</label><label style=" padding-left: 20px;">女</label>
            <span style="width:165px;display:inline-block; padding-left: 20px;">310228197309161825</span>
            <span style=" padding-left: 30px;"><strong>13916957515</strong></span>
            <span style=" padding-left: 30px;"><strong>班长</strong></span>
            <span class="r">上海市金山区张堰镇张溪路435弄15号</span></li>
          <li><b>９</b><label style="width:70px;display:inline-block; padding-left: 20px;">周兴龙</label><label style=" padding-left: 20px;">男</label>
            <span style="width:165px;display:inline-block; padding-left: 20px;">310228196606163814</span>
            <span style=" padding-left: 30px;"><strong>15316675015</strong></span>
            <span style=" padding-left: 30px;"><strong>保安</strong></span>
            <span class="r">上海市金山区山阳镇卫东村14组7052号</span></li>
          <li><b>10</b><label style="width:70px;display:inline-block; padding-left: 20px;">张冲观</label><label style=" padding-left: 20px;">男</label>
            <span style="width:165px;display:inline-block; padding-left: 20px;">310228196108142033</span>
            <span style=" padding-left: 30px;"><strong>18149791617</strong></span>
            <span style=" padding-left: 30px;"><strong>保洁</strong></span>
            <span class="r">金山区金山卫镇八字村联星26组8019号</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ECharts from 'vue-echarts/components/ECharts'
import 'echarts-wordcloud'
import { fetchCompany } from '@/api/cxtj/company'
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
      }
    }
  },
  mounted () {
    let dwbh = this.$route.query.dwbh
    if (dwbh) {
      fetchCompany(dwbh).then(response => {
        if (response.data.fr) {
          this.company.fr = response.data.fr
        }
        if (response.data.cyry) {
          this.company.cyry = response.data.cyry
        }
        if (response.data.dwxx) {
          this.company.dwxx = response.data.dwxx
        }
      })
    }
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
    }
  }
}
</script>

<style scoped>
@import "~@/views/archive/style.css";
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
.bubble {
  width: 100%;
  height: 370px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}
.bubble_list {
  width: 63%;
  height: inherit;
  margin: 0 auto;
  position: relative;
}
.bubble_item {
  border-radius: 50%;
  position: absolute;
  display: table;
}
.bubble_item:nth-child(1) {
  width: 85px;
  height: 85px;
  top: 80px;
  right: 108px;
  background: rgba(238, 190, 0, 0.9);
  z-index: 1;
}
.bubble_item p {
  width: inherit;
  text-align: center;
  vertical-align: middle;
  display: table-cell;
  color: #fff;
}
.bubble_item:nth-child(2) {
  width: 130px;
  height: 130px;
  top: 10px;
  left: 55px;
  background: rgba(63, 178, 138, 0.9);
  z-index: 2;
}
.bubble_min {
  background: #eaedfc;
  border-radius: 50%;
  position: absolute;
  opacity: 0.5;
}
.bubble_min:nth-child(1) {
  width: 20px;
  height: 20px;
  top: 100px;
  left: 40px;
}
.bubble_min:nth-child(2) {
  width: 90px;
  height: 90px;
  top: 130px;
  left: 110px;
}
.bubble_min:nth-child(3) {
  width: 50px;
  height: 50px;
  top: 90px;
  left: 180px;
}
.bubble_min:nth-child(4) {
  width: 30px;
  height: 30px;
  top: 250px;
  left: 300px;
}
.bubble_min:nth-child(5) {
  width: 30px;
  height: 30px;
  top: 110px;
  right: 200px;
}
.ani_top_top {
  -webkit-animation-name: ani_bubble_top_top;
  -moz-animation-name: ani_bubble_top_top;
  animation-name: ani_bubble_top_top;
}
.ani_time_8 {
  -webkit-animation-duration: 8s;
  -moz-animation-duration: 8s;
  animation-duration: 8s;
}
.ani_time_10 {
  -webkit-animation-duration: 10s;
  -moz-animation-duration: 10s;
  animation-duration: 10s;
}
.ani_time_12 {
  -webkit-animation-duration: 12s;
  -moz-animation-duration: 12s;
  animation-duration: 12s;
}
.ani_auto {
  -webkit-animation-timing-function: linear;
  -webkit-animation-fill-mode: both;
  -webkit-animation-iteration-count: infinite;
  -moz-animation-timing-function: linear;
  -moz-animation-fill-mode: both;
  -moz-animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-fill-mode: both;
  animation-iteration-count: infinite;
}
@-webkit-keyframes ani_bubble_top_top {
  0%,
  100%,
  50% {
    -webkit-transform: translateY(0);
  }
  25% {
    -webkit-transform: translateY(15px);
  }
  75% {
    -webkit-transform: translateY(-15px);
  }
}
@-moz-keyframes ani_bubble_top_top {
  0%,
  100%,
  50% {
    -moz-transform: translateY(0);
  }
  25% {
    -moz-transform: translateY(15px);
  }
  75% {
    -moz-transform: translateY(-15px);
  }
}
@keyframes ani_bubble_top_top {
  0% {
    transform: translateY(30px);
  }
  100% {
    transform: translateY(-300px);
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
