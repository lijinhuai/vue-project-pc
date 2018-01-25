<template>
  <div class="body">
    <div style="position: absolute; left: 0; right: 0; margin: 30px auto;">
      <div class="home-ranking-list" style="width: 380px;  margin-left: 30px; border-top: 2px solid #3a7bff;">
        <h4><label>实有装备</label></h4>
        <div style="height:440px; width:200px;background:url(static/image/877488993.jpg) no-repeat; background-size: 90% auto; margin: 10px auto; color: #f6b407; text-align: center;">
          <span style="display: block;clear: both; font-size: 16px; padding-top: 80px; margin-left: -10px;">万盛金邸</span>
        </div>
        <ul class="data-contents-height" style=" padding: 0px 20px; margin-top: -15px; height: 50px;    text-align: center;">
          <li><label></label><span> 智能门禁（人脸识别） </span></li>
        </ul>
      </div>
      <div class="home-ranking-list" style="width: 830px; margin-left: 430px;     border-top: 2px solid #00e66d;">
        <h4><label></label></h4>
        <ul class="data-contents-height" style=" padding: 0px 20px; margin-top: -15px; height: 510px;">
          <img style="width: 200px; margin: 40px;" src="static/image/cmr.png"></img>
          <img style="width: 200px; margin: 40px; float: right;" src="static/image/cmr2.png"></img>
          <img style="width: 200px;margin: 0 auto;display: block;margin-top: -80px;" src="static/image/yanwu.png"></img>
          <img style="width: 200px; margin: 20px; float: right;" src="static/image/wifi.png"></img>
          <li style=" margin-top: -30px;"><label style=" padding-left: 100px;">监控探头</label></li>
          <li style="text-align:right;padding-right:20px;"><label style=" padding-right: 15%;">烟雾感应器</label></li>
          <li style="text-align:right;"><label>wifi嗅探设备</label></li>
          <li><label>&nbsp;</label></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchCompany } from '@/api/cxtj/company'
export default {
  name: 'security',
  data () {
    return {
      company: {
        dwxx: {},
        fr: {
          photo: {
            photoBase64: ''
          }
        },
        cyry: []
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
  }
}
</script>

<style scoped>
@import "~@/views/archive/style.css";
ul.data-contents-height {
  overflow: auto;
  height: 550px;
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
