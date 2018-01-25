<template>
  <div class="body">
    <div class='grain'>
      <div class="datas-container behavior-install-container trend">
        <div class="trend-ope trend clearfix">
          <h4 style="color: rgba(255, 255, 255, 0.8);margin: 0 40px 0 20px;" class="l">法人代表</h4>
        </div>
        <div class="data-container">
          <img style="width: 150px;opacity: 0.9;position: relative;left: 75px;margin-top: 20px;" v-if="company.fr.photo" :src="company.fr.photo.photoBase64"></img>
          <div style="margin-left:60px;">
            <span>姓名：</span> {{company.fr.xm}}
            <span style="background-color: #1857dc; padding: 5px; font-size: 12px; border-radius: 3px; margin-left: 30px;">{{company.fr.syrklbhz}}</span>
          </div>
          <div style="margin-left:60px;">
            <span>性别：</span> {{company.fr.xbhz}}
          </div>
          <div style="margin-left:30px;">
            <span>证件号码：</span> {{company.fr.zjhm}}
          </div>
          <div style="margin-left:60px;">
            <span>民族：</span> {{company.fr.mzhz}}
          </div>
          <div style="margin-left:30px;">
            <span>文化程度：</span> {{company.fr.whcdhz}}
          </div>
          <div style="margin-left:30px;">
            <span>婚姻状况：</span> {{company.fr.hyzkhz}}
          </div>
          <div style="margin-left:30px;">
            <span>服务处所：</span> {{company.fr.fwcs}}
          </div>
          <div style="margin-left:30px;">
            <span>人物标签：</span> <span v-for="rybq in company.fr.rybqList" :key="rybq.index" style="background-color: #1588ef; padding: 5px; font-size: 12px; border-radius: 3px;">
                      {{rybq.name}}</span> &nbsp;
          </div>
          <div style="margin-left:30px;">
            <span>户籍地址：</span> {{company.fr.hjdz}}
          </div>
          <div style="margin-left:30px;">
            <span>居住地址：</span> {{company.fr.jzdz}}
          </div>
        </div>
      </div>
    </div>
    <div style="position: absolute; width: calc(100vw - 340px); height: 90%; margin: 30px 340px;  background: rgba(29,51,121,.5);">
      <div class="home-ranking-list" style="width: 380px;  margin-left: 20px;">
        <h4>
          <label>单位信息</label>
        </h4>
        <ul class="data-contents-height" style=" padding: 0px 20px;">
          <li>
            <label>单位名称</label>
            <span>
                  {{company.dwxx.dwmc}}</span>
          </li>
          <li>
            <label>单位简称</label>
            <span>
                  {{company.dwxx.dwjc}}</span>
          </li>
          <li>
            <label>组织机构</label>
            <span>
                  {{company.dwxx.zzjgdm}}</span>
          </li>
          <li>
            <label>营业执照</label>
            <span>
                  {{company.dwxx.yyzzbh}}</span>
          </li>
          <li>
            <label>经营地址</label>
            <span>
                  {{company.dwxx.jydz}}</span>
          </li>
          <li>
            <label>注册地址</label>
            <span>
                  {{company.dwxx.zcdz}}</span>
          </li>
          <li>
            <label>法人代表</label>
            <span>
                  {{company.dwxx.frdb}}</span>
          </li>
          <li>
            <label>法人电话</label>
            <span>
                  {{company.dwxx.frlxdh}}</span>
          </li>
          <li>
            <label>法人证件</label>
            <span>
                  {{company.dwxx.frzjhm}}</span>
          </li>
          <li>
            <label>治安责任人</label>
            <span>
                  {{company.dwxx.zazrr}}</span>
          </li>
          <li>
            <label>联系电话</label>
            <span>
                  {{company.dwxx.lxdh}}</span>
          </li>
        </ul>
      </div>
      <div class="home-ranking-list" style="width: 530px; margin-left: 420px;">
        <h4>
          <label>从业人员</label>
        </h4>
        <ul class="data-contents-height" style=" padding: 0px 20px;">
          <li v-for="(ry,index) in company.cyry" :key="ry.index">
            <Poptip trigger="hover" :content="ry.lxdh">
              <b style="width:15px;display:inline-block;">{{index+1}}</b>
              <label style="width:62px; padding-left: 20px;display:inline-block;">{{ry.xm}}</label>
              <label style=" padding-left: 20px;">{{ry.xbhz}}</label>
              <span style="width:160px; padding-left: 20px;display:inline-block;">
                  <strong>{{ry.zjhm}}</strong>
                </span>
              <span style="padding-left:10px;">{{ry.zzdz}}</span>
            </Poptip>
          </li>
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
