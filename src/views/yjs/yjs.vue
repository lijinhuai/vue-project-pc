<style lang="less">
@import "./yjs_public.less";
@import "./yjs_index.less";
.card {
  width: 100%;
}
.card:hover {
  border-left: 5px solid brown;
  /*transform: rotate(-2deg);*/
}
.card p {
  color: white;
}
.background_card {
  /*background-color: rgba(15, 20, 63, 0.95);*/
  height: 95%;
  overflow: auto;
  background-image: url(~@/images/yjs/observatory-bg.jpg);
  background-size: cover;
  box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.72);
}
.background_card:hover {
  box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.72);
}
.background_card::-webkit-scrollbar {
  width: 0px;
}
.background_card img {
  width: 40%;
}
.hiddenCard,
.hiddenCard1,
.hiddenCard2,
.hiddenCard3,
.hiddenCard4,
.hiddenCard5,
.hiddenCard6,
.hiddenCard7,
.hiddenCard8,
.hiddenCard9 {
  text-align: center;
}
.hiddenCard,
.hiddenCard1,
.hiddenCard2,
.hiddenCard3,
.hiddenCard4,
.hiddenCard5,
.hiddenCard6,
.hiddenCard7,
.hiddenCard8,
.hiddenCard9 span {
  color: white;
}
.hiddenCard:hover,
.hiddenCard1:hover,
.hiddenCard2:hover,
.hiddenCard3:hover,
.hiddenCard4:hover,
.hiddenCard5:hover,
.hiddenCard6:hover,
.hiddenCard7:hover,
.hiddenCard8:hover,
.hiddenCard9:hover {
  border-left: 5px solid brown;
}
.back_home {
  animation: back_home 1.5s linear infinite;
}
@keyframes back_home {
  0% {
    margin-left: 0.5%;
  }
  50% {
    margin-left: 10%;
  }
  100% {
    margin-left: 0.5%;
  }
}
.back_div:hover {
  margin-top: 25px;
  transition: 0.5s;
}
.showi {
  animation: left_right 1s linear infinite;
}
@keyframes left_right {
  0% {
    margin-left: 10px;
  }
  50% {
    margin-left: 15px;
  }
  100% {
    margin-left: 10px;
  }
}
</style>

<template>
  <div class="index" style='overflow: hidden;'>
    <div class="index-container">
      <div class="page page1">
        <div class="back_div" style="width:8%;height:85px;position: absolute;top:-30px;left: 1%;">
          <div title="返回" class="back_home" @click="backToHome()" style="margin-top: 10px;cursor: pointer;width: 100%;">
            <Icon type="chevron-left" color="whitesmoke"></Icon>
            <Icon type="chevron-left" color="whitesmoke"></Icon>
            <Icon type="chevron-left" color="whitesmoke"></Icon>
          </div>
        </div>
        <div class="search-apply position" style="margin-top: 80px;margin-left: 23%;">
          <div class="search-container clearfix">
            <i class="ivu-icon ivu-icon-ios-search-strong"></i>
            <input type="text" placeholder="输入您想要查询的信息, 如:姓名，身份证号码，联系方式，地址等" class="searchContent" id="searchContent">
            <!-- <Input v-model="value1">
  		        <Select v-model="select1" slot="prepend" style="width: 80px">
  		            <Option value="xm">姓名</Option>
  		            <Option value="hm">号码</Option>
  		            <Option value="sfzh">身份证号</Option>
  		            <Option value="dz">地址</Option>
  		        </Select>
     			</Input>
  -->
            <button class="trans" @click="searchZyk">搜索</button>
          </div>
        </div>
        <div class="user-number position " style="margin-top: 20px;">
          <!-- <h4>中国移动互联网月度活跃终端数</h4> -->
          <h4>金&nbsp;山&nbsp;大&nbsp;情&nbsp;报&nbsp;数&nbsp;据&nbsp;录&nbsp;入&nbsp;总&nbsp;数</h4>
          <div class="mobile-numbers clearfix">
            <div class="mt-number-animate">
              <div class="mt-number-animate-dom">
                <span class="mt-number-animate-span">1</span>
              </div>
              <div class="mt-number-animate-dom">
                <span class="mt-number-animate-span">0</span>
              </div>
              <div class="mt-number-animate-dom">
                <span class="mt-number-animate-span">0</span>
              </div>
              <div class="mt-number-animate-dot">,</div>
              <div class="mt-number-animate-dom">
                <span class="mt-number-animate-span">0</span>
              </div>
              <div class="mt-number-animate-dom">
                <span class="mt-number-animate-span">0</span>
              </div>
              <div class="mt-number-animate-dom">
                <span class="mt-number-animate-span">0</span>
              </div>
              <div class="mt-number-animate-dot">,</div>
              <div class="mt-number-animate-dom">
                <span class="mt-number-animate-span">0</span>
              </div>
              <div class="mt-number-animate-dom">
                <span class="mt-number-animate-span">0</span>
              </div>
              <div class="mt-number-animate-dom">
                <span class="mt-number-animate-span">0</span>
              </div>
            </div>
          </div>
        </div>
        <div class="describe position clearfix">
          <div class="describe-content clearfix">
            <div class="describe-list trans">
              <div class="describe-list-describe trans">
                <span>
                <img src="" alt="" title="">
              </span>
                <label>公安类数据</label>
                <b>洞悉公安动态，提供最新公安类数据</b>
                <a href="javascript:void(0)" @click="open('1')">查看详情</a>
              </div>
            </div>
            <div class="describe-list trans">
              <div class="describe-list-describe trans">
                <span>
              </span>
                <label>联系号码</label>
                <b>匹配联系号码进行搜索</b>
                <a href="javascript:void(0)" @click="open('2')">查看详情</a>
              </div>
            </div>
            <div class="describe-list trans">
              <div class="describe-list-describe trans">
                <span>
                  </span>
                <label>人身份证号</label>
                <b>匹配人身份证号进行搜索</b>
                <a href="javascript:void(0)" @click="open('3')">查看详情</a>
              </div>
            </div>
            <div class="describe-list trans">
              <div class="describe-list-describe trans">
                <span>
                  </span>
                <label>车牌号</label>
                <b>匹配车牌号进行搜索</b>
                <a href="javascript:void(0)" @click="open('4')">查看详情</a>
              </div>
            </div>
            <div class="describe-list trans">
              <div class="describe-list-describe trans">
                <span>
                  </span>
                <label>地址</label>
                <b>匹配人身份证号进行搜索</b>
                <a href="javascript:void(0)" @click="open('5')">查看详情</a>
              </div>
            </div>
            <div class="describe-list trans">
              <div class="describe-list-describe trans">
                <span>
              </span>
                <label>社会资源类数据</label>
                <b>洞悉社会动态，提供最新社会资源类数据</b>
                <a href="javascript:void(0)" @click="open('6')">查看详情</a>
              </div>
            </div>
            <div class="describe-list trans">
              <div class="describe-list-describe trans">
                <span>
                  </span>
                <label>区委办局提供数据</label>
                <b>匹配人身份证号进行搜索</b>
                <a href="javascript:void(0)" @click="open('7')">查看详情</a>
              </div>
            </div>
            <div class="describe-list trans">
              <div class="describe-list-describe trans">
                <span>
              </span>
                <label>公共事业类数据</label>
                <b>查询公共事业数据情况</b>
                <a href="javascript:void(0)" @click="open('8')">查看详情</a>
              </div>
            </div>
            <div class="describe-list trans">
              <div class="describe-list-describe trans">
                <span>
              </span>
                <label>社会采集类</label>
                <b>查询社会采集情况</b>
                <a href="javascript:void(0)" @click="open('9')">查看详情</a>
              </div>
            </div>
            <div class="describe-list trans">
              <div class="describe-list-describe trans">
                <span>
              </span>
                <label>互联网数据</label>
                <b>查询互联网相关数据</b>
                <a href="javascript:void(0)" @click="open('10')">查看详情</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ga-sj></ga-sj>
    <lx-hm></lx-hm>
    <r-sfzh></r-sfzh>
    <c-ph></c-ph>
    <d-z></d-z>
    <sh-zy></sh-zy>
    <qw-bj></qw-bj>
    <gg-sy></gg-sy>
    <sh-cj></sh-cj>
    <hl-w></hl-w>
  </div>
</template>

<script>
import gasj from './components/gasj'
import lxhm from './components/lxhm'
import rsfzh from './components/sfzh'
import cph from './components/cph'
import dz from './components/dz'
import shzy from './components/shzy'
import qwbj from './components/qwbj'
import ggsy from './components/ggsy'
import shcj from './components/shcj'
import hlw from './components/hlwsj'
import { fetchYjsCxList } from '@/api/yjs/yjscx'
export default {
  components: {
    'ga-sj': gasj,
    'lx-hm': lxhm,
    'r-sfzh': rsfzh,
    'c-ph': cph,
    'd-z': dz,
    'sh-zy': shzy,
    'qw-bj': qwbj,
    'gg-sy': ggsy,
    'sh-cj': shcj,
    'hl-w': hlw
  },
  methods: {
    searchZyk () {
      let searchContent = document.getElementById('searchContent')
      if (searchContent.value != null && searchContent.value !== '') {
        console.log(searchContent.value)
        fetchYjsCxList()
          .then(response => {
            this.tj = response.data
          })
          .catch(() => {})
      } else {
        console.log('搜索为null')
      }
    },
    open (num) {
      if (num === '1') {
        let gajm = document.getElementById('gajm')
        gajm.style.display = 'block'
        setTimeout(function () {
          gajm.style.opacity = 1
        }, 50)
      }
      if (num === '2') {
        let lxhm = document.getElementById('lxhm')
        lxhm.style.display = 'block'
        setTimeout(function () {
          lxhm.style.opacity = 1
        }, 50)
      }
      if (num === '3') {
        let rsfzh = document.getElementById('rsfzh')
        rsfzh.style.display = 'block'
        setTimeout(function () {
          rsfzh.style.opacity = 1
        }, 50)
      }
      if (num === '4') {
        let cph = document.getElementById('cph')
        cph.style.display = 'block'
        setTimeout(function () {
          cph.style.opacity = 1
        }, 50)
      }
      if (num === '5') {
        let dz = document.getElementById('dz')
        dz.style.display = 'block'
        setTimeout(function () {
          dz.style.opacity = 1
        }, 50)
      }
      if (num === '6') {
        let shzy = document.getElementById('shzy')
        shzy.style.display = 'block'
        setTimeout(function () {
          shzy.style.opacity = 1
        }, 50)
      }
      if (num === '7') {
        let qwbj = document.getElementById('qwbj')
        qwbj.style.display = 'block'
        setTimeout(function () {
          qwbj.style.opacity = 1
        }, 50)
      }
      if (num === '8') {
        let ggsy = document.getElementById('ggsy')
        ggsy.style.display = 'block'
        setTimeout(function () {
          ggsy.style.opacity = 1
        }, 50)
      }
      if (num === '9') {
        let shcj = document.getElementById('shcj')
        shcj.style.display = 'block'
        setTimeout(function () {
          shcj.style.opacity = 1
        }, 50)
      }
      if (num === '10') {
        let hlw = document.getElementById('hlw')
        hlw.style.display = 'block'
        setTimeout(function () {
          hlw.style.opacity = 1
        }, 50)
      }
    },
    backToHome () {
      this.$router.push({
        name: 'home_index'
      })
    }
  }
}
</script>

