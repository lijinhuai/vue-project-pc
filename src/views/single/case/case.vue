<template>
  <div class="body">
    <div style="position: absolute; left: 0; right: 0; margin: 30px auto;">
      <div class="home-ranking-list" style="margin-left: 20px;">
        <h4><label>警情信息</label><label style="float: right; font-size: 14px; color: #00d294;"> 接报发现单位：金山分局山阳派出所</label></h4>
        <ul class="data-contents-height" style=" padding: 0px 20px;">
          <li><b>１</b><label style=" padding-left: 20px;">2018-01-09 23:50:00</label>
            <label style=" padding-left: 10px;">110报警</label>
            <label style=" padding-left: 10px;">求助</label>
            <label style=" padding-left: 20px;">简要警情：</label>
            <span style=" padding-left: 0px;">2018-01-09 23:50:16，手机号：18217629382，报警人在龙轩路蒙山北路口万盛金邸2单元门口，称：挪车沪K78817。民警协助联系车主。</span>
          </li>
          <li><b>２</b><label style=" padding-left: 20px;">2018-01-05 10:53:00</label>
            <label style=" padding-left: 10px;">110报警</label>
            <label style=" padding-left: 10px;">求助</label>
            <span style=" padding-left: 113px;">2018-01-05 10:53:36，手机号：18964810870，报警人在石化 万盛居委会，称：需挪车，川RD6630，电话联系车主移动车辆。</span></li>
          <li><b>３</b><label style=" padding-left: 20px;">2017-12-28 20:10:00</label>
            <label style=" padding-left: 10px;">110报警</label>
            <label style=" padding-left: 10px;">纠纷</label>
            <span style=" padding-left: 113px;">2017-12-28 20:10:53，手机号：13575355075，报警人在金山万达广场对面“万盛金邸”西区41幢801室，称：租房纠纷请民警到场处理。</span></li>
          <li><b>４</b><label style=" padding-left: 20px;">2017-12-20 20:47:00</label>
            <label style=" padding-left: 10px;">110报警</label>
            <label style=" padding-left: 10px;">非道路交通事故</label>
            <span style=" padding-left: 43px;">2017-12-20 20:47:23，手机号：15618511202，报警人在龙皓路1000弄22号 万盛金邸西区，称：2辆轿车相撞。无人伤 请民警到场处理。</span></li>
          <li style="height: 90px;"><b>５</b><label style=" padding-left: 20px;">2017-12-19 19:51:00</label>
            <label style=" padding-left: 10px;">110报警</label>
            <label style=" padding-left: 10px;">其他求助</label>
            <span style=" padding-left: 85px;">2017-12-19 19:51:26，手机号：17621234345，报警人在龙山路万盛金邸东区6栋楼下，称：停车位被占，需要联系车主挪车沪B581E6。</span><br><span style=" margin-left: 396px;"> 民警电话联系该车车主并告知其驶离现场。</span></li>
          <li style="height: 90px;"><b>６</b><label style=" padding-left: 20px;">2017-12-09 09:19:00</label>
            <label style=" padding-left: 10px;">110报警</label>
            <label style=" padding-left: 10px;">非道路交通事故</label>
            <span style=" padding-left: 43px;">2017-12-09 09:19:10，手机号：13714078526，报警人在龙轩路866弄“万盛金邸”小区东区13号楼门口，称：2辆轿车相撞。</span><br><span style=" margin-left: 396px;">民警到达现场，经了解系两车事故，无人伤，受理。</span></li>
          <li><b>７</b><label style=" padding-left: 20px;">2017-11-27 08:20:00</label>
            <label style=" padding-left: 10px;">110报警</label>
            <label style=" padding-left: 10px;">其他求助</label>
            <span style=" padding-left: 85px;">2017-11-27 08:20:25，手机号：18916045977，报警人在龙轩路 万盛金邸小区内，称：沪C9WG35 挪车。电话联系车主告知移动车辆</span></li>
          <li><b>８</b><label style=" padding-left: 20px;">2017-11-19 11:04:00</label>
            <label style=" padding-left: 10px;">110报警</label>
            <label style=" padding-left: 10px;">其他求助</label>
            <span style=" padding-left: 85px;">2017-11-19 11:04:52，手机号：18930812615，报警人在龙轩路 万盛金邸19栋旁 近蒙山路，称：挪车：苏E10XH8联系车主移动车辆。</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchCompany } from '@/api/cxtj/company'
export default {
  name: 'company',
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
